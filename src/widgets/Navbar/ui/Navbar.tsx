import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {Link} from "shared/ui/Link";
import styles from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

export function Navbar({className}: INavbarProps) {
    const {toggleTheme} = useTheme();

    return (
        <div className={classNames(styles.root, {}, [className])}>
            <a href="#" className={styles.logo}>Logo</a>
            <div className={styles.colRight}>
                <nav>
                    <ul className={styles.menu}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </nav>
                <button onClick={toggleTheme}>Toggle theme</button>
            </div>
        </div>
    );
}