// src/api/hello/routes/custom-hello.js

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/events/me",
      handler: "event.me",
    },
  ],
};
