import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Overview from './pages/Overview';
import {Reports, ReportsOne, ReportsTwo} from './pages/Reports';
import Support from './pages/Support';
import Team from './pages/Team';
import Product from './pages/Product';

function App() {
  return (
   <>
   <Router>
   <Sidebar/>
   <Switch>
     <Route path="/overview" exact component={Overview} />
     <Route path="/reports" exact component={Reports} />
     <Route path="/reports/reports1" exact component={ReportsOne} />
     <Route path="/reports/reports2" exact component={ReportsTwo} />
     <Route path="/products" exact component={Product} />
     <Route path="/team" exact component={Team} />
     <Route path="/support" exact component={Support} />
     
   </Switch>
   </Router>
   </>
  );
}

export default App;
