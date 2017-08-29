//async function loadLib() { const React = await import('react') } instead of import React from 'react' for lazy loading
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker'
import ViewModel from 'viewmodel-react';
import Router from './router'

// Use Meteor's dependency management
ViewModel.Tracker = Tracker;


Meteor.startup(() => {

});