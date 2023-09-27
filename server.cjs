require('dotenv').config();

const app = require('./app-server.js');
const PORT = process.env.PORT || 8005;


app.listen(PORT, () => {
    console.log(`API Listening on port ${PORT}`);
  });
  