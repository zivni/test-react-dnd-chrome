# test-react-dnd-chrome
A small test to show the problem with react-dnd in chrome. The same code working fine on firefox and IE11.

the example was writen with typescript and uses react, redux, immutable.js and of course react-dnd with html5 backend.

The page shows a list of characters the can be draged to exchange its item position with another character.
All work well for the first 5 postions, the 6th and 7th postion, it some time work and for the rest, you cannot drag, only drop on them

 (the lower case characters in this example),
but for the lower part of the list (the upper case characters), you cannot drag, but can drop on them.

In the begining I thought it is beacuse I inserted the first items in the redux initial state, 
and the rest as actions. but after that I put more items to the inital state and it didn't work with those item either.

## To run
1. npm install
2. npm start (to start the webpack-dev-server)
3. browse to http://localhost:3003

## Updating the code
As this is a typescript code. use tsc to generated the javascript files (I'm using the build task from vscode)
