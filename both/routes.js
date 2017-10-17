import Inferno from 'inferno'; //React needed for the <Component /> Syntax
import { App } from '../imports/App';
import { Big } from '../imports/Big/Big';
import { About } from '../imports/About/About';
import { Fourofour } from '../imports/404/404';
import './Store';
const routes = [
    {
      path: '',
      action() {
        return {
          title: 'Proto Starter',
          component:  <App />
        };
      }
    },
    {
      path: '/about',
      action() {
        return {
          title: 'About us',
          component:  <About />
        };
      }
    },
    {
      path: '(.*)',
      action() {
        return {
          title: '404',
          component:  <Fourofour />
        };
      }
    }
  ];

export default routes;
