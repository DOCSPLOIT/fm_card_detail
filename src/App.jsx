import React from "react";
import { Navigator, Route } from "./components/Navigator";
import Home from "./Home";
import ThankYou from "./ThankYou";

function App() {
  return (
    <Navigator>
      <Home />
    </Navigator>
  );
}

export default App;
