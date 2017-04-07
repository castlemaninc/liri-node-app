var Request = require('request');
var Spotify = require('spotify'); 
var Twitter = require('twitter');

// 4. At the top of the  liri.js  file, write the code you need to grab the data from keys.js. Then store the keys in a variable.

var keys = require("./keys.js");
// console.log(keys);

var client = new Twitter(keys.twitterKeys);
	// TEST 
	// console.log(keys.twitterKeys);
	// console.log(keys.twitterKeys.consumer_key);


// TWITTER 

// This will show my last 20 tweets and when they were created in terminal/bash
if (process.argv[2] === "my-tweets"){	

	var params = {screen_name: "wutup_castleman"};	

	client.get('search/tweets', {q: "wutup_castleman"}, function(error, tweets, response){
		if (error){
		  	console.log('error:', error); // Print the error if one occurred 
		  	console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
	  	} else {
	  		for (i=0;i<tweets["statuses"].length;i++){
	  			console.log("----------------------");
	  			console.log("Bryan tweeted: '" + tweets["statuses"][i].text +"'"); 
	  			console.log("Tweeted on: " + tweets["statuses"][i]["created_at"]);
	  		}
	  		
	  	}
	});
		
};

// SPOTIFY
if (process.argv[2] === 'spotify-this-song'){
	
	//  node liri.js spotify-this-song '<song name here>' 
	var nodeArgs = process.argv; 
	var song = "";

	for (i=3;i<nodeArgs.length;i++){	
  		song = song + " " + nodeArgs[i];
	}
	
	if (nodeArgs.length === 3){
		song = "Midnight City";
	}

	console.log("Searching for: " + song);
	
	Spotify.search({ type: 'track', query: song }, function(error, data) {
	    
	    if (error) {
	        console.log('Error occurred: ' + error);
	        return;
	    } else {
	    	console.log("---------------------");
	    	// Artist(s)
	    	console.log("Artist(s): " + data["tracks"].items[1].artists[0].name);
	    	// The song's name
	    	console.log("Song Title: " + data["tracks"].items[0].name);
	    	// A preview link of the song from Spotify
	    	console.log("Preview Link: " + data["tracks"].items[0].preview_url);
	    	// The album that the song is from
	    	console.log("Album Name: " + data["tracks"].items[0].album.name);
	    	console.log("---------------------");			
	    }
 
	});
	// ◦if no song is provided then your program will default to
	// ◾"The Sign" by Ace of Base

};

// OMDB API using REQUEST
if (process.argv[2] === 'movie-this'){
	console.log("Movie this?");

	var nodeArgs = process.argv; 
	var movie = nodeArgs[3];

	for (i=4;i<nodeArgs.length;i++){		
		movie += "+" + nodeArgs[i];
	};

	//  If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
	if (nodeArgs[3] === undefined){
		movie = "Mr+Nobody";
	}

	var movieQueryURL = "http://www.omdbapi.com/?t=" + movie;

	// console.log(movieQueryURL)

	console.log("Searching for:" + movie);

	request(movieQueryURL, function (error, response, body) {

	  if (error){
	  	console.log('error:', error); // Print the error if one occurred 
	  	console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
	  } else {
	  	// console.log("Type of body is: " + typeof body);

	  	// turns string into an object
	  	var obj = JSON.parse(body);
	  	// console.log(obj);

	  	console.log("----------")
	  	// Title of the movie.
	  	console.log("Title: " + obj["Title"]);
	  	// Year the movie came out.
	  	console.log("Year: " + obj["Year"]);
	  	// IMDB Rating of the movie.
	  	console.log("IMDB Rating: " + obj["imdbRating"]);
	  	//  Country where the movie was produced.
	  	console.log("Produced in: " + obj["Country"]);
	  	//  Language of the movie.
	  	console.log("Language: " + obj["Language"]);
	  	//  Plot of the movie.
	  	console.log("Plot: " + obj["Plot"]);
	  	//  Actors in the movie.
	  	console.log("Actors: " + obj["Actors"]);
	  	//  Rotten Tomatoes Rating.
	  	console.log("Rotten Tomatoes Rating: " + obj.Ratings[1].Value);
	  	//  Rotten Tomatoes URL.
	  	console.log("Rotten Tomatoes URL: ");	  	
	  	console.log("----------");
	  }	  
	});
}

if (process.argv[2] === 'do-what-it-says'){
	console.log("I can do what it says!");

	// 	◦Using the  fs  Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.◾It should run  spotify-this-song  for "I Want it That Way," as follows the text in  random.txt .
	// ◾Feel free to change the text in that document to test out the feature for other commands.


}


