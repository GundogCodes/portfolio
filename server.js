require('dotenv').config();
require('./config/database.cjs');
const app = require('./app-server.js');
const PORT = process.env.PORT || 8005;