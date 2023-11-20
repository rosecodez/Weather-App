# Weather-App
`Description:`
-Very simple weather app that uses Weather API and fetches last updated weather forecast globally. User can search a location and the fetch will display the data on the page.

`It was a great practice for understanding of:`
-API, API key;
-promises;
-fetch;
-then;
-response;
-cors.

`Difficulties encountered`
-Initial idea was that I created all the data variables with DOM create element, but after all it was easier to just write them in HTML. This helped me tremendously for overwriting the inside of these variables each time the user searches a location, fetches and displays on page. When i was using the elements, created with DOM, it was adding more and more on the page. This was not my intention. I only wanted to have a main, one set that just stores one batch of data at once and is overwritten for a good nice display. I could have definitely just have done it with JS but it was simpler and cleaner.