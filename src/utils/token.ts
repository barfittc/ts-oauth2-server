var randomBytes = require('random-bytes')

export function generateRandomToken(len = 80) {
  return randomBytes.sync(len / 2).toString("hex");
}