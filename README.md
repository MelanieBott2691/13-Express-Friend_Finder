# 13-Express-Friend_Finder

# Friend Finder - Node and Express Servers

### Overview

This app is a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from the users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

Express is used to handle routing. App is deployed to Heroku so other users can fill it out.

* This is a demo version to compare to my application. [this is a demo version of what this site is similar to](https://friend-finder-fsf.herokuapp.com/). 
* [My application](https://serene-waters-90779.herokuapp.com/).

### To Begin
* A folder called `13-Express-Friend_Finder` is organized with directories that match the following:

  ```
  Friend_Finder
    - .gitignore
    - app
      - data
        - friends.js
      - public
        - home.html
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js
  ```

### Instructions

1. The survey has 10 questions. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2. The `server.js` file requires the basic npm packages: `express` and `path`.

3. The `htmlRoutes.js` file includes two routes:

   * A GET Route to `/survey` which displays the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page.

4. The `apiRoutes.js` file contains two routes:

   * A GET route with the url `/api/friends`. This is used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This is used to handle incoming survey results. This route also handles the compatibility logic.

5. The application's data is stored inside of `app/data/friends.js` as an array of objects.

```json
{
  "name":"Tom",
  "photo": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

  "scores":[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
},
{
  "name": "Brady",
  "photo": "https://www.pexels.com/photo/man-wearing-blue-crew-neck-t-shirt-2379005/",
  "scores": [3, 2, 3, 3, 3, 1, 2, 3, 3, 1]  
},
{  
  "name": "Jan",
  "photo": "https://images.pexels.com/photos/609549/pexels-photo-609549.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

  "scores": [1, 1, 1, 4, 1, 1, 2, 5, 1, 4]
},
{
  "name": "Marsha",
  "photo": "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

  "scores": [5, 1, 4, 4, 5, 1, 2, 4, 3, 4]
},
{
  "name": "Mike",
  "photo": "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

  "scores": [5, 5, 4, 4, 5, 5, 4, 5, 4, 4]
},
{
  "name": "Alice",
  "photo": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  "scores": [3, 2, 5, 4, 4, 1, 2, 5, 4, 1]
}
```

6. The following guide was used to determine the user's most compatible friend:

   * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
     * Example:
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * The closest match will be the user with the least amount of difference.

7. Once the current user's most compatible friend is found the results are displayed in a pop-up modal. 
   * The modal displays both the name and picture of the closest match.

- - -

### Hosting on Heroku

This app is hosted on Heroku.

Please see [Heroku Account](https://serene-waters-90779.herokuapp.com/) for more details.

- - -

### Link To My Portfolio

* [Portfolio](https://melaniebott2691.github.io/09-portfolio-update/)

- - -

### Screenshots of the Friend Finder application

* ![Friend Finder](../data/images/friend-finder.png)

* ![Survey](../data/images/SurveyPage.png)

* ![Survey Filled Out](../data/images/CompletedSurvey.png)

* ![Friend Match Results](../data/images/newFriendModal.png)

* ![Terminal Output](../data/images/terminalOutput.png)
