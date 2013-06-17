var Stream = require('./../index');
var stream = new Stream({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: '',
    api_params: {'locations': "-180,-90,180,90"} 
});

 // * - data
 // * - garbage
 // * - close
 // * - error
 // * - connected
 // * - heartbeat

//create stream
stream.stream();

//stream JSON data
stream.on('data', function(data){
    console.log('Data:');
    console.log(data);
});

//incorrect json strings (can't parse to json)
stream.on('garbage', function(data){
    console.log('Can\'t be formatted:');
    console.log(data);
});

//heartbeats
stream.on('heartbeat', function(){
    console.log('Heartbeat');
});

//connected
stream.on('connected', function(){
    console.log('Stream created');
});

//connection errors (request || response)
stream.on('error', function(error){
    console.log('Connection error:');
    console.log(error);
});

//stream close event
stream.on('close', function(error){
    console.log('Stream closed');
    console.log(error);
});
