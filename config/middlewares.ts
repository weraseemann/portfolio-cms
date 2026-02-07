export default [
  "strapi::errors",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: ["http://localhost:5173"],
      headers: ["Content-Type", "Authorization"],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    },
  },
  "strapi::security",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
]