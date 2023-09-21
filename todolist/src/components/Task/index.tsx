import styles from "./task.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ITasks } from "../../App";

interface Props {
  task: ITasks;
  onDelete: (taskId: string) => void;
}
export function Task({ task, onDelete }: Props) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <BsFillCheckCircleFill />
      </button>
      <p>{task.title}</p>
      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
