import Header from "../components/Header";
import Form from "../components/Form";
import Tasks from "../components/Tasks";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import { ITask } from "../types/Task";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const deleteTask = (id: number) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const openModal = (task: ITask) => {
    setIsModalOpen(true);
    setTaskToUpdate(task);
  };

  const updateTask = (updatedTask: ITask) => {
    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setTaskList(updatedItems);
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
          <Form
            buttonText="Editar Tarefa"
            taskList={taskList}
            task={taskToUpdate}
            handleUpdate={updateTask}
          />
        </Modal>
        <Header />
        <Form
          buttonText="Criar Tarefa"
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <Tasks
          taskList={taskList}
          handleDeleteTask={deleteTask}
          openModal={openModal}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
