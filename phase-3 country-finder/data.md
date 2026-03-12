
Topics of Phase 3:
-----------------
            -> useEffect in depth 
            -> Fetching from  API 
            -> Loading, error, success states
            -> useRef — DOM access and persisting values without re-render

Hands-on:
---------
        🌍 Project — Country Explorer
        A Country Explorer App where users can browse all countries in the world, search by name, and switch between a card grid view and a table view — all data fetched live from a real public API.




API to use:
----------
      https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags       → fetch all countries
      https://restcountries.com/v3.1/name/india                               → search by name





Component Structure to Follow:
------------------------------
     App.jsx                       → owns all state + fetch logic
        │                          (countries, loading, err, query)
        │
        ├── SearchBar.jsx          → receives onSearch prop
        │                          useRef for autofocus only
        │
        └── CountryList.jsx         → receives filtered countries as prop
               └── CountryCard.jsx  → displays one country


Features to Build
-----------------
          ✅ Fetch all countries on page load
          ✅ Show loading state while fetching
          ✅ Show error message if fetch fails
          ✅ Display countries as Grid of Cards (default view)
          ✅ Search by country name (with debounce using useRef + setTimeout)
          ✅ Auto-focus search input on page load
        


What to Show Per Country
---------------------------- 
           CountryList:
                    Just a Grid wrapper
           CountryCard:
                    Flag image
                    Country name
                    Capital
                    Population
                    Region

        


              
            
//see first  
in data array we want to havae all countries 
so we will implement  after re-endering directly we want get data function 
in get data fucntion we are udpating the array data to all countries
now get data is passed to country list which will loop through each country and display evrycountry

now when we type adn submit 
on submit fucntion will trigger onsearch function which takes parameter from the input text that we give
now speicifc flag will be fetched in search fucniton
and again data arrray will be updated to particular country flags
now in country list the array has to loop through the flags which are currently preent in that array