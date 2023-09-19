import Header from "./composants/Header/Header";
import Hero from "./composants/Hero/Hero";
import Companies from "./composants/Companies/Companies";
import './App.css'
import Batteries from "./composants/Batteries/Batteries";
import Value from "./composants/Value/Value"
function App() {
  return (
    <div className="app">
      <div>
        <Header/>
        <div className="white-gradient"/>  
        <Hero/>
      </div>
      <Companies/>
      <Batteries/>
      <Value/>

    
    </div>
  );
}

export default App;
