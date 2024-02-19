import {useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher";
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
        <div className={classNames(styles.root, {[styles.root_collapsed]: isCollapsed}, [className])}>
            <button onClick={handleToggle}>Toggle</button>
            <div className={classNames(styles.switchers, {[styles.switchers_collapsed]: isCollapsed})}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    );
}