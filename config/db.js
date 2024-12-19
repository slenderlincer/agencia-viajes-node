import { Sequelize } from 'sequelize';
import { config as configDotenv } from 'dotenv'; // Import 'config' as configDotenv
configDotenv(); // load environment variables

const db = new Sequelize(process.env.DATABASE_URL, {
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 60000,
    idle: 10000,
  },
  dialectOptions: {
    connectTimeout: 10000, // waiting time
  },
});

export default db;
