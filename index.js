const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ Hi: 'there' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//checking if commit is working

//https://stark-earth-77010.herokuapp.com/ | https://git.heroku.com/stark-earth-77010.git
