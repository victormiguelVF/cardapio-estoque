import { useState } from "react";

const TodoForm = ( { addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  };
  return (
    <div className="todo-form">
      <h2>Adicionar item:</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Digite o título'
        value={value}
        onChange={(e) => setValue(e.target.value)}/>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Som">Som</option>
          <option value="Rádio">Rádio</option>
          <option value="Alarme">Alarme</option>
          <option value="Vidro">Vidro</option>
          <option value="Multimídia">Multimídia</option>
        </select>
        <button type='submit'>Adiconar</button>
      </form>
    </div>
  );
}

export default TodoForm;
