require("dotenv").config()
const pg = require("pg")
pg.defaults.ssl = true

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/bucketlist.db3"
    },
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    },
    pool: {
      afterCreate: (connection, done) => {
        connection.run("PRAGMA foreign_keys = ON", done)
      }
    }
  },
  production: {
    client: "pg",
    connection:
      "postgres://ctryhyuayizkwc:5e2d001128e5b366808f72dbb65a1ebbf2e928edbff8f47a14de914e10e0068a@ec2-174-129-227-51.compute-1.amazonaws.com:5432/d1gtb1d2g9mvgk",
    useNullAsDefault: true,
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    },
    pool: {
      min: 2,
      max: 10
    }
  }
}
