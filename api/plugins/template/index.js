"use strict";

const template = {
  name: "template",
  version: "1.0.0",
  author: "Richard Howell",
  register: async function (server, options) {
    server.route({
      method: "GET",
      path: "/template",
      options: {
        tags: ['api'],
        description: 'An example plugin template',
        notes: 'Returns a string',
      },
      handler: async (request, h) => {
        return 'Example plugin template ';
      },
    });
  },
};

module.exports = { template };
