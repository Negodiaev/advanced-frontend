import { CSSProperties, useMemo } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import styles from './Avatar.module.scss';

interface IAvatarProps {
    src: string;
    size?: number;
    alt?: string;
    className?: string;
}

export function Avatar({
  src, size = 100, alt, className,
}: IAvatarProps) {
  const style = useMemo<CSSProperties>(() => ({ width: size, height: size }), [size]);

  return (
    <img src={src} style={style} className={classNames(styles.root, {}, [className])} draggable={false} alt={alt} />
  );
}
