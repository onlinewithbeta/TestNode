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
  console.log(req.origin);
  next();
});

let readyyy ={
  "type": "pageInfo",
  "kind": "pureOBJ",
  "course_title": "Chemistry",
  "code": "CHM 131",
  "session": "2023/2024",
  "time": "2hours"};
  
// home page route
app.get('/Osiaru', (req, res) => {
  res.send(readyyy);
});


// 404 error
app.use((req, res) => {
  res.status(404).send('Not found');
});

// start server
app.listen(cfg.port, () => {
  console.log(`http://localhost:${ cfg.port }`);
});

