import * as React from 'react';
import { FC } from 'react';
import classNames from 'classnames';

import MuiButton from '@material-ui/core/Button';

import { TProps } from './types';
import { makeComponentStyles } from './styles';

export const Button: FC<TProps> = ({
  color,
  children,
  className,
  size = 'medium',
  disableElevation = true,
  variant = 'contained',
  startIcon,
  endIcon,
  ...rest
}) => {
  const classes = makeComponentStyles();
  const justIcon = startIcon && !children;

  const btnClasses = classNames({
    [classes.juButton]: true,
    [classes['juButton--sSmall']]: size === 'small',
    [classes['juButton--sMedium']]: size === 'medium',
    [classes['juButton--sLarge']]: size === 'large',
    [classes['juButton--vText']]: variant === 'text',
    [classes['juButton--vOutlined']]: variant === 'outlined',
    [classes['juButton--justIcon']]: justIcon,
    ...(className ? { [className]: className } : {}),
  });
  return (
    <MuiButton
      {...rest}
      disableElevation={disableElevation}
      color={color}
      size={size}
      variant={variant}
      className={btnClasses}
      startIcon={startIcon}
      endIcon={endIcon}
      classes={justIcon ? { startIcon: classes['juButton__startIcon--justIcon'] } : {}}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
