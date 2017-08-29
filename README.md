# proto-starter
An isomorphic (universal) web app starter project. This project is designed with developer productivity and happiness in mind.

This is because it uses Viewmodel for declarative components and state management. Viewmodel is easy-to-use and powerful, and fallback on React if needed.
This starter has SSR, isomorphic routing built-in, and will render the initial component states directly.
It is also highly extendable using Meteor's capabilities
It doesn't rely on many dependancies but can already do a lot.



Technology used
-------------
1. [Meteor](https://www.meteor.com/) for isomorphic builds, SSR, easy code splitting (dynamic imports), reactive data, user accounts...
2. [Viewmodel](https://viewmodel.org/) For components, state management, validation, bindings between state and view... 
3. [React](https://facebook.github.io/react/) For the underlying layer of Viewmodel. It can be changed to [Inferno](https://github.com/infernojs/inferno) according to Viewmodel, and this would imply some changes in this starter.
4. [Universal router](https://github.com/kriasoft/universal-router) and [History](https://github.com/browserstate/history.js/) to provide an easy-to-use, isomorphic router.
5. Test suite for Viewmodel and React: enzyme, jest... See [Viewmodel](https://viewmodel.org/) documentation for testing
6. [Debugging tool for Viewmodel](https://medium.com/@manueldeleon_94284/viewmodel-explorer-a-debugging-tool-3833403c3821): viewmodel-react-explorer component is included in the < App / > component, and let you play with the states of components

Installation
-------------
1. [Install Meteor](https://www.meteor.com/install)
2. In the command line, type: `git clone https://github.com/antoninadert/proto-starter.git` . Your folder must now be created
3. Go in this folder from the command line: `cd proto-starter`
4. `meteor update` (if needed)
5. `meteor npm install` (if needed)
6. `meteor npm update --save` (if needed)

Run
-------------
`meteor`

Then open your localhost: http://localhost:3000/


Usage
-------------

`/imports` 
This folder contains code that must be imported to be used (meteor convention). Mainly used to put your Component that will be imported later by server and client (isomorphic). 
Remember to import your components in `/both/routes.js` in order to use them. 

`/both` 
This folder contains isomorphic code, used by your app and server (this is a meteor convention).
Useful for putting collections, routes...

`/client` 
This folder contains client (browser) code, Used for routing and initializing the project (browser-side).

`/server` 
This folder contains server code, Used for your [meteor methods] (https://guide.meteor.com/methods.html) (pub/sub mechanism)

Then open your localhost: http://localhost:3000/

Test
-------------
`npm test`

Technology that you won't need to use
-------------
1. [RxJS](https://github.com/Reactive-Extensions/RxJS) as this is handled by Viewmodel
2. [Redux](http://redux.js.org/) as this is also handled by Viewmodel
3. [React-helmet](https://github.com/nfl/react-helmet) as this is easy to generate this yourself using server-render package from meteor (See sink.appendToHead() method used in `/server/router.js` ) 
4. [React router](https://github.com/ReactTraining/react-router) as universal router is more concise and simpler


Caveats
-------------
1. The first time you use the project, Meteor can take a while (15 min?) to initiate. This will get better for subsequent runs

No CSS builder, as there are so many ways to do it I thought I let you figure this out.
I will maybe create a new starter including Aphrodite for styling as this seems a good and simple approach.

Licence
-------------
Apache 2.0 Licence (see LICENCE file)

Copyright © Antonin Adert 2017 All Rights Reserved.
