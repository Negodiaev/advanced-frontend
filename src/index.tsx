import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";

import {ThemeProvider} from "./theme/ThemeProvider";
import {App} from "./components/App";
import './styles/index.scss';

render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
);