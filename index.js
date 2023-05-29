const db = require("./config/connection.js");
const selectTask = require("./lib/selectTask.js");

// Connect to the database and handle errors, then start the application
db.connect(function (err) {
  if (err) {
    throw err;
  }
  init();
});

// Start the application, display the title text, and present the task list prompt using 'selectTask'
function init() {
  selectTask();
}
