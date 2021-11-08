import { Route, Switch } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Challenges from "./pages/Challenges";
import Claim from "./pages/Claim";
import Homepage from "./pages/Homepage";
import Lore from "./pages/Lore";

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      
      <Route path="/" exact component={Homepage}/>
      <Route path="/lore" component={Lore}/>
      <Route path="/challenges" component={Challenges}/>
      <Route path="/claim" component={Claim}/>
    </Switch>
    <Footer />
    
    </>
  );
}

export default App;
