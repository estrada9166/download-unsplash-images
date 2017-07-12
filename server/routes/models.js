const fs          = require('fs');
const request     = require('request');
const htmlparser  = require('htmlparser2');
const http        = require('http');
const rp          = require('request-promise');

let links = []
let images = []

const parser = new htmlparser.Parser({
  onopentag: (name, attribs) => {
    if(name === "img" && attribs.class === "KW7g_ _1hz5D"){
      if(links.indexOf(attribs.src) < 0) {
        images.push({
          image: attribs.src,
          name: attribs.alt,
          style: attribs.style,
          key: attribs.src.slice(33, 59),
        })
        const url = attribs.src.replace(/dpr(.*)/, 'w=1200');
        links.push(url)
      }
	}
  }
}, {decodeEntities: true});

const download = (uri, filename, foldername, callback) => {
  request.head(uri, (err, res, body) => {
    console.log('status-code', res.statusCode)
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);
    if (!fs.existsSync(`./${foldername}`)){
      fs.mkdirSync(`./${foldername}`);
    }
    request(uri)
    .on('error', (err) => {
        console.log(err)
    })
    .pipe(fs.createWriteStream(__dirname + `/../${foldername}/` + filename)).on('close', callback);
  });
};

const search = (req, res) => {
  const searchUrl = req.params.id !== 'Random' ? `https://unsplash.com/search/photos/${req.params.id}` : `https://unsplash.com/new`
  rp(searchUrl, (err, res, body) => {
    if(err) throw err;
    links = []
    images = []
    parser.write(body);
    parser.end();
  })
  .then(() => {
    res.json({
      success: true,
      images: images
    })
  })
} 

const downloadImages = (req, res) => {
  const queryName = req.query.name? req.query.name : 'Random'
  for(var i = 0; i < links.length; i++) {
    download(links[i], `${req.query.name} ${i + 1}.jpg`, queryName, () => {
      console.log('done');
    });
  }
  links = []
}

module.exports = { search, downloadImages }
