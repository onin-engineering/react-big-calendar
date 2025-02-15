import clsx from 'clsx'
import memoize from 'memoize-one'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import DayColumn from './DayColumn'
import TimeGridHeader from './TimeGridHeader'
import TimeGutter from './TimeGutter'
import * as dates from './utils/dates'
import { inRange, sortEvents } from './utils/eventLevels'
import { notify } from './utils/helpers'
import { DayLayoutAlgorithmPropType } from './utils/propTypes'
import Resources from './utils/Resources'

export default class TimeGrid extends Component {
  constructor(props) {
    super(props)

    this.scrollRef = React.createRef()
    this.contentRef = React.createRef()
    this._scrollRatio = null
  }

  UNSAFE_componentWillMount() {
    this.calculateScroll()
  }

  componentDidMount() {
    this.applyScroll()
  }

  handleScroll = e => {
    if (this.scrollRef.current) {
      this.scrollRef.current.scrollLeft = e.target.scrollLeft
    }
  }

  componentDidUpdate() {
    this.applyScroll()
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { range, scrollToTime } = this.props
    // When paginating, reset scroll
    if (
      !dates.eq(nextProps.range[0], range[0], 'minute') ||
      !dates.eq(nextProps.scrollToTime, scrollToTime, 'minute')
    ) {
      this.calculateScroll(nextProps)
    }
  }

  handleSelectAlldayEvent = (...args) => {
    //cancel any pending selections so only the event click goes through.
    this.clearSelection()
    notify(this.props.onSelectEvent, args)
  }

  handleSelectAllDaySlot = (slots, slotInfo) => {
    const { onSelectSlot } = this.props

    const start = new Date(slots[0])
    const end = new Date(slots[slots.length - 1])
    end.setDate(slots[slots.length - 1].getDate() + 1)

    notify(onSelectSlot, {
      slots,
      start,
      end,
      action: slotInfo.action,
      resourceId: slotInfo.resourceId,
    })
  }

  renderEvents(range, events, backgroundEvents, now) {
    let {
      min,
      max,
      components,
      accessors,
      localizer,
      dayLayoutAlgorithm,
    } = this.props

    const resources = this.memoizedResources(this.props.resources, accessors)
    const groupedEvents = resources.groupEvents(events)
    const groupedBackgroundEvents = resources.groupEvents(backgroundEvents)

    return resources.map(([id, resource], i) =>
      range.map((date, jj) => {
        let daysEvents = (groupedEvents.get(id) || []).filter(event =>
          dates.inRange(
            date,
            accessors.start(event),
            accessors.end(event),
            'day'
          )
        )

        let daysBackgroundEvents = (
          groupedBackgroundEvents.get(id) || []
        ).filter(event =>
          dates.inRange(
            date,
            accessors.start(event),
            accessors.end(event),
            'day'
          )
        )

        return (
          <DayColumn
            {...this.props}
            localizer={localizer}
            min={dates.merge(date, min)}
            max={dates.merge(date, max)}
            resource={resource && id}
            components={components}
            isNow={dates.eq(date, now, 'day')}
            key={i + '-' + jj}
            date={date}
            events={daysEvents}
            backgroundEvents={daysBackgroundEvents}
            dayLayoutAlgorithm={dayLayoutAlgorithm}
          />
        )
      })
    )
  }

