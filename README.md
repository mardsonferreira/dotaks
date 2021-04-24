<h2> dotaks <h2>
A to-do list app.

<h2>:pencil: How to use</h2>

**Requirements**
 - <a href="https://nodejs.org/en/download/">Node.js</a>
 - <a href="https://yarnpkg.com/">Yarn</a>
 - <a href="https://www.docker.com/">Docker</a>
 
 **Getting the project**
 - Clone the project and go to the folder: `$ git clone https://github.com/mardsonferreira/dotaks.git && cd dotaks`.
 
 **Running API**
 - Go to back-end folder: `$ cd backend`
 - Install dependencies: `$ yarn`
 - Create an **.env** file (see .env.example)
 - Run migrations: `$ yarn sequelize db:migrate`
 - Run seeds: `$ yarn sequelize db:seed:all`. This creates a default admin user(username:admin@dotaks.com, password:12345678)
 - Start api server:`yarn dev`
