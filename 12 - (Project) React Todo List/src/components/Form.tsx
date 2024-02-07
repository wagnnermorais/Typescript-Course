import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { ITask } from "../types/Task";
import styles from "../styles/Form.module.css";

type Props = {
  buttonText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(updatedTask: ITask): void;
};

const Form = ({
  buttonText,
  taskList,
  setTaskList,
  task,
  handleUpdate,
}: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleUpdate) {
      handleUpdate({ id, title, difficulty });
    } else {
      const newId = Math.floor(Math.random() * 1000);
      const newTask: ITask = { id: newId, title, difficulty };

      setTaskList!([...taskList, newTask]);
      setTitle("");
      setDifficulty(0);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(Number(e.target.value));
    }
  };

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  return (
    <div>
      <form className={styles.form} onSubmit={handleAddTask}>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Título:</label>
          <input
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="Título da tarefa"
            value={title}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="difficulty">Dificuldade:</label>
          <input
            onChange={handleChange}
            type="text"
            name="difficulty"
            placeholder="Nível de dificuldade"
            value={difficulty}
          />
        </div>
        <input type="submit" value={buttonText} />
      </form>
    </div>
  );
};

export default Form;
