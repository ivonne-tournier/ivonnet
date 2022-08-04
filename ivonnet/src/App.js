import './App.css';
import NavBar from './components/1NavBar';
import Banner from './components/2Banner';
import LastOfers from './components/3LastOfers';
import TellFriends from "./components/9TellFriends";
import Footer from './components/10Footer';
import Carrousel from './components/carrousel/index';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <LastOfers/>
      <TellFriends/>
      <Footer/>
      <Carrousel/>
    </div>
  );
}

export default App;
