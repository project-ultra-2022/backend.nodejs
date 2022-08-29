"use strict";

import TestRouter from "./routes/TestRouter"

module.exports = function(app) {
    new TestRouter(app);
};
