import * as React from 'react';
import { FC } from 'react';
import { Greeter } from '.';

export default {
  component: Greeter,
  title: 'Greeter',
};

export const Regular: FC = () => <span>${Greeter('World!')}</span>;
