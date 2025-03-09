// Express application
import express from 'express';

// configuration
const
  cfg = {
    port: process.env.PORT || 3000
  };

// Express initiation
const app = express();

// log every request to the terminal
app.use((req, res, next) => {
  console.log(`You are going to :${req}`);
  console.log(`You are getting to :${req}`);
  next();
});

// home page route
app.get('/', (req, res) => {
  res.send('Hello World! version 1.0.1');
});

// serve static assets
app.use(express.static( 'static' ));




// start server
app.listen(cfg.port, () => {
  console.log(`http://localhost:${ cfg.port }`);
});

