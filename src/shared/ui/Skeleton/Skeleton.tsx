import { CSSProperties, memo } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import styles from './Skeleton.module.scss';

interface ISkeletonProps {
    width?: string | number;
    height?: string | number;
    borderRadius?: string;
    className?: string;
}

export const Skeleton = memo(({
  width, height, borderRadius, className,
}: ISkeletonProps) => {
  const style: CSSProperties = { width, height, borderRadius };

  return (
    <div className={classNames(styles.root, {}, [className])} style={style} />
  );
});
