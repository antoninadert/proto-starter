import { Meteor } from 'meteor/meteor';
import { renderToString } from "react-dom/server";
import { onPageLoad } from "meteor/server-render";
import UniversalRouter from 'universal-router/legacy'; //legacy because meteor use old node version

import routes from '../both/routes'

const router = new UniversalRouter(routes);

function renderPage(thatSink) {
  router.resolve({path: thatSink.request.url.path}).then(route  => {
    thatSink.renderIntoElementById("app", renderToString(
      route.component
    ));
    const title = "<title>"+route.title+"</title>";
    thatSink.appendToHead(title);
  });
}

onPageLoad(async sink => {
  //onPageLoad generates new static HTML on every page request. 
  //Async, await because we need to use the sink inside a promise (router.resolve())
  await renderPage(sink);
});