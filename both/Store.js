import ViewModel from 'viewmodel-react';

ViewModel.share({

});

ViewModel.mixin({

});

ViewModel.global({
    Go: function (event) {
        if (Meteor.isClient) {
            event.preventDefault(); // prevent full page reload
            const History = require('/client/router').History; // similar to import { History } from '/Hub/client/hubClient';
            History.push(event.currentTarget.getAttribute('href')); // do SPA navigation
        }
    },
    Stay: function (event) {
        if (Meteor.isClient) {
            event.preventDefault();
            const History = require('/client/router').History;
            History.replace(event.currentTarget.getAttribute('href')); // do not add a forward in the browser
        }
    }
})