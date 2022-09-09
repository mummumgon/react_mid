import GlovalStyle from "./GlovalStyle";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import { darktheme, lightTheme} from './theme';
import {useRecoilValue} from 'recoil';
import { darkModeAtom } from './atom';
function App() {
  const isDark = useRecoilValue(darkModeAtom);
  return <div>
    <ThemeProvider theme={ !isDark ? lightTheme : darktheme }>
      <GlovalStyle/>
      <Router/>
    </ThemeProvider>
    </div>
}

export default App;