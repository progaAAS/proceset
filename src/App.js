import ListProcess from "./page/ListProcess/ListProcess";
import { Switch } from "react-router-dom";
import WithLayout from "./layout/WithLayout";
import Public from "./layout/Public/Public";
import Private from "./layout/Private/Private";
import LogInPage from "./page/Auth/LogInPage/LogInPage";
import SignUpPage from "./page/Auth/SignUpPage/SignUpPage";
import UserPage from "./page/UserPage/UserPage";

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
