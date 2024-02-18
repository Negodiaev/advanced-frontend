import {useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import styles from './Sidebar.module.scss';

interface ISidebarProps {
    className?: string;
}

export function Sidebar({className}: ISidebarProps) {
    const [isCollapsed, setCollapsed] = useState<boolean>(false);

    function handleToggle() {
        setCollapsed(prevState => !prevState);
    }

    return (
        <div className={classNames(styles.root, {[styles.isCollapsed]: isCollapsed}, [className])}>
            <button onClick={handleToggle}>Toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher/>
                {/*<LangSwitcher/>*/}
            </div>
        </div>
    );
}