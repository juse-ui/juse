import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import DeleteIcon from '@material-ui/icons/Delete';

import Button from '.';

//eslint-disable-next-line no-undef
storiesOf('Button', module)
  .add('colors & variants combinations', () => (
    <table className="sb-preview-table">
      <tbody>
        <tr>
          <td>
            <Button onClick={action('button-click')}>Default</Button>
          </td>

          <td>
            <Button onClick={action('button-click')} color="primary">
              Primary
            </Button>
          </td>

          <td>
            <Button onClick={action('button-click')} color="secondary">
              Secondary
            </Button>
          </td>

          <td>
            <Button onClick={action('button-click')} disabled>
              Disabled
            </Button>
          </td>
        </tr>

        <tr>
          <td>
            <Button onClick={action('button-click')} variant="outlined">
              Default
            </Button>
          </td>

          <td>
            <Button onClick={action('button-click')} variant="outlined" color="primary">
              Primary
            </Button>
          </td>

          <td>
            <Button onClick={action('button-click')} variant="outlined" color="secondary">
              Secondary
            </Button>
          </td>

          <td>
            <Button onClick={action('button-click')} variant="outlined" disabled>
              Disabled
            </Button>
          </td>
        </tr>

        <tr>
          <td>
            <Button onClick={action('button-click')} variant="text">
              Default
            </Button>
          </td>

          <td>
            <Button onClick={action('button-click')} variant="text" color="primary">
              Primary
            </Button>
          </td>

          <td>
            <Button onClick={action('button-click')} variant="text" color="secondary">
              Secondary
            </Button>
          </td>

          <td>
            <Button onClick={action('button-click')} variant="text" disabled>
              Disabled
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  ))
  .add('sizes', () => (
    <div>
      <div>
        <Button onClick={action('button-click')} size="small">
          Small
        </Button>

        <Button onClick={action('button-click')}>Default</Button>

        <Button onClick={action('button-click')} size="large">
          Large
        </Button>
      </div>

      <div>
        <Button onClick={action('button-click')} variant="text" size="small">
          Small
        </Button>

        <Button onClick={action('button-click')} variant="text">
          Default
        </Button>

        <Button onClick={action('button-click')} variant="text" size="large">
          Large
        </Button>
      </div>
    </div>
  ))
  .add('icons', () => (
    <div>
      <div>
        <Button onClick={action('button-click')} size="small" startIcon={<DeleteIcon />}>
          Start
        </Button>

        <Button onClick={action('button-click')} startIcon={<DeleteIcon />}>
          Start
        </Button>

        <Button onClick={action('button-click')} size="large" startIcon={<DeleteIcon />}>
          Start
        </Button>
      </div>

      <div>
        <Button onClick={action('button-click')} variant="text" size="small" endIcon={<DeleteIcon />}>
          End
        </Button>

        <Button onClick={action('button-click')} variant="text" endIcon={<DeleteIcon />}>
          End
        </Button>

        <Button onClick={action('button-click')} variant="text" size="large" endIcon={<DeleteIcon />}>
          End
        </Button>
      </div>

      <div>
        <Button onClick={action('button-click')} size="small" startIcon={<DeleteIcon />} color="primary" />

        <Button onClick={action('button-click')} variant="outlined" startIcon={<DeleteIcon />} color="secondary" />

        <Button onClick={action('button-click')} variant="text" size="large" startIcon={<DeleteIcon />} />
      </div>
    </div>
  ));
