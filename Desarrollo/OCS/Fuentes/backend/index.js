const express = require('express');
require('dotenv').config();

const { connectToDatabase } = require('./src/configs/database.config');

const {
  authRoute,
  userRoute,
  courseRoute,
  enrollRoute,
} = require('./src/routes');

const { errorHandler } = require('./src/middlewares');

const PORT = process.env.PORT || 3000;

const app = express();

<<<<<<< HEAD
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/course', courseRoute);
app.use('/api/enroll', enrollRoute);

app.use(errorHandler);
=======
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World from docker!!');
});
>>>>>>> c1994a3efc3eadfe1e12e8e1a10092e0a5bc3b46

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();
