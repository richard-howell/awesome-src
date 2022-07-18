"use strict";

const Hapi = require("@hapi/hapi");

// Require your plugins here
const { template } = require("./plugins/template/index");

const init = async () => {
  const server = Hapi.server({
    port: 3030,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/",
    options: {
      tags: ["api"],
      description: "Hello World welcome message",
      notes: "Returns hello world text",
    },
    handler: (request, h) => {
      return "Hello World!";
    },
  });

  // Register your plugin here
  await server.register(template);

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
