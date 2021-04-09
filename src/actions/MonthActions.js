export const changeMonth = month => {
  return {
    type: "MONTH_CHANGE",
    selectedMonth: month,
  }
}