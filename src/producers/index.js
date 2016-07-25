import 'logger';
import kue from 'kue';
import config from 'config';
import produceExample from './example';
import { CronJob } from 'cron';
const queue = kue.createQueue(config);

new CronJob('* * * * * *', () => { // eslint-disable-line
  produceExample(queue);
}, null, true);
console.info('Producers started.');
