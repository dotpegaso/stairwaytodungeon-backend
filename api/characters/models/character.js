"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    // Called before an entry is created
    beforeCreate() {},
    // Called after an entry is created
    async afterCreate() {
      await strapi.emitToAllUsers("characters");
    },
  },
};
