import { ITask } from "../types/Task";
import styles from "../styles/Tasks.module.css";

type Props = {
  taskList: ITask[];
  handleDeleteTask(id: number): void;
  openModal: (task: ITask) => void;
};

const Tasks = ({ taskList, handleDeleteTask, openModal }: Props) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Suas tarefas:</h3>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <p className={styles.taskTitle}>{task.title}</p>
              <p className={styles.taskDifficulty}>
                Dificuldade: {task.difficulty}
              </p>
            </div>
            <div className={styles.actions}>
              <i className="bi bi-pencil" onClick={() => openModal(task)}></i>
              <i
                className="bi bi-trash"
                onClick={() => handleDeleteTask(task.id)}
              ></i>
            </div>
          </div>
        ))
      ) : (
        <p>não há tarefas</p>
      )}
    </div>
  );
};

export default Tasks;
