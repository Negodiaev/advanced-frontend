import { memo } from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Link.module.scss';

export enum LinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface ILinkProps extends LinkProps {
    className?: string;
    theme?: LinkTheme;
}

export const Link = memo((props: ILinkProps) => {
  const {
    to,
    children,
    className,
    theme = LinkTheme.PRIMARY,
    ...rest
  } = props;

  return (
    <RouterLink {...rest} to={to} className={classNames('', {}, [className, styles[theme]])}>
      {children}
    </RouterLink>
  );
});
