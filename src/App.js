import {ThemeProvider} from "styled-components";
import {Switch, Route, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";


import {lightTheme} from "./components/Themes"
import GlobalStyle from "./globalStyles";


import Main from "./pages/Main"
import AboutPage from "./pages/AboutPage"
import ProjectsPage from "./pages/ProjectsPage"
import WorkPage from "./pages/WorkPage"
import MySkillsPage from "./pages/MySkillsPage"
import SoundBar from "./subComponents/SoundBar";

function App() {
    const location = useLocation()

    return (
        <>
            <GlobalStyle/>

            <ThemeProvider theme={lightTheme}>
                <SoundBar/>

                <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.pathname}>
                        <Route exact path="/" component={Main}/>
                        <Route exact path="/about" component={AboutPage}/>
                        <Route exact path="/projects" component={ProjectsPage}/>
                        <Route exact path="/work" component={WorkPage}/>
                        <Route exact path="/skills" component={MySkillsPage}/>
                    </Switch>
                </AnimatePresence>
            </ThemeProvider>
        </>
    );
}

export default App;
