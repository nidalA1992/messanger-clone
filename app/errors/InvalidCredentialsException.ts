export class InvalidCredentialsException extends Error {
  constructor(msg?: string) {
    super('Invalid Credenitals. ' + msg);
  }
}