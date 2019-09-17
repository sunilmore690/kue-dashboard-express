# Kue-Dashboard-Express

## Introduction
Easy way to mount [Kue-Dashboard](https://github.com/sunilmore690/kue-dashboard) for Express apps.

## Installation
```
$ npm install kue-dashboard-express
```

## Setup

### Mount with Express and Kue

```javascript
var kue = require('kue');
var express = require('express');
var kueDashboardExpress = require('kue-dashboard-express');
var app = express();

kue.createQueue();

kueDashboardExpress(app, '/dashboard', '/kue-api');

// Mount kue JSON api
app.use('/kue-api/', kue.app);

app.listen(3000);
```

### Configuration

The example above mounts the Kue-Dashboard Vuejs  application on the express app at the location `/dashboard` and tells the application to point at `/kue-api/` to access the Kue JSON API.


```
kueDashboardExpress(app, '/interface', 'https://otherdomain.com/kue-api');
```

## Development
This repo is just a wrapper for wrapping [Kue-Dashboard](https://github.com/sunilmore690/kue-dashboard) in an Express app. Most develpment will be done on the main Kue-Dashboard repo.

## Docker
Available on Docker Hub as [sunilmore690/kue-dashboard](https://hub.docker.com/r/sunilmore690/kue-dashboard.

```bash
$ docker run -p 3000:80 -e REDIS_URL=redis://127.0.0.1:6379 -e REDIS_PREFIX=prefix -t sunilmore690/kue-dashboard 
```

where **REDIS_URL** format is  => redis://<username>:<password>@<redis_host>:<redis_port>/<db>

Open http://localhost:3000 in browser
### License
`kue-dashboard-express` is released under the MIT license. See LICENSE.txt for the complete text.
