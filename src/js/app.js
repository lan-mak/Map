export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [404, 'Not Found'],
      [403, 'Forbidden'],
      [400, 'Bad Request'],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
