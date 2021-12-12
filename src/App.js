import { ThemeProvider } from "styled-components";
import { Switch, Route } from "react-router-dom";

import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles";

import { Main, AboutPage, WorkPage, MySkillsPage, ProjectsPage } from "./components";

function App() {
    return (
        <>
            <GlobalStyle />

            <ThemeProvider theme={lightTheme}>

                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/projects" component={ProjectsPage} />
                    <Route exact path="/work" component={WorkPage} />
                    <Route exact path="/skills" component={MySkillsPage} />
                </Switch>

            </ThemeProvider>
        </>
    );
}

export default App;
