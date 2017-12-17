let express = require('express');
let app = express();
let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/addresses');
