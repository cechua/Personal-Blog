import './App.css';
import Navbar from './NavigationBar';
import {
   Switch,Route
} from "react-router-dom";
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddNewEntry from './pages/AddNewEntry';

function App() {
  return (
    <>
    <Navbar/>
    <div className="container-fluid bodypage">
    <Switch>
        <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route path="/mainpage" >
          <MainPage/>
        </Route>
        <Route path="/addnewentry" >
          <AddNewEntry/>
        </Route>
        <Route component={NotFoundPage} />
    </Switch>
    </div>
    </>
  );
}

export default App;
