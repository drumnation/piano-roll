export function passTime(currentTime) {
  return {
    type: 'time.PASS_TIME',
    time: currentTime
  }
}

export function togglePause() {
  return {
    type: 'time.TOGGLE_BOOLEAN',
    field: 'paused'
  }
}

export function startTime() {
  return {
    type: 'time.START_TIME'
  }
}

export function stopTime() {
  return {
    type: 'time.STOP_TIME'
  }
}
