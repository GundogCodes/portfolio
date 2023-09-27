require('dotenv').config();

import app from './app-server'
const PORT = process.env.PORT || 8005;


app.listen(PORT, () => {
    console.log(`API Listening on port ${PORT}`);
  });
  