const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/crmdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('connected to da database'))
    .catch(err => console.log('Its a trap something went wrong when connecting to the database ', err));
