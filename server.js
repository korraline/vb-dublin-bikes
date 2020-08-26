//Install express server
const express = require('express');
const path = require('path');
const cors = require('cors')
const bodyParser = require('body-parser');
 
const app = express();
 
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/dublin-bikes'));
 
app.use(cors({
origin: true,
credentials: true
}));
 
 
app.use(bodyParser.json());
 
 
 
 
 
app.get('/*', function (req, res) {
 
res.sendFile(path.join(__dirname + '/dist/dublin-bikes/index.html'));
});
 
const port = 3000;
// Start the= app by listening on the default Heroku port
 
app.listen(process.env.PORT || port,
function () {
console.log("Server running on localhost:" + port);
}
 
);