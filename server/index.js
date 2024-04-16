
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const PORT = 3005;
const cors = require('cors');

app.use(cors());
app.use(express.json())
const cookieParser = require('cookie-parser');

const authRoutes = require('./Routes/Auth');
const adminRoutes = require('./Routes/Admin');
const movieRoutes = require('./Routes/Movie');



require('dotenv').config();
require('./db')


app.use(bodyParser.json());
app.use(cookieParser());

app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/movie', movieRoutes);


app.get('/', (req, res) => {
    res.json({ message: 'The API is working' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
