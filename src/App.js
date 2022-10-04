import Window from "./Components/Window/Window";
import Modal from './Components/Modal/Modal';
import Backdrop from "./Components/Backdrop/Backdrop";

function App() {
  return (
    <div className="App">
     <h3>React app</h3>
    <Window text = 'Learn React'/>
    <Window text = 'Make a coffee'/>
    <Modal />
    <Backdrop />
    </div>
  );
}

export default App;
