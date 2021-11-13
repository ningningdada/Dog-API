var app = {
	//Define the url for the wikipedia API call
	URL: "https://dog.ceo/api/breeds/image/random",
	//Define an intial search term

	initialize: function() {
		app.search();
	},

	//Define a funnction to execute the Fetch call
	search: function() {
		// Tell the API its ok to make cross-origin requests
		let url = app.URL;
        let imageElement = document.querySelector('#Image');

		fetch(url)
		.then(function(response){return response.json();})
		.then(function(response) {
			//Check the browser console to see the returned data
			console.log(response);
            imageElement.src = response.message;
        })
    }
};