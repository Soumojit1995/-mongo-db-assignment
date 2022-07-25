const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
let mongoose = require('mongoose');

let app = express();
let multer = require('multer');
let upload = multer();

const studentRouter = require("./Routes/studentRoutes.js");
const productRouter = require("./Routes/productRoutes.js");
const quoteRouter = require("./Routes/quoteRoutes.js");

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/test_mongoose');
const username = "user_11";
const password = "Iamabadboy1";
const cluster = "cluster0";
const dbname = "myFirstDatabase";
mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.66meu.mongodb.net/${dbname}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);



app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({
  extended: true
})) // for parsing application/x-www-form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));
// app.get('/', async (req, res) => {

//   try {
//     let response;
//     response = {
//       'result': "Api Connected"
//     };
//     res.send(response);

//   } catch (err) {
//     error = {
//       'error': 'Unable to save'
//     }
//     res.status(500).send(error);
//   }
// });
app.use(studentRouter);
app.use(productRouter);
app.use(quoteRouter);

app.listen(5000, () => {
  console.log("The server started at port no - 5000");
});
