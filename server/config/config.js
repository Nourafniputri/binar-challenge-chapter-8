require('dotenv').config()
module.exports = {
  "development": {
    "username": process.env.DB_USERNAME_DEV || "luybgvjh",
    "password": process.env.DB_PASSWORD_DEV || "UMGW9sr0SGdTEp_yTDtzMXR5RavsKI9b",
    "database": process.env.DB_DEV || "luybgvjh",
    "host": "satao.db.elephantsql.com",
    "port": "5432",
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.DB_USERNAME_TEST,
    "password": process.env.DB_PASSWORD_TEST,
    "database": process.env.DB_TEST,
    "host": "satao.db.elephantsql.com",
    "port": "5432",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DB_USERNAME_PROD,
    "password": process.env.DB_PASSWORD_PROD,
    "database": process.env.DB_PROD,
    "host": "satao.db.elephantsql.com",
    "port": "5432",
    "dialect": "postgres"
  }
}
