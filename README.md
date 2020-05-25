# 13-Express-Friend_Finder

# Friend Finder - Node and Express Servers

### Overview

This app is a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from the users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

Express is used to handle routing. App is deployed to Heroku so other users can fill it out.

* This is a demo version to compare to my application. [this demo version of the site](https://friend-finder-fsf.herokuapp.com/). 

### To Begin
* A folder called `FriendFinder` is organized with directories that matches the following:

  ```
  FriendFinder
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
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
},
{
  "name": "Brady",
  "photo": "https://www.pexels.com/photo/man-wearing-blue-crew-neck-t-shirt-2379005/",
  "scores": [3, 2, 3, 3, 3, 1, 2, 3, 3, 1]  
},
{  
  "name": "Jan",
  "photo": "./images/jan.jpg",
  "scores": [1, 1, 1, 4, 1, 1, 2, 5, 1, 4]
},
{
  "name": "Marsha",
  "photo": "./images/marsha.jpg",
  "scores": [5, 1, 4, 4, 5, 1, 2, 4, 3, 4]
},
{
  "name": "Mike",
  "photo": "./images/mike.jpg",
  "scores": [5, 5, 4, 4, 5, 5, 4, 5, 4, 4]
},
{
  "name": "Alice",
  "photo": "https://www.pexels.com/photo/woman-in-black-tank-top-wearing-eyeglasses-2100063/",
  "scores": [3, 2, 5, 4, 4, 1, 2, 5, 4, 1]
}
```

6. The following guide is used to determine the user's most compatible friend:

   * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
     * Example:
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
   * The closest match will be the user with the least amount of difference.

7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
   * The modal should display both the name and picture of the closest match.

- - -

### Hosting on Heroku

Now that we have a backend to our applications, we use Heroku for hosting. Please note that while **Heroku is free**, it will request credit card information if you have more than 5 applications at a time or are adding a database.

Please see [Heroku’s Account Verification Information](https://devcenter.heroku.com/articles/account-verification) for more details.

See the [Supplemental Heroku Deployment Guide](../../03-Supplemental/HerokuGuide.md) for in-detail deployment instructions.

- - -

### Link To Portfolio

* [Portfolio](https://melaniebott2691.github.io/09-portfolio-update/)

- - -

### Screenshots of application

* ![Friend Finder](/app/data/images/friend-finder.jpg)

* ![Survey](/app/data/images/bert-survey.jpg)

* ![Friend Match Results](/app/data/images/bert-results.jpg)


