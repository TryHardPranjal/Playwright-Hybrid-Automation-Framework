class DateHelper {
  static getCurrentDate() {
    return new Date().toISOString().split("T")[0];
  }

  static getTimestamp() {
    return Date.now();
  }

  static getFormattedDate() {
    return new Date().toLocaleDateString();
  }
}

export default DateHelper;
