# Memory Card

This is my second react application. It is a web app game that tests your memory! The user is provided with a set of 12 flags. The objective is to click on a flag that you haven't clicked on before, which will result in a point. Once the user clicks a flag, the flag positions are shuffled. The user should keep going, until they accidentally click a flag that they already clicked, which restarts the current score.

Because I already worked on a react app with class components, and then I converted them to functional components, I was fairly comfortable with working with react. The idea was to create this app with nothing but functional components and hooks, in order to solidify my knowledge of them.

**_ Challenges _**
After deploying my app to github pages, I notices that my images were not loading in both the locally hosted app, and the app hosted by github. I found solutions in the following stack overflow forum posts:

https://stackoverflow.com/questions/53528139/images-will-not-load-when-deploying-to-github-pages

https://stackoverflow.com/questions/51002481/images-not-loading-when-deploying-to-github-pages

The second link is the most important. I used the answer from the user Narcis. I had to create a .env file in the root folder, and I removed the homepage variable in my package.json file. I asked chatGPT for a further explanation on the .env file and this is what it gave me:

"In the solution you mentioned, the .env file is used to set the PUBLIC_URL environment variable. This variable is then used to configure the image paths in the React application.

By setting PUBLIC_URL to . (a dot), you are essentially telling React to use relative paths for all the assets, including images. This means that instead of specifying an absolute path like /images/logo.svg, you can use a relative path like ./images/logo.svg.

When you deploy your React application to GitHub Pages, the application is hosted at a different URL than when running it locally. By using relative paths and setting PUBLIC_URL to ., the application will automatically adapt the image paths based on the deployment URL."

**_ Future Potential Improvements _**

I would like to add a winning screen after the user receives 12 points, which would include a button to play again.

Finally, because I chose flags that are, generally speaking, very recognizable, I would like to add levels to my game, with harder to recognize flags.

# Built with

[React](https://react.dev/)<br>

# Install and run

git clone git@github.com:roamingterra/memory-card.git<br>
cd memory-card<br>
npm install<br>
npm run start
