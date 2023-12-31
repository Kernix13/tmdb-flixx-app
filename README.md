# TMDB Flixx App

Overview:

- The Movie Database API
- No request rate limiting for this API
- Lots of endpoints and options
- Swiper library for slider in header
- Fontawesome for icons
- Google fonts
- Pagination
- Search functionality
- Current link highlight, search alert, ...

## Setup

There are no packages so just open `index.html`.

## Root HTML Files

<!-- process.env.TMDB_API_KEY -->

Movie related:

1. `index.html` and `/`: slider area, search form, popular movies, & default page for movies
2. `movie-cast-crew.html`: cards for the cast and crew of the movie
3. `movie-details.html`: details for a movie you click on

Search and People:

4. `people.html`: details page for the cast and crew members
5. `search.html`: search results page for the search forms on `index` and `shows`

Show related:

6. `shows.html`: default page for top rated shows
7. `tv-cast-crew.html`: cards for the cast and crew of the show
8. `tv-details.html`: details for a show you click on

### JS Files in the root of the `js` folder

1. `movie-show.js`: _MOVIE & SHOW_: top 20 results
2. `movie-show-details.js`: _MOVIE & SHOW_: details page
   1. Fetch error for `getVideos()` if `language !== 'en'` in `fetchAPIData()`
3. `cast-crew.js`: _CAST & CREW_: cards
4. `people.js`: _CAST & CREW_: details page
5. `initSwiper.js`: single Fx for the swiper
6. **`script.js`**: main file
7. `search.js`: search form for main Movie and TV Show pages
8. `fetchAPIData.js`: fetch Fx used for in 7 files: cast-crew.js, movie-show-details.js, movie-show.js, people.js, components/displaySlider.js, components/getTitle.js, components/getVideos.js

### JS Files in `js/search` folder

1. `pagination.js`: single brief Fx for the `prev` and `next` buttons
2. `successMsg.js`: single brief Fx for the search results messages

### JS Files in `js/components` folder

1. `spinner.js`: show and hide spinner functions

MOVIE, SHOW & SEARCH PAGES:

1. `createBgImg.js`: add the background image to the movie and show pages
2. `createCard.js`: create the card for the movie, show and search pages
3. `createImg.js`: create the image for the movie, show, and people cards
4. `displaySlider.js`: Slider for `/` and `/index.html` for Movies

MOVIE & SHOW DETAILS PAGES:

1. `bottomList.js`: create the list items for the movie & show **details** pages
2. `createBottonDetails.js`: part of the bottom section for the **details** pages
3. `createCastLink.js`: creates the link on the **details** page for the cast & crew page
4. `createSocialLinks.js`: links for IMDb, Facebook, Instagram, & Twitter in the movie & show **details** from endpoint `external_ids`
5. `createTopDiv.js`: top text section for the **details** pages
   1. create elements, textnodes, attributes and append
6. `getVideos.js`: Get YouTube videos for movie/show - wrong for shows now
7. `productionCos.js`: output production companies for **details** pages

> _`getExternalLinks.js`: Get social links for movie/show - the links for Shows are bad now, and are all set to `undefined` if languages does not include `"en"` - THIS IS NOW IN `movie-show-details.js`_

CAST & CREW PAGE:

> _Breaking up the crew by department was a nightmare and has led to some problems with my JS code and CSS_

1. `castLoop.js`: output the full and limited profile cards for the _CAST_
2. `crewLoop.js`: output the full and limited profile cards for the _CREW_
3. `getTitle.js`: get the title or name from details page for the cast & crew page
4. `weak-profiles.js`: single Fx with if/else

## "Big" files in detail

### 1) movie-show-details

1. The variables `movieArr` znd `tvArr` are only for the component `createTopDetailsDiv` - I should create an object instead maybe
2. The largest block of code involves the list items at the bottom. Can I reduce that, or should I create a separate component?

### 2) cast-crew

- Most of the code is to split out the departments for the Crew members

### 3 people

- Just a lot of code to check if a property has a value and creatiing the elements and text nodes.

### 4 css/style

- This needs to be cleaned up since I added classes and Ids as I added new features - _it's a mess_!

### Miscellaneous

I deleted .`env.example` since I am going to try to deploy to Netlify and create an environment variable on there to hide my API key: `API_KEY=YOUR_API_KEY_HERE`

I need to pull in the `people` endpoint into `cast-crew.js` so that I can use `!imdb_id` is outputting the cast and crew. Having no profile_path is not enough, because some of those people have ZERO content on their profile page.

<!-- > _Here is a link to a guy who took the course but changed it (React SPA) and put it on his portfolio: https://showplex.netlify.app/_ -->
