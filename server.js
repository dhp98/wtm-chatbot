//using express

const express = require('express'),

server = express();


//seerver listening on env port or 3000
server.set('port',process.env.PORT || 3000);

//Basic routes
server.get('/',(request,response)=>{
	 response.send('Home Page');
});

server.get('/about',(request,response)=>{

	response.send('About Page');
});

//express error handlind middleware
server.use((request,response)=>{
   response.type('text/plain');
   response.status(505);
   response.send('Error page');
});
//binding to a port
server.listen(3000,()=>{
	console.log('Server started');
});