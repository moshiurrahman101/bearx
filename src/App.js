import { Route, Switch } from "react-router";
import Homepage from "./pages/Homepage";
import Lore from "./pages/Lore";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Homepage}/>
      <Route path="/lore" component={Lore}/>
    </Switch>
  );
}

export default App;
