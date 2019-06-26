import config from './config';

const URL = {
  local: 'localhost',
  remote: 'http://hub-cloud.browserstack.com/wd/hub',
};

const PORT = {
  local: 4444,
  remote: 80,
};

export default {
  url: URL[config.E2E_SERVER],
  port: PORT[config.E2E_SERVER],
};
