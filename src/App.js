import s from './App.module.css';
import Auth from "./components/Auth/Auth";
import Reg from "./components/Reg/Reg";
import ListProcess from "./components/ListProcess/ListProcess";
import {Route, Switch, Redirect} from "react-router-dom";
import User from "./components/User/User";
import WithLayout from "./layout/WithLayout";
import Public from "./layout/Public/Public";
import Private from "./layout/Private/Private";




const App = () => {
  return (<div>
      <Switch>
        <WithLayout layout={Public} exact path="/" component={Auth}/>
        <WithLayout layout={Public} exact path="/registration" component={Reg}/>
        <WithLayout layout={Private} path="/setting" component={User}/>
        <WithLayout layout={Private} path="/process" component={ListProcess}/>
      </Switch>
    </div>
  );
}

export default App;
