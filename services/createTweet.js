const config = require('./config');
const twitter = require('twitter-lite');
const client = new twitter(config);

function createTweet(data) {
    client.post('statuses/update', { status: data }).then(result => {
        console.log('You successfully tweeted this : "' + result.text + '"');
      }).catch(console.error);
};

module.exports = {
    createTweet
}


