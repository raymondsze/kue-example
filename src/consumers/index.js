import 'logger';
import kue from 'kue';
import config from 'config';
import consumeExample from './example';

const queue = kue.createQueue(config);
consumeExample(queue);
console.info('Consumers started.');
