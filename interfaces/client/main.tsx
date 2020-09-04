import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Index } from '/imports/ui/'

Meteor.startup(() => {
  render(<Index />, document.getElementById('root'));
});
