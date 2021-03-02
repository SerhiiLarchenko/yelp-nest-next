export const mainConfig = (): any => ({
  service: {
    port: Number(process.env.SERVICE_PORT) || 3000,
  },
  database: {
    host: process.env.MONGO_URL,
  },
  yelp: {
    key: process.env.YELP_API_KEY,
  },
});
