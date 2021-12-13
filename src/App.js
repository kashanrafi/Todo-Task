import "./App.css";
import React from "react";
import AddList from "./components/AddList/AddList";
import ListHistory from "./components/ListHistory/ListHistory";
import store from "./Store/Store";
import { Provider } from "react-redux";

function App() {
  return <>
      <Provider store={store}>
      <div className="container">
        <AddList />
        <ListHistory />
        </div>
      </Provider>
    </>

}

export default App;
