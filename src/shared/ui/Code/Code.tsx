import { memo, useCallback } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import { Button, ButtonVariant } from '../Button';
import { Icon } from '../Icon/Icon';
import CopyIcon from '../../assets/icons/copy.svg';
import styles from './Code.module.scss';

interface ICodeProps {
    content: string;
    className?: string;
}

export const Code = memo(({ content, className }: ICodeProps) => {
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(content);
  }, [content]);

  return (
    <div className={classNames(styles.root, {}, [className])}>
      <pre className={styles.scrollable}>
        <code>{content}</code>
      </pre>
      <Button variant={ButtonVariant.CLEAR} className={styles.root__copyBtn} onClick={handleCopy}>
        <Icon Svg={CopyIcon} className={styles.icon} />
      </Button>
    </div>
  );
});
