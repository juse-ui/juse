import makeStyles from '@material-ui/core/styles/makeStyles';

import { getPaddingHorizontal, getPaddingVertical } from '../../helpers/styles/padding';

export const makeComponentStyles = makeStyles(theme => ({
  juButton: {
    borderRadius: theme.spacing(1),
  },
  'juButton--vText': {
    ...getPaddingHorizontal(theme.spacing(2)),
  },
  'juButton--vOutlined': {
    ...getPaddingHorizontal(theme.spacing(2) - 1),
  },
  'juButton--sSmall': {
    ...getPaddingHorizontal(theme.spacing(1)),
    ...getPaddingVertical(theme.spacing(0.5)),
  },
  'juButton--sMedium': {
    ...getPaddingHorizontal(theme.spacing(2)),
    ...getPaddingVertical(theme.spacing(0.75)),
  },
  'juButton--sLarge': {
    ...getPaddingHorizontal(theme.spacing(3)),
    ...getPaddingVertical(theme.spacing(1)),
  },

  'juButton--justIcon': {
    minWidth: 0,
    '&$juButton--sSmall': {
      ...getPaddingHorizontal(theme.spacing(0.5)),
    },
    '&$juButton--sMedium': {
      ...getPaddingHorizontal(theme.spacing(0.75)),
    },
    '&$juButton--sLarge': {
      ...getPaddingHorizontal(theme.spacing(1)),
    },
  },
  'juButton__startIcon--justIcon': {
    margin: '0 !important',
  },
}));
