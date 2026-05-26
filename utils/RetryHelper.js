class RetryHelper {
  static async retry(fn, retries = 3) {
    for (let i = 0; i < retries; i++) {
      try {
        return await fn();
      } catch (error) {
        console.log(`Retry ${i + 1}`);

        if (i === retries - 1) {
          throw error;
        }
      }
    }
  }
}

export default RetryHelper;
