const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const Comments = require('./routes/comments')
const Posts = require('./routes/posts')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../client/dist')))

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/posts', Posts);
app.use('/api/comments', Comments);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});