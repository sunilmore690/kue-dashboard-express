const serveStatic = require("serve-static");
const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

const indexFile = fs.readFileSync(path.join(__dirname,'../dist/index.html'));

function mountKueDashboard(app, route, apiURL, authmakerConfig) {
  if (!route.startsWith("/")) {
    throw new Error("You must start your route with /");
  }

  app.use(
    serveStatic(path.join(__dirname,'../dist'), {
      index: false
    })
  );

  app.get(route, (req, res) => {
    console.log("done");
    const { window } = new JSDOM(indexFile);

    const scriptEl = window.document.createElement("script");
    scriptEl.text = `window.env = {
        apiUrl: "${apiURL || "/kue-api"}"
        };`;

    window.document.body.prepend(scriptEl);
    // console.log("outerHtml", window.document.documentElement.outerHTML);
    res.send(window.document.documentElement.outerHTML);
  });
}

module.exports = mountKueDashboard;
