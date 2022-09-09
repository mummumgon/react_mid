import {BrowserRouter ,Routes, Route} from 'react-router-dom'
import Coin from './component/Coin';
import Coins from './component/Coins';
import Header from './component/Header';
function Router(){
    return <BrowserRouter>
    <Header/>
        <Routes>
            <Route path='/react_mid' element={<Coins/>}/>
            <Route path='/react_mid/:coinId/*' element={<Coin/>}/>
        </Routes>
    </BrowserRouter>
}
export default Router;