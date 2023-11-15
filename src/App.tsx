import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Data from "./components/Data";
import { productsApi } from "./store/rtkQuerySlice";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <ApiProvider api={productsApi}>
        <Data></Data>
      </ApiProvider>
    </Provider>
  );
}

export default App;
