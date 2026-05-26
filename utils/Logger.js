class Logger {
  static getTimestamp() {
    return new Date().toISOString();
  }

  static format(level, message) {
    return `[${this.getTimestamp()}] [${level}] ${message}`;
  }

  static info(message, data = null) {
    console.log(this.format("INFO", message));

    if (data) {
      console.log(JSON.stringify(data, null, 2));
    }
  }

  static warn(message, data = null) {
    console.warn(this.format("WARN", message));

    if (data) {
      console.warn(JSON.stringify(data, null, 2));
    }
  }

  static error(message, error = null) {
    console.error(this.format("ERROR", message));

    if (error) {
      if (error instanceof Error) {
        console.error(error.stack);
      } else {
        console.error(JSON.stringify(error, null, 2));
      }
    }
  }
}

export default Logger;
