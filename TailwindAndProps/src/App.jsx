import Card from "./components/Card";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-red-400">Hello world</h1>
      <br />
      <br />
      <div className=" flex justify-between">
        <Card name="Naik Mubashir" rollNo={210338} sem="6th" />
        <Card name="Charles Bukowski" rollNo={32323} sem="3rd" />
        <Card name="Walter White" rollNo={365668} sem="4th" />
        <Card name="Jesse Pinkman" rollNo={382748} sem="8th" />
      </div>
    </>
  );
}

export default App;
