const fs = require('fs');

function appendZeroToLength(value, length) {
  return `${value}`.padStart(length, 0)
}

function getDateAsText() {
  const now = new Date()
  const nowText = `[` + appendZeroToLength(now.getFullYear(), 4) + '.'
    + appendZeroToLength(now.getMonth() + 1, 2) + '.'
    + appendZeroToLength(now.getDate(), 2) + '  '
    + appendZeroToLength(now.getHours(), 2) + ':'
    + appendZeroToLength(now.getMinutes(), 2) + ':'
    + appendZeroToLength(now.getSeconds(), 2) + `]`
  return nowText
}

function logToFile(text, file) {
  const filename = file !== undefined ? file : 'default.log'
  const logText = getDateAsText() + ': ' + text + '\r\n'

  fs.appendFile(filename, logText, 'utf8', function (error) {
    if (error) {
      console.log(getDateAsText() + ': ' + error)
    }
  })
}

module.exports = logToFile;