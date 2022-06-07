import Home from './pages/Home'
import Pages from './pages/Pages';
import Category from "./components/Category";
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
            {/* <Home /> */}
            <Category />
            <Pages/>
        </BrowserRouter>
    </div>
  );
}

export default App;
