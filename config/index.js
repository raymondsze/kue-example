import path from 'path';
import Yaml from 'yamljs';

const env = process.env.NODE_ENV;
const override = Yaml.load(
  path.resolve(__dirname, `./config${env ? `.${env}` : ''}.yaml`)
);
const config = Yaml.load(
  path.resolve(__dirname, './config.yaml')
);

// default config is config.js
// based on enviromnent to override the configuraton
export default Object.assign({}, config, override);
