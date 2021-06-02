import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Phase from "./components/Phase";
import Stage from "./components/Stage";
import Users from "./components/Users";
import StageManagement from "./components/StageManagement";
import EditUser from "./components/EditUser";
import AddQuestion from "./components/AddQuestion";
import EditQuestion from "./components/EditQuestion";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/phase" component={Phase} />
        <Route exact path="/stage" component={Stage} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/stagemanagement" component={StageManagement} />
        <Route exact path="/edituser" component={EditUser} />
        <Route exact path="/addquestion" component={AddQuestion} />
        <Route exact path="/editquestion" component={EditQuestion} />
      </Switch>
    </BrowserRouter>
  );
}
