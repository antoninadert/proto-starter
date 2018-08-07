import React from 'react'; //React needed for the <Component /> Syntax
import { App } from '../ui/App';
import { Big } from '../ui/Big/Big';
import { About } from '../ui/About/About';
import { Fourofour } from '../ui/404/404';
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
