"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    // Called after an entry is updated
    async afterUpdate(entry) {
      await strapi.io.emit("characters", entry);
    },
  },
};
