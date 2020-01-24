import React from 'react';
import { configure } from '@storybook/react';
const { addDecorator } = require('@storybook/react');
const { withPropsTable } = require('storybook-addon-react-docgen');
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const req = require.context('../src', true, /stories\.tsx?/);

const theme = createMuiTheme({
  palette: {
    primary: deepOrange,
    secondary: deepPurple,
  },
});

const themeDecorator = storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>;

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withPropsTable);
addDecorator(themeDecorator);

configure(loadStories, module);
