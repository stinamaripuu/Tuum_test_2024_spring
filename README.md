# Instructions on how to build and run the solution

Clone the Repo to your local computer

In terminal / git bash/ other command line interfaces, make your way to the folder
Tuum_test_2024_spring

First, make sure you have Node and NPM downloaded, you can check it using 'npm --version' (or node --version)
If not, you can do it here: https://nodejs.org/en/ 

Now you can run in terminal:
'npm install react-scripts'

and finally run:
'npm start'

The application should be running.

## Explanation of important choices for implementation and technologies in the solution

I decided to use React and Typescript. For the main part, it is pretty straight-forward using basic css and html, just combined with Typescript. For adding the flags, I decided to use react-flags-select to display the countries and flags. I chose it because it was already made and was easy to implement. The downside was that I couldn't manage to change the 'Country' input field style to match the others.

## Analysis on what impacts your bundle size the most and what you’ve done (or can do) to optimise it

One thing that certainly impacts my bundle size is the use of big libraries like react. To make the bundle smaller, I tried to use only specific parts of the library. I also tried to avoid code duplication, for example in css files. Another factor contributing	to the bundle size may be the react-flags-select module. It may be possible to just use parts of it swell to avoid importing it whole. One way to make the bundle smaller would also to choose just a few countries and flags and just a smaller selection from there. 
