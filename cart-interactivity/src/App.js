import  "./App.css"
import Cart from './Cart';
import "./loading.css"



function App() {
  return (
    <div className="App">
        <Cart />
        <div id="hidden" className="lds-hourglass"></div>
    </div>

  );
}

export default App;
