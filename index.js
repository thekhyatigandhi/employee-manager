const inquirer = require("inquirer");
const connection = require("./config/connection.js");
require("console.table");

const mainMenu = () => {
  // http://www.figlet.org/fonts/big.flf
  // http://www.figlet.org/fontdb_example.cgi?font=big.flf
  console.log(`============Employee🖇Tracker=============`);
  inquirer
    .prompt({
      name: "start",
      type: "list",
      message: "What would you like to do",
      choices: [
        "View All Employees", 
        "View All Employees By Department", 
        "View All Employees By Manager", 
        "Add Employee", 
        "Remove Employee", 
        "Update Employee Role", 
        "Update Employee Manager", 
        "View All Roles", 
        "Add Role", 
        "Remove Role", 
        "View All Departments", 
        "Add Department", 
        "Remove Department", 
        "View Total Utilized Budget of a Department", 
        "Exit", 
      ],
    })