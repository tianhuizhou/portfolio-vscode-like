// Return the data converted to user's location
function getLocalDate(utc_string: string) {
  const local_time = new Date(utc_string).toLocaleString('en-US')
  return local_time.split(',')[0]
}

export default {
  getLocalDate,
}
