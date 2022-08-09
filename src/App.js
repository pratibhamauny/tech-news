
import './App.css';
import Search from './components/Search';
import Pagination from './components/Pagination';
import Posts from './components/Posts';
// import {useContext}from 'react';
// import {AppContext} from "./components/Context"
import { useGlobalContext } from './components/Context';
function App() {
  //const data=useContext(AppContext)
  //const data=useGlobalContext()
  return (
    <div className="App">
      <h1>Tech News</h1>
      {/* <p>{data}</p> */}
      <Search/>
      <Pagination/>
      <Posts/>
    </div>
  );
}

export default App;
