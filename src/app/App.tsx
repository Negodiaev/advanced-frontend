import {classNames} from "shared/lib/classNames/classNames";
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import './styles/index.scss';

export function App() {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {
            hovered: true,
            selected: false
        }, [theme === Theme.DARK ? Theme.DARK : ''])}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
}