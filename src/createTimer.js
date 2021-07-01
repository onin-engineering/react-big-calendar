const sum = x => {
  let s = 0
  for (let i = 0; i < x.length; i++) s += x[i]
  return s
}

const mean = x => sum(x) / x.length

const createTimer = () => {
  const started = {}
  const timings = {}
  const time = label => {
    // started[label] = performance.now()
    started[label] = 0
  }
  const timeEnd = label => {
    // const end = performance.now()
    const end = 0
    if (started[label]) {
      timings[label] = timings[label] || []
      timings[label].push(end - started[label])
    }
  }
  const total = label => sum(timings[label] || [])
  const average = label => mean(timings[label] || [])
  const count = label => (timings[label] || []).length
  const totals = () =>
    Object.keys(timings).map(label => ({ label, total: total(label) }))
  return { time, timeEnd, timings, average, count, total, totals }
}

export default createTimer
