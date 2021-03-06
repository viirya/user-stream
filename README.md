twitter-stream-oauth
=============
### Version: 0.0.1 ###

Simple Node.js Twitter (API 1.1) stream client (https://dev.twitter.com/docs/streaming-apis/streams/user) based on user-stream.

Install
-------
```npm install twitter-stream-oauth```

Usage
-------
```javascript
var Stream = require('user-stream');
var stream = new Stream({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: '',
    api: 'filter',
    api_params: {'locations': "-180,-90,180,90"}    
});

//create stream
stream.stream();

//listen stream data
stream.on('data', function(json) {
  console.log(json);
});
```

Events
-------
- ```data```        - stream data in JSON format
- ```garbage```     - stream data who can't be parsed to JSON
- ```close```       - stream close event (stream connection closed)
- ```error```       - error event (request error, response error, response status code greater than 200)
- ```connected```   - stream created
- ```heartbeat```   - twitter emitted heartbeat

Methods
-------
- ```stream```  - create stream connection
- ```destroy``` - destroy/close stream connection
