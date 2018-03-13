# proto-starter
An isomorphic (universal) web app starter project. This project is designed with developer fun, productivity and happiness in mind.
This is because it uses Viewmodel for declarative components and state management. Viewmodel is easy-to-use and powerful, and fallback on React if needed.
This starter has SSR, isomorphic routing built-in, and will render the initial component's states directly in both client and server (first server-rendering, then client rehydration).
It is also highly extendable using Meteor's capabilities. 
It doesn't rely on many dependancies but can already do a lot.

Technology used 
-------------
If you need to change the stack or add dependencies

1. [Meteor](https://www.meteor.com/) for isomorphic database reactivity, isomorphic builds, SSR, exact code splitting, reactive data, user accounts, security...
2. [Viewmodel](https://viewmodel.org/) For components,internal state management,client validation, bindings between state and view... 
3. [React](https://facebook.github.io/react/) For the underlying layer of Viewmodel. It can be changed to [Inferno](https://github.com/infernojs/inferno) according to Viewmodel, and this would imply some changes in this starter.
4. [Universal router](https://github.com/kriasoft/universal-router) and [History](https://github.com/browserstate/history.js/) to provide an [easy-to-use](https://github.com/kriasoft/universal-router/issues/80), isomorphic router.
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

`PROTIP:` If Meteor's builder gets stuck in the process, you can try to press Ctrl+C to abort some (sometime invisible) tasks and resume installation.
Pressing Ctrl+C twice will abort the run. If you do that, type `meteor` again or just press up arrow.



Run
-------------
`meteor`

Then open your localhost: http://localhost:3000/


Folder structure
-------------
The full architecture follows [Meteor's file and folder structure](https://guide.meteor.com/structure.html)

`/imports` 
This folder contains code that must be imported to be used (meteor convention). Mainly used to put your Component that will be imported later by server and client (isomorphic). 
Remember to import your components in `/both/routes.js` in order to use them. Routes are the nevralgic point of this App. 
Every component, that stores its own data, must be defined in the Routes to exist in the app.

`/both` 
This folder contains isomorphic code, used by your app and server (this is a meteor convention).
Useful for putting Routes that will themselves import components.

`/client` 
This folder contains client (browser) code, used for routing and initializing the project (browser-side).

`/server` 
This folder contains server code, used for routing and initializing the project (server-side)

Then open your localhost: http://localhost:3000/

Test
-------------
`jest`

Technology that you won't need to use
-------------
1. [RxJS](https://github.com/Reactive-Extensions/RxJS) as this is handled by Viewmodel
2. MobX
3. [Redux](http://redux.js.org/) as this is also handled by Viewmodel
4. [React-helmet](https://github.com/nfl/react-helmet) as this is easy to generate this yourself using server-render package from Meteor (See sink.appendToHead() method used in `/server/router.js` ) 
5. [React router](https://github.com/ReactTraining/react-router) as universal router is more concise and simpler


Caveats
-------------
1. The first time you use the project, Meteor can take a while (15 min?) to initiate. This should only happen if Meteor is changing versions (Current version: `1.5.1`), or downloading the full `npm install` from scratch with 3g connection and fucking antivirus.

Ready to Plug
--------------
You can add any library to the routing and state management quite easily. 
You can plug any CSS and JS into each UI component that will be in a Route

Related projects
-------------
I did a starter with [semantic-ui here](https://github.com/antoninadert/proto-starter-semantic) in case you want to try a direct approach for building your components. 

Help me to keep this project going
-------------
- Create default animations for page transition, declared in the Routes file directly. with exposed CSS for modification.
- Create a Basic set of default UI components, reactive and easy to plug (Modal/Screen, Guided Flows, Fuse Search, Data-Request, WISYWIG Text Editor, Tag generator & Retriever.)
- Add [user account](https://docs.meteor.com/api/passwords.html) and a full UI component to have a dedicated reactive login flow.

Useful resources to get started
-------------
1. [Meteor basic tutorial](https://www.meteor.com/tutorials/blaze/creating-an-app) 
2. To [understand more on VM](https://forums.meteor.com/t/viewmodel-for-react-alpha/26490)
3. To [understand how async/await and promises work in Meteor](https://blog.meteor.com/using-promises-and-async-await-in-meteor-8f6f4a04f998)
4. To validate the data that goes from client to server, we should get a backend validation with alddeed:simple schema
5. When removing the [insecure package](https://atmospherejs.com/meteor/insecure) from Meteor, it would be important to know more about [meteor publish/subscribe](https://docs.meteor.com/api/pubsub.html) and [meteor methods](https://guide.meteor.com/methods.html) (according to pub/sub mechanism)
7. Use [Bundle Visualizer](https://blog.meteor.com/putting-your-app-on-a-diet-with-meteor-1-5s-bundle-visualizer-6845b685a119) to check your dependencies and how they load with [exact code splitting](https://blog.meteor.com/dynamic-imports-in-meteor-1-5-c6130419c3cd)

Licence
-------------
Apache 2.0 Licence (see LICENCE file)

Copyright © Antonin Adert 2017 All Rights Reserved.
