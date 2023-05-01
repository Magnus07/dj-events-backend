const { createCoreRouter } = require("@strapi/strapi").factories;
const defaultRouter = createCoreRouter("api::event.event");

const customRouter = (innerRouter, extraRoutes = []) => {
  let routes;
  return {
    get prefix() {
      return innerRouter.prefix;
    },
    get routes() {
      if (!routes) routes = innerRouter.routes.concat(extraRoutes);
      return routes;
    },
  };
};

const myExtraRoutes = [
  {
    method: "GET",
    path: "/me",
    handler: "event.me",
  },
];

module.exports = customRouter(defaultRouter, myExtraRoutes);
