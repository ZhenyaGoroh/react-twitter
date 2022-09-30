import { Provider } from "react-redux";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import  store  from "./store";
function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;
