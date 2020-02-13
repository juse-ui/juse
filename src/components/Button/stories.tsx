import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import DeleteIcon from '@material-ui/icons/Delete';

import Button from '.';

const commonOnClickProp = { onClick: action('button-click') };
const colorOptions = [{}, { color: 'primary' as 'primary' }, { color: 'secondary' as 'secondary' }, { disabled: true }];
const variantOptions = [{}, { variant: 'outlined' as 'outlined' }, { variant: 'text' as 'text' }];
const sizeOptions = [{ size: 'small' as 'small' }, {}, { size: 'large' as 'large' }];
const iconOptions = [
  { startIcon: <DeleteIcon />, children: 'Start' },
  {
    endIcon: <DeleteIcon />,
    children: 'End',
  },
  { startIcon: <DeleteIcon />, children: null },
];

//eslint-disable-next-line no-undef
storiesOf('Button', module)
  .add('colors & variants combinations', () => (
    <table className="sb-preview-table">
      <tbody>
        {variantOptions.map((variantProps, j) => (
          <tr key={j}>
            {colorOptions.map((optionProps, i) => (
              <td key={i}>
                <Button {...commonOnClickProp} {...variantProps} {...optionProps}>
                  {optionProps.color || (optionProps.disabled && 'disabled') || 'default'}
                </Button>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ))

  .add('sizes', () => (
    <div>
      {variantOptions.map((variantProps, j) => (
        <div key={j}>
          {sizeOptions.map((optionProps, i) => (
            <td key={i}>
              <Button {...commonOnClickProp} {...variantProps} {...optionProps}>
                {optionProps.size || 'default'}
              </Button>
            </td>
          ))}
        </div>
      ))}
    </div>
  ))

  .add('icons', () => (
    <div>
      {iconOptions.map((iconProps, j) => (
        <div key={j}>
          {variantOptions.map((optionProps, i) => (
            <Button key={i} {...commonOnClickProp} {...optionProps} {...iconProps} />
          ))}
        </div>
      ))}
    </div>
  ));
