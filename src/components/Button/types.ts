import { ButtonProps as MuiButtonProps } from '@material-ui/core';

export type TProps = Pick<
  MuiButtonProps,
  'onClick' | 'color' | 'variant' | 'disabled' | 'disableElevation' | 'size' | 'startIcon' | 'endIcon'
> & {
  className?: string;
};
