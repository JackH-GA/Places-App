/////////////////////////////////
/////database connection ////////
/////////////////////////////////

const { default: mongoose } = require("mongoose")

// this is where we will set up our inputs for our database connect function
const DATABASE_URL = PROCESS.env.DATABASE_URL

const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// establish our database connection
mongoose.connect(DATABASE_URL, CONFIG)

// Tell mognoose what to do with certain EventSource
// what happens when we open, disconnect, or get an error
mongoose.connection
    .on('open', () => console.log('Connected to Mongoose'))
    .on('close', () => console.log('Disconnected from Mongoose'))
    .on('error', (err) => console.log('An Error Occured: \n', err))

/////////////////////////////////
/////export our connection //////
/////////////////////////////////
module.exports = mongoose


