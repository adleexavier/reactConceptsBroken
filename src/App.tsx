import { useEffect, useMemo, useState } from "react";
function App() {
  const [color, setColor] = useState(0);
  // const worker: Worker = useMemo(
  //   () => new Worker(new URL("src/worker.js", import.meta.url)),
  //   []
  // );
  const handleevent = () => {
    const webWorker = new Worker("worker.js");
    webWorker.onmessage = function (e) {
      console.log("Msg recieved", e.data);
      webWorker.terminate();
    };
    webWorker.postMessage([5, 10]);
  };
  return <div onClick={handleevent}>Hello</div>;
}

export default App;
