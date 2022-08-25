const Pusher = require('pusher');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// deepcode ignore DisablePoweredBy: <please specify a reason of ignoring this>
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const pusher = new Pusher({
  appId: '1467435',
  key: '186e3ce0d881032f7ee9',
//   deepcode ignore HardcodedNonCryptoSecret: <please specify a reason of ignoring this>
  secret: '5585844b15388803f6e7',
  cluster: 'ap2',
  encrypted: true
});
app.set('PORT', process.env.PORT || 8000);

app.post('/message', (req, res) => {
  const payload = req.body;
//   deepcode ignore XSS: <please specify a reason of ignoring this>
  pusher.trigger('chat', 'message', payload);
//   deepcode ignore XSS: <please specify a reason of ignoring this>
  res.send(payload)
});

app.listen(app.get('PORT'), () => 
  console.log('Listening at ' + app.get('PORT')))
