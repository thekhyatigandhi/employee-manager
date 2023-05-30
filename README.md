# EMPLOYEE MANAGER </br>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Badge](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://nodejs.org/en)
[![Express Badge](https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat)](https://expressjs.com/)
![mysql](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)

## Description

This content management systems (CMS) is a command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL.

- [Application](#Application)
- [Technologies Used](#TechnologiesUsed)
- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)
- [License](#License)

## Application

The following [video](https://youtu.be/eMEfQEJ3AX4) shows the application's appearance and functionality:

https://github.com/thekhyatigandhi/employee-manager/assets/125392517/35fd1d33-bc9f-42e5-aaa9-1184e922bb8d

## Technologies Used

MySQL </br>
Javascript </br>
NODE JS </br>
Express.js </br>

## Installation

Check if you have Node.js installed by typing "node -v" in your command line. If node is not installed, visit the Node.js website to install. </br>
Next, clone this project repository to your computer.
Use the command "npm install" to install dependecies.
Create a file in the root directory titled ".env" and type "PASSWORD='[YOUR PASSWORD HERE]'" </br>
Type "mysql -u root -p" in the terminal and enter your personal MySQL password. </br>
Next, type "source schema.sql" and "source seeds.sql" (These commands will create the employee_db database and seed the database with mock data).</br>

## Usage

Open terminal in "index.js" and run the command "npm start".</br>
Select a desired task and follow the Inquirer prompts.</br>
Choose another task or exit the application.</br>
To exit application, choose "EXIT" from task prompt list.</br>
Reference the video demonstration above as needed.</br>

## Credits

https://nodejs.org/en </br>
https://www.w3schools.com </br>
https://www.w3schools.com/mysql/mysql_join.asp </br>

## License

MIT License.
For more information on the license, please refer to the LICENSE file in the repo
