import UniversalRouter from 'universal-router';
import createHistory from 'history/createBrowserHistory'
import { hydrate } from 'react-dom';
import routes from '../both/routes'


const History = createHistory()
const location = History.location
const router = new UniversalRouter(routes);

function renderLocation(location) {
  router.resolve({pathname: location.pathname}).then(route  => { 
    //route is what our action() returns for a specific path
    document.title = route.title;
    hydrate(route.component, document.getElementById("app"));
  });
}

//Initialize the first page render with current History
renderLocation(location);
//listen to URL(location) changes and render the new layout based on URL automatically
History.listen((anylocation) => {renderLocation(anylocation)});

export { History };