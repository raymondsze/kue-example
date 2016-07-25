import 'logger';
import kue from 'kue';
import ui from 'kue-ui';
import express from 'express';
import config from 'config';

const { server: { host, port } } = config;
const app = express();
ui.setup({
  apiURL: '/api',
  baseURL: '/kue',
  updateInterval: 5000,
});

// helath check
app.get('/health', (req) => req.status(200).send('OK').end());
// default ui
app.use('/api', kue.app);
// beauity ui
app.use('/kue', ui.app);

app.listen(port, host, (err) => {
  if (err) {
    console.error(err);
  }
  console.info(`Server started at http://${host}:${port}`);
});
