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

## Files

I am going to try adding an environment variable on Netlify to hide my API key.

<!-- 1. `.env`: attempting to use dotenv to hide my API key but I don't know how to use it - think I need to create a server with Node and maybe Express.
   1. API_KEY in the object `api`: {`apiKey`} `search.js` line16 and `fetchAPIData.js` line 27
2. `.env.example`: in support of above
3. `.gitignore` and `README.md`: standard files -->

### Root HTML Files

Movie related:

1. `index.html` and `/`: slider area, search form, popular movies, & default page for movies
2. `movie-cast-crew.html`: cards for the cast and crew of the movie
3. `movie-details.html`: details for a movie you click on

Search and People:

4. `people.html`: details for the cast and crew members
5. `search.html`: search results page for the search forms on `index` and `shows`

Show related:

6. `shows.html`: default page for top rated shows
7. `tv-cast-crew.html`: cards for the cast and crew of the show
8. `tv-details.html`: details for a movie you click on

### Root JS files in the js folder

1. `movie-show.js`: _MOVIE & SHOW_: top 20 results
2. `movie-show-details.js`: _MOVIE & SHOW_: details page
   1. fetch error for `getVideos()` if `language !== 'en'` in `fetchAPIData()`
3. `cast-crew.js`: _CAST & CREW_: cards
4. `people.js`: _CAST & CREW_: details page
5. `initSwiper.js`: single Fx for the swiper
6. **`script.js`**: main file
7. `search.js`: search form for main Movie and TV Show pages

### JS Files in `search` folder

1. `pagination.js`: single brief Fx for the `prev` and `next` buttons
2. `successMsg.js`: single brief Fx for the search results messages

> _THESE ARE A PROBLEM BECAUSE THE ID'S ARE NOT UNIQUE BUT CHANGING THEM TO CLASSES MESSES UP THE STYLING - line 12 `crewLoop.js`_

### Files in `components` folder

1. `fetchAPIData.js`: fetch Fx used for all pages
2. `spinner.js`: show and hide spinner functions

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

> `getExternalLinks.js`: Get social links for movie/show - the links for Shows are bad now, and are all set to `undefined` if languages does not include "en" - THIS IS NOW IN `movie-show-details.js`

CAST & CREW PAGE:

> Breaking up the crew by department was a nightmare and has led to some problems with my JS code and CSS

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

- This needs to be cleaned up since I added classes and Ids as I added new features - it's a mess!

### Miscellaneous

> _Here is a link to a guy who took the course but changed it (React SPA) and put it on his portfolio: https://showplex.netlify.app/_

I deleted .`env.example` since I am going to try to deploy to Netlify and create an environment variable on there to hide my API key: `API_KEY=YOUR_API_KEY_HERE`
