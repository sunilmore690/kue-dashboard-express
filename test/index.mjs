import express from 'express';
import kue from 'kue'
import KueDashboardExpress from '../lib/mountKueDashboard'
let app = express()
import cors from 'cors'
let queue = kue.createQueue({prefix:'test'})
var email = queue
  .create("email", {
    title:
      "Account renewal required Account renewal required  Account renewal required  abc abc abc abcabcabcabc xyx ddddddddddddddddddd",
    to: "tj@learnboost.com",
    template: "renewal-email"
  })
  .delay(30000)
  .priority("high")
  .save();
  app.use(cors())
KueDashboardExpress(app,'/','/api')
app.use('/api',kue.app)
// app.get('/',(req,res,next)=>res.send('Welcome'))
app.listen(3030,()=>console.log('server listening on 3030'))