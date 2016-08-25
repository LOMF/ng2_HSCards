module.exports = {
  "port": 8000,
  "injectChanges": false,
  "logLevel": "silent",
   
  "files": [
    "build/**/*.{html,htm,css,js}"
  ],
  "server": {
    "baseDir": "build"
    ,middleware: {
      0: null
    }
  }
  ,open:false
}