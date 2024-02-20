import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader';
import styles from './PageLoader.module.scss';

interface IPageLoaderProps {
    className?: string;
}

export function PageLoader({ className }: IPageLoaderProps) {
  return (
    <div className={classNames(styles.root, {}, [className])}><Loader /></div>
  );
}
