//import the http module to built the server
const http = require("http");

//import the fs module to work with files
const fs = require("fs");

//define the port where the server will be listening
const PORT = 3000;

// setup the server
const server = http.createServer( (req, res) => { 
	res.writeHead(200, { "content-type": "text/html" });
	fs.readFile("index.html", (err, data) => { 
		if(err) { 
			res.writeHead(404);
			res.write("Error! File not found");
		} else { 
			res.write(data);
		}
		res.end();
	});
});

//start the server listening for connections
server.listen(PORT, (error) => { 
	if(!error) { 
		console.log("Server is listening on port " + PORT);
	}
	else { 
		console.log("Error trying to start the server");
	}
});
