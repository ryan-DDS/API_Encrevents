import pkg from "pg";
const { Pool } = pkg;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Encrevents",
  password: "postgres",
  port: 5432,
});

export const dbRender = new Pool({
  connectionString:
    "postgresql://postgresencrevements_user:XBhPIlYw2Qd0HRPWKHr87voGw3WNZRH2@dpg-d8c79hsm0tmc73f3u1ig-a.ohio-postgres.render.com/postgresencrevements",

  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;