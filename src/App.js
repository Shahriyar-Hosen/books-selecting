import AnswerTheQuestion from "./Components//AnswerTheQuestion/AnswerTheQuestion";
import "./App.css";
import Carts from "./Components/Carts/Carts";
import Header from "./Components//Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Carts></Carts>
      <AnswerTheQuestion></AnswerTheQuestion>
    </div>
  );
}

export default App;
