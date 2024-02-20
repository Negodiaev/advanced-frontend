import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Loader.module.scss';

interface ILoaderProps {
    className?: string;
}

export function Loader({ className }: ILoaderProps) {
  return (
    <div className={classNames(styles.root, {}, [className])} />
  );
}
