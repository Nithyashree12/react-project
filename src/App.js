import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import List from './List';
import Result from './Result';
import CitiesList from './CitiesList';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
      <Route exact path="/" element={<List/>}/>
      <Route exact path="/citiesList" element={<CitiesList/>}></Route>
      <Route exact path="/result" element={<Result/>}>
      </Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
