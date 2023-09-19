import styles from "./task.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ITasks } from "../../App";

interface Props {
  task: ITasks;
}
export function Task({ task }: Props) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <BsFillCheckCircleFill />
      </button>
      <p>{task.title}</p>
      <button className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
