# HW - LIRI Node Application

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. 
LIRI is a command line node app that takes in parameters and gives you back data. 

## Homework Requirements

1. Make it so liri.js can take in the following commands: [my-tweets, spotify-this-song, movie-this, do-what-it-says]
2. To use the my-tweets command to show the last 20 tweets and when they were created in the terminal/bash window 
3. To use the spotify-this command to show the following information about the song [artist(s) name, song name, song preview link, album]
4. To use the movie-this command to show information such as [movie title, actors, year, language, etc.] about any movie entered, in the terminal/bash window
5. To use do-what-it-says command to read information from a .txt file and turn those into arguments to query the appropriate API. By default it will query Spotify for the song "I Want it That Way" (Not my choice.)

## Technologies Used

- Node.js
- NPM Twitter (An asynchronous client library for the Twitter REST and Streaming API's.)
- NPM Spotify (Extremely simple API library for the Spotify REST API.) 
- NPM Request (Designed to be the simplest way possible to make http calls.)
- OMDB API (The OMDb API is a free web service to obtain movie information.)

## Code Explained
- Node Packages are referenced by variables 
- Unique key information for the Twitter API is linked from another javascript file 
- The third node argument is assigned to the variable "action"
- 1 of 4 functions are invoked using a switch statement based on the value of the variable "action"

-------------

### NPM Twitter request to the Twitter API (Example)
I created a function that allowed me to make a request using NPM Twitter client library to the Twitter API. A default amount of 20 returned "tweets" are then logged to the console. 

```
// TWITTER 
// This will show my last 20 tweets and when they were created in terminal/bash

function listTweets(){
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
```