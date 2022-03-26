import AnswerTheQuestion from "./AnswerTheQuestion/AnswerTheQuestion";
import "./App.css";
import Carts from "./Carts/Carts";
import Header from "./Header/Header";

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
