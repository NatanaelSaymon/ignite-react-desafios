import { ITasks } from "../../App";
import { Task } from "../Task";
import styles from "./tasks.module.css";

interface Props {
  tasks: ITasks[];
  onDelete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete }: Props) {
  const taskQuantity = tasks.length;
  const completedTask = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{taskQuantity}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>
            {completedTask} de {taskQuantity}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} />
        ))}
      </div>
    </section>
  );
}
