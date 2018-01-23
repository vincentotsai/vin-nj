const cpus = require('os').cpus()
const fork = require('child_process').fork

for (var i = 0; i < cpus.length; i++) {
  fork('./worker.js')
}