  render() {
    let {
      events,
      backgroundEvents,
      range,
      rtl,
      selected,
      getNow,
      resources,
      components,
      accessors,
      getters,
      localizer,
      min,
      max,
      showMultiDayTimes,
      longPressThreshold,
      resizable,
      view,
    } = this.props

    let start = range[0],
      end = range[range.length - 1]

    this.slots = range.length

    let allDayEvents = [],
      rangeEvents = [],
      rangeBackgroundEvents = []

    events.forEach(event => {
      if (inRange(event, start, end, accessors)) {
        let eStart = accessors.start(event),
          eEnd = accessors.end(event)

        if (
          accessors.allDay(event) ||
          (dates.isJustDate(eStart) && dates.isJustDate(eEnd)) ||
          (!showMultiDayTimes && !dates.eq(eStart, eEnd, 'day'))
        ) {
          allDayEvents.push(event)
        } else {
          rangeEvents.push(event)
        }
      }
    })

    backgroundEvents.forEach(event => {
      if (inRange(event, start, end, accessors)) {
        rangeBackgroundEvents.push(event)
      }
    })

    allDayEvents.sort((a, b) => sortEvents(a, b, accessors))

    return (
      <div
        className={clsx(
          'rbc-time-view',
          resources && 'rbc-time-view-resources'
        )}
      >
        <TimeGridHeader
          range={range}
          events={allDayEvents}
          rtl={rtl}
          getNow={getNow}
          localizer={localizer}
          selected={selected}
          resources={this.memoizedResources(resources, accessors)}
          selectable={this.props.selectable}
          accessors={accessors}
          getters={getters}
          components={components}
          scrollRef={this.scrollRef}
          longPressThreshold={longPressThreshold}
          onSelectSlot={this.handleSelectAllDaySlot}
          onSelectEvent={this.handleSelectAlldayEvent}
          onDoubleClickEvent={this.props.onDoubleClickEvent}
          onKeyPressEvent={this.props.onKeyPressEvent}
          onDrillDown={this.props.onDrillDown}
          getDrilldownView={this.props.getDrilldownView}
          resizable={resizable}
        />
        <div
          ref={this.contentRef}
          className={`rbc-time-content ${view}`}
          onScroll={this.handleScroll}
        >
          <TimeGutter
            date={start}
            localizer={localizer}
            min={dates.merge(start, min)}
            max={dates.merge(start, max)}
            step={this.props.step}
            getNow={this.props.getNow}
            timeslots={this.props.timeslots}
            components={components}
            className="rbc-time-gutter"
            getters={getters}
          />
          {this.renderEvents(
            range,
            rangeEvents,
            rangeBackgroundEvents,
            getNow()
          )}
        </div>
      </div>
    )
  }

  clearSelection() {
    clearTimeout(this._selectTimer)
    this._pendingSelection = []
  }

  applyScroll() {
    if (this._scrollRatio != null) {
      const content = this.contentRef.current
      content.scrollTop = content.scrollHeight * this._scrollRatio
      // Only do this once
      this._scrollRatio = null
    }
  }

  calculateScroll(props = this.props) {
    const { min, max, scrollToTime } = props

    const diffMillis = scrollToTime - dates.startOf(scrollToTime, 'day')
    const totalMillis = dates.diff(max, min)

    this._scrollRatio = diffMillis / totalMillis
  }

  memoizedResources = memoize((resources, accessors) =>
    Resources(resources, accessors)
  )
}

TimeGrid.propTypes = {
  events: PropTypes.array.isRequired,
  backgroundEvents: PropTypes.array.isRequired,
  resources: PropTypes.array,

  step: PropTypes.number,
  timeslots: PropTypes.number,
  range: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  min: PropTypes.instanceOf(Date),
  max: PropTypes.instanceOf(Date),
  getNow: PropTypes.func.isRequired,

  scrollToTime: PropTypes.instanceOf(Date),
  showMultiDayTimes: PropTypes.bool,

  rtl: PropTypes.bool,
  resizable: PropTypes.bool,
  width: PropTypes.number,

  accessors: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired,
  getters: PropTypes.object.isRequired,
  localizer: PropTypes.object.isRequired,

  selected: PropTypes.object,
  selectable: PropTypes.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: PropTypes.number,

  onNavigate: PropTypes.func,
  onSelectSlot: PropTypes.func,
  onSelectEnd: PropTypes.func,
  onSelectStart: PropTypes.func,
  onSelectEvent: PropTypes.func,
  onDoubleClickEvent: PropTypes.func,
  onKeyPressEvent: PropTypes.func,
  onDrillDown: PropTypes.func,
  getDrilldownView: PropTypes.func.isRequired,

  dayLayoutAlgorithm: DayLayoutAlgorithmPropType,

  view: PropTypes.string,
}

TimeGrid.defaultProps = {
  step: 30,
  timeslots: 2,
  min: dates.startOf(new Date(), 'day'),
  max: dates.endOf(new Date(), 'day'),
  scrollToTime: dates.startOf(new Date(), 'day'),
}
