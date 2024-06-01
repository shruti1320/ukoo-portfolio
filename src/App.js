import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from "../src/screen/HomeScreen.js";
import { ParallaxProvider } from "react-scroll-parallax";
function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <HomeScreen />
      </ParallaxProvider>
    </div>
  );
}

export default App;
