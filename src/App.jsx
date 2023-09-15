import Header from "./composants/Header/Header";
import Hero from "./composants/Hero/Hero";
import './App.css'
function App() {
  return (
    <div className="app">
      <div>
        <Header/>
        <div className="white-gradient"/>  
        <Hero/>
      </div>
    
    </div>
  );
}

export default App;
