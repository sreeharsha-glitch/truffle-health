
const shortDayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const shortMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

// in format - day, month date
export const GET_TODAYS_DATE = () => {
  const today = new Date();

  return `${shortDayNames[today.getDay()]}, ${shortMonthNames[today.getMonth()]} ${today.getDate()}`
}

// in fomrat - month date, year
export const FORMAT_VISITED_DATE = (date) => {
  const formattedDate = new Date(date);

  return `${shortMonthNames[formattedDate.getMonth()]} ${formattedDate.getDate()}, ${formattedDate.getFullYear()}`

}
