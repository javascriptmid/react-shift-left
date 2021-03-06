import wd from 'wd';

import server from './server';

const driver = wd.promiseChainRemote(server.url, server.port);

export default driver;
