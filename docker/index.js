const express = require("express");
const kue = require("kue");
let app = express();
const KueDashboardExpress = require("kue-dashboard-express");

const queue = kue.createQueue({
  disableSearch: false
});
KueDashboardExpress(app, "/", "/");
app.use("/", kue.app);
app.listen(3000);
