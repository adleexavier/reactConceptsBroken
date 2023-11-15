import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Data from "./components/Data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <Data></Data>
    </Provider>
  );
}

export default App;
