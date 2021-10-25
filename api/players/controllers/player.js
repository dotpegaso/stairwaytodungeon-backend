"use strict";
const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  update: async (ctx) => {
    const { id } = ctx.params;
    const entity = await strapi.services.sheet.update({ id }, ctx.request.body);

    strapi.emitToAllUsers(
      "players",
      JSON.stringify({ message: "players updated" })
    );
    return sanitizeEntity(entity, { model: strapi.models.sheet });
  },
};
