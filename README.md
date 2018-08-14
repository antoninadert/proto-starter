# proto-starter
An isomorphic (universal) web app starter project. 
This project is designed with developer fun, productivity and happiness in mind.

Viewmodel for simple Components and state management. Viewmodel is easy-to-use and powerful, like Vue syntax but with React ecosystem.
This starter has Server-side rendering and routing.
It is also highly extendable using Meteor's capabilities. (See TODO list below)
It doesn't rely on many dependancies but can already do a lot.

Useful resources to get started
-------------
1. [How to start a ViewModel Project](https://viewmodel.org/#BasicsStarterProject) to start with a 
2. To [understand more on VM](https://forums.meteor.com/t/viewmodel-for-react-alpha/26490)
3. [Meteor basic tutorial](https://www.meteor.com/tutorials/blaze/creating-an-app) 
4. Use [Bundle Visualizer](https://blog.meteor.com/putting-your-app-on-a-diet-with-meteor-1-5s-bundle-visualizer-6845b685a119) to check your dependencies and how they load with [exact code splitting](https://blog.meteor.com/dynamic-imports-in-meteor-1-5-c6130419c3cd)

About Styles
------------
This project has no styles, unlike some other opinionated starters, **I let people decide** the CSS framework and nomenclature they want.

I would recommend using [semantic UI proto-starter](https://github.com/antoninadert/proto-starter-semantic) for likers of semantic-ui.
Otherwise just [paperCSS](https://www.getpapercss.com/) it for quick mockups.

Technology used 
-------------
If you need to change the stack or add dependencies, find full list in package.json

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
`another PROTIP:` try `ls` to list the files in your current folder and `cd ..` to go up in the folder hierarchy.
`another PROTIP:` Windows is shit for developing Meteor but it works. Mac recommended.




Run
-------------
`meteor`

Then open your localhost: http://localhost:3000/

Ready to Plug
--------------
- You can add anything from react/node ecosystem with viewmodel/meteor
- You can plug any CSS and JS into each UI component
- You can precisely control the load order of each component with defer bindings. Perfect loading times are in reach !

Related projects
-------------
- I did a [semantic-proto-starter here](https://github.com/antoninadert/proto-starter-semantic) in case you want to try VM + Semantic-UI in Meteor.

- I did [Inferno Protostarter, which ended up to be much more](https://github.com/antoninadert/inferno-proto-starter)

- I did a [CodeSandbox for Viewmodel](https://codesandbox.io/s/y34m8n85v1) that is easy to use.

Folder structure
-------------
The full architecture used to follow [Meteor's file and folder structure](https://guide.meteor.com/structure.html)
Now it uses the latest Meteor trends (see package.json)

`/ui` 
This folder contains code that must be imported to be used (meteor convention). Mainly used to put your Component that will be imported later by server and client (isomorphic). 
**Remember to import your components in `/both/routes.js` in order to use them.** Routes are the nevralgic point of this App. 
Every component, that stores its own data, must be defined in the Routes to exist in the app.

`/both` 
This folder contains isomorphic code, used by your app and server (this is a meteor convention).
Useful for putting Routes that will themselves import components.

`/client` 
This folder contains client (browser) code, used for routing and initializing the project (browser-side).

`/server` 
This folder contains server code, used for routing and initializing the project (server-side)

Then open your localhost: http://localhost:3000/


Technology that you won't need to use
-------------
1. [RxJS](https://github.com/Reactive-Extensions/RxJS) as this is handled by Viewmodel
2. MobX
3. [Redux](http://redux.js.org/) as this is also handled by Viewmodel. I believe ViewModel's approach is way more maintainable for small to medium teams.


Caveats
-------------
1. The first time you use the project, Meteor can take a while (15 min?) to initiate. This should only happen if Meteor is changing versions (Current version: `1.7.x`), or downloading the full `npm install` from scratch with 3g connection and fucking antivirus.
2. Instabilities of Meteor + McAffee antivirus on Windows 7 to 10
3. Right now it is not the best experience to create Interactions between pages. Don't expect the same level of features and easy-to-use as for Next.js yet. (I will create a better one soon)

TODO LIST
-------------
- Creating a backend (with Grapher?)
- Creating default animations for page transition, declared in the Routes file directly. with exposed CSS for modification.
- Creating a Basic set of default UI components, reactive and easy to plug (Modal/Screen, Guided Flows, Fuse Search, Data-Request, WISYWIG Text Editor, Tag generator & Tag search engine.)
- Adding [user account](https://docs.meteor.com/api/passwords.html) and a full UI component to have a dedicated reactive login flow.
- Removing the [insecure package](https://atmospherejs.com/meteor/insecure) from Meteor,
- Validating client -> server data: we should get a backend validation with aldeed:simple schema for minimum security of data. Can be plugged on Grapher later for relational data.
- Adding a wrapper for viewmodel components to query [Grapher](https://cult-of-coders.github.io/grapher/) the same way Hereteby did in [grapher-vue](https://github.com/Herteby/grapher-vue)


Reference
------------

1. To [understand how async/await and promises work in Meteor](https://blog.meteor.com/using-promises-and-async-await-in-meteor-8f6f4a04f998)
2. When r it would be important to know more about [meteor publish/subscribe](https://docs.meteor.com/api/pubsub.html) and [meteor methods](https://guide.meteor.com/methods.html) (according to pub/sub mechanism)

Licence
-------------
Apache 2.0 Licence (see LICENCE file)

Copyright © Antonin Adert 2017 All Rights Reserved.
