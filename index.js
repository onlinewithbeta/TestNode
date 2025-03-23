// Express application
import express from 'express';
import compression from 'compression';
import {
    fileURLToPath
} from 'url';
import {
    dirname,
    sep
} from 'path';



// configuration
const
__dirname = dirname(fileURLToPath(import.meta.url)) + sep,
cfg = {
    port: process.env.PORT || 2026,
    dir: {
        root: __dirname,
        static: __dirname + 'static' + sep
    }
};

console.dir(cfg, {
    depth: null, color: true
});
// Express initiation
const app = express();

// do not identify Express
app.disable('x-powered-by');

// serve static assets
app.use(express.static(cfg.dir.static));

// HTTP compression
app.use(compression());

function responder(req, res, next) {
    console.log("New user ");
    next();
}

// home page route
app.get('/', responder,(req,res)=>{
    res.sendFile(`${cfg.dir.static}/index.html`);
});
// home page route
app.get('/Osiaru', responder,(req,res)=>{
    res.sendFile(`${cfg.dir.static}/index.html`);
});



//get request
app.get('/data', (req, res) => {
    console.log(`Origin is ${req.headers.origin}`);
    res.sendFile(`${cfg.dir.static}/data.json`)
});

// 404 error
app.use((req, res) => {
    res.status(404).send('Not found');
});

// start server
app.listen(cfg.port, () => {
    console.log(`http://localhost:${ cfg.port }`);
});