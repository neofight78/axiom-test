import { test } from 'vitest';

import winston from 'winston';
import { WinstonTransport as AxiomTransport } from '@axiomhq/axiom-node';

test('Log from inside test', () => {
  const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      new AxiomTransport({
        dataset: 'local_dev'
      }),
    ],
  });

  logger.warn('From index.test.js');
});
