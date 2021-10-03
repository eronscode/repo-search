## Zatec Frontend Test

An assignment to build a client-only UI that lets the user search repositories on GitHub - Task done by Osemudiamen Matthew Elebesunu.

## Libraries/Framework

- React
- styled-components
- axios
- react-query

## Run this project locally

1. Download and Install Node JS from https://nodejs.org/en/download/
2. In the root project directory, type `npm install` to install the project's dependencies.
3. Once installation is complete, type `npm start` to start the project in your local browser. This will start up the full react application.

NOTE: Ensure you're connected to the internet so api's can load up data.

### TASK FEATURES EXPLANATION

1. Repositories can be searched by typing a keword in the text box and clicking the search button.

2. The data from the Api is paginated with the help of react-query. This will help the client view more data for a particular search keyword. The data gotten for each search keyword is also cached so that future request with that same keyword will not fetch data from endpoint but from cache storage. This feature is also possible with the help of react-query.

2. Contributors for each repository can be viewed by clicking the 'view contributors' button on each repo card which opens up a modal and loads the contributors data for that repository'

## Deployment Link
https://gitrepo-fet.herokuapp.com/



## Contact Info

Feel free to reach me on:

LinkedIn: https://www.linkedin.com/in/ose-matthew/

Email: osemu.matthew@gmail.com

Gracias
