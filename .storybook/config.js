import React from 'react';
import { configure } from '@storybook/react';
const { addDecorator } = require('@storybook/react');
const { withPropsTable } = require('storybook-addon-react-docgen');

const req = require.context('../src/components', true, /stories\.tsx?/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withPropsTable);

configure(loadStories, module);
