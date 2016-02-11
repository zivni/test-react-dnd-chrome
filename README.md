# test-react-dnd-chrome
A small test to show the problem with react-dnd in chrome. The same code working on firefox and IE11.

The page shows a list of characters the can be draged to exchange its item position with another character.
All work well for the first postions (the lower case characters in this example),
but for the lower part of the list (the upper case characters), you cannot drag, but can drop on them.

The diffrence is in the way that I'm inserting the items to the redux store. 
The first items are inserted on as the initial state. then I insert the rest with redux actions.  

This is all done in the index.ts 