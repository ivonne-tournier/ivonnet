import './App.css';
import NavBar from './components/1NavBar';
import Banner from './components/2Banner';
import LastOfers from './components/3LastOfers';
import TellFriends from "./components/9TellFriends";
import Footer from './components/10Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <LastOfers/>
      <TellFriends/>
      <Footer/>
    </div>
  );
}

export default App;
