
import './App.css';
import Navbar from './NavigationBar';
import {
   Switch,Route
} from "react-router-dom";
import HomePage from './pages/HomePage';
import CodeBlocks from './pages/CodeBlocks';
import NotFoundPage from './pages/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddNewEntry from './pages/AddNewEntry';
function App() {
  return (
    <>
    <Navbar/>
    <Switch>
        <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route path="/codeblocks" >
          <CodeBlocks/>
        </Route>
        <Route path="/addnewentry" >
          <AddNewEntry/>
        </Route>
        <Route component={NotFoundPage} />
    </Switch>
    </>
  );
}

export default App;
