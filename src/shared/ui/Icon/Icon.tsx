import React, { memo } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import styles from './Icon.module.scss';

interface IIconProps {
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    className?: string;
}

export const Icon = memo(({ Svg, className }: IIconProps) => (
  <Svg className={classNames(styles.root, {}, [className])} />
));
