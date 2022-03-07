// Create server Express
const express = require('express');
const app = express();
let cors = require('cors');
app.use(express.json()); // siempre debe ir antes de definr los endpoints
app.use(cors());

const { todosRouter } = require('./routes/todos.routes');

//utils
const { sequelize } = require('./utils/database');

app.use('/api/v1/todos', todosRouter);

sequelize
  .authenticate()
  .then(() => console.log('Database Authenticaded'))
  .catch((err) => console.log(err));

sequelize
  .sync()
  .then(() => console.log('Database Synced'))
  .catch((err) => console.log(err));

app.listen(4000, () => {
  console.log('express running');
});
