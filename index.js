// Express application
import express from 'express';
import compression from 'compression';
import { fileURLToPath } from 'url';
import { dirname, sep } from 'path';

// configuration
const
  __dirname = dirname(fileURLToPath( import.meta.url )) + sep,
  cfg = {
    port: process.env.PORT || 3000,
    dir: {
      root:   __dirname,
      static: __dirname + 'static' + sep
    }
  };

console.dir(cfg, { depth: null, color: true });
// Express initiation
const app = express();

// do not identify Express
app.disable('x-powered-by');

// serve static assets
app.use(express.static( cfg.dir.static ));

// HTTP compression
app.use( compression() );

// log every request to the terminal
app.use((req, res, next) => {
  console.log(req.url);
  next();
});

// home page route
app.get('/', (req, res) => {
  res.send('Hello World! version 1.0.1');
});


// 404 error
app.use((req, res) => {
  res.status(404).send('Not found');
});

// start server
app.listen(cfg.port, () => {
  console.log(`http://localhost:${ cfg.port }`);
});

