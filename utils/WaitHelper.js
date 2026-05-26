class WaitHelper {
  static async smallWait(page) {
    await page.waitForTimeout(1000);
  }

  static async mediumWait(page) {
    await page.waitForTimeout(3000);
  }
}

export default WaitHelper;
