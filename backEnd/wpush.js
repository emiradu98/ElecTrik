const webpush = require('web-push');
const express = require('express');
const corse = require('cors');

// const vapidKeys = webpush.generateVAPIDKeys();
let vapidKeys = {
    publicKey:'BHo8Im1icaa5aH2puyklVdByls1_p-2ptgTyYcQcax3lnrEaKft2JvrsqCj8E8bodNj_27FgGLe2jlnWeFZdEM4',
    privateKey:'JrAyUCE5HXOB9p0PKNtavOxB4GW5IJusGFxKKzy3Ink'
};
webpush.setVapidDetails('mailto:val@karpov.io', vapidKeys.publicKey, vapidKeys.privateKey);

const app = express();

app.use(require('body-parser').json());

app.post('/subscribe', (req, res) => {
  const subscription = req.body;
  res.status(201).json({});
  const payload = JSON.stringify({ title: 'test' });

  console.log(subscription);

  webpush.sendNotification(subscription, payload).catch(error => {
    console.error(error.stack);
  });
});

app.use(require('express-static')('./'));

app.listen(3000);