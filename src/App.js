import "./globalStyle.css";
import TopComponent from "./components/topComponent";
import MidComponent from "./components/midComponent";
import BotComponent from "./components/bottomComponent";
import Navbar from "./components/navbar/navbar"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TopComponent />
      <MidComponent/>

      <BotComponent />
    </div>
  );
}

export default App;
