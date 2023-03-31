To repoduce the issue, first set up the needed environment variables:

```eval $(axiom config export --force)```

The code uses the dataset local_dev, but that can be changed if needed.

Run the code with node and you will see a message is logged:

```npm start```

Run the test with vitest and you will see a message is not logged:

```npm test```

However, if you compare index.js and index.test.js it is essentially the same code.
