require("dotenv").config();

const mongoose = require("mongoose");

// Connect to MongoDB using the DatabaseUrl from the .env file
const Database = mongoose.connect(process.env.DatabaseUrl);

// Export the PORT and jwtKey from the .env file
const PORT = process.env.PORT || 3000;
const jwtKey = process.env.jwtKey || 'Ecomapi';

module.exports = { Database, PORT, jwtKey };
