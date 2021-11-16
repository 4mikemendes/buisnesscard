
import './App.css';
import Image from "./components/Image.js"
import Info from "./components/Info.js"
import Description from "./components/Description.js"
import Socialinks from "./components/Socialinks.js"

function App() {
  return (
    <div className="App">
     <Image />
     <div className="content">
     <Info />
     <Description />
     </div>
     <Socialinks />
    </div>
  );
}

export default App;

