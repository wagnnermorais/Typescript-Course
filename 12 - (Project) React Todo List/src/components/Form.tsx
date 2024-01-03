import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { ITask } from "../types/Task";
import styles from "../styles/Form.module.css";

type Props = {
  buttonText: string;
};

const Form = ({ buttonText }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const handleAddTask = () => {};

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(Number(e.target.value));
    }
  };
  return (
    <div>
      <h2 className={styles.title}>O que você vai fazer?</h2>
      <form className={styles.form} onSubmit={handleAddTask}>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Título:</label>
          <input
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="Título da tarefa"
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="difficulty">Dificuldade:</label>
          <input
            onChange={handleChange}
            type="text"
            name="difficulty"
            placeholder="Nível de dificuldade"
          />
        </div>
        <input type="submit" value={buttonText} />
      </form>
    </div>
  );
};

export default Form;
