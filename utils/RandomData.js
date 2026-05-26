class RandomData {
  static getRandomEmail() {
    return `user${Date.now()}@test.com`;
  }

  static getRandomName() {
    return `User${Date.now()}`;
  }

  static getRandomNumber() {
    return Math.floor(Math.random() * 100000);
  }

  static getRandomPassword() {
    return `Pwd${Date.now()}@123`;
  }

  static getRandomPhone() {
    return `98${Math.floor(10000000 + Math.random() * 90000000)}`;
  }
}

export default RandomData;
