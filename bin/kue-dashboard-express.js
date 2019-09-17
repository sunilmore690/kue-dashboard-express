const express = require("express");
const kue = require("kue");
let app = express();
const KueDashboardExpress = require("../lib/mountKueDashboard");


var argv = require("yargs")
  .usage("Usage: $0 [options]")
  .example("$0 -p 3050 -r redis://10.0.0.4:6379 -q q")
  .describe("r", "Redis url")
  .describe("p", "Dashboard port")
  .describe("q", "Prefix to use")
  .default("p", 3000)
  .default("r", "redis://127.0.0.1:6379")
  .default("q", "q")
  .help("h")
  .alias("h", "help").argv;

kue.createQueue({
  redis: argv.r,
  prefix: argv.q
});
KueDashboardExpress(app, "/", "/api");
app.use("/api", kue.app);

app.listen(argv.p);
