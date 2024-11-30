import { useContext } from "react";
import { countAtom, evenSelector } from "../store/atoms/count";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <b>{count}</b>
      <IsEven />
    </div>
  );
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((c) => c - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}
function IsEven() {
  const count = useRecoilValue(evenSelector);
  return (
    <div>
      <p>{count % 2 == 0 ? "It is even" : " ."}</p>
    </div>
  );
}

export default App;
