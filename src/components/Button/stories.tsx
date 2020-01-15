import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import { Button } from '.';

//eslint-disable-next-line no-undef
storiesOf('Button', module).add('Regular', () => (
  <div>
    <Button onClick={action('button-click')}>Click me!</Button>
  </div>
));
