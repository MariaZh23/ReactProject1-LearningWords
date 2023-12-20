import "./TablePageMain.scss";
import Flashcard from "../Flashcard/Flashcard";
import Table from "../Table/Table";

export default function TablePageMain() {
  return (
    <div>
      <Flashcard />
      <h1>Таблица изучаемых слов</h1>
      <Table />
    </div>
  );
}
