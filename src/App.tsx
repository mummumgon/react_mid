import GlovalStyle from "./GlovalStyle";
import { ThemeProvider } from "styled-components";
import { darkTheme , lightTheme } from "./theme";
import MainRouter from "./MainRouter";
import {useRecoilValue} from 'recoil';
import { darkMode } from './atom';
function App() {
  const isDark = useRecoilValue(darkMode);
  return <div>
      <ThemeProvider theme={ isDark ? lightTheme : darkTheme}>
        <GlovalStyle/>
        <MainRouter/>
      </ThemeProvider>
    </div>
}

export default App;