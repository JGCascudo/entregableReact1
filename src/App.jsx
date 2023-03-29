import "./App.css";
import Button from "./components/Button";
import Phrase from "./components/Phrase";
import phrases from "./utils/phrases.json";
import getRandomArray from "./utils/getRandomArray";
import { useState } from "react";

const imgs = [1, 2, 3, 4]

function App() {
  const [PhraseRandom, setPhraseRandom] = useState(getRandomArray(phrases));
  const [numberImg, setNumberImg] = useState(getRandomArray(imgs))
  const appStyle={
    backgroundImage: `url('/backgraunds/fondo${numberImg}.jpg')`
  }
  return (
    <div style={appStyle} className="App">
      <h1 className="App_title">Fraces de superación</h1>
      <Phrase PhraseRandom={PhraseRandom} />
      <Button setPhraseRandom = {setPhraseRandom} setNumberImg={setNumberImg} />
    </div>
  );
}

export default App;
