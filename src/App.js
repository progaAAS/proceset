import ListProcess from "./components/ListProcess/ListProcess";
import { Switch } from "react-router-dom";
import WithLayout from "./layout/WithLayout";
import Public from "./layout/Public/Public";
import Private from "./layout/Private/Private";
import LogInPage from "./components/Auth/LogInPage/LogInPage";
import SignUpPage from "./components/Auth/SignUpPage/SignUpPage";
import UserPage from "./components/UserPage/UserPage";

const App = () => {
  return (
    <Switch>
      <WithLayout Layout={Public} exact path="/" AuthComponent={LogInPage}/>
      <WithLayout Layout={Public} exact path="/registration" AuthComponent={SignUpPage}/>
      <WithLayout Layout={Private} path="/setting" AuthComponent={UserPage}/>
      <WithLayout Layout={Private} path="/process" AuthComponent={ListProcess}/>
    </Switch>
  );
}

export default App;
