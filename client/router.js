import UniversalRouter from 'universal-router';
import createHistory from 'history/createBrowserHistory'
import { render } from 'react-dom';
import routes from '../both/routes'


const history = createHistory()
const location = history.location
const router = new UniversalRouter(routes);

function renderLocation(location) {
  router.resolve({path: location.pathname}).then(route  => { 
    //route is what our action() returns for a specific path
    document.title = route.title;
    render(route.component, document.getElementById("app"));
  });
}

//Initialize the first page render with current history
renderLocation(location);
//listen to URL(location) changes and render the new layout based on URL automatically
history.listen((anylocation) => {renderLocation(anylocation)});