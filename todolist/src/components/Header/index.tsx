import { AiOutlinePlusCircle } from "react-icons/ai";
import { FormEvent, useState, ChangeEvent } from "react";

import todoLogo from "../../assets/todoLogo.svg";
import styles from "./header.module.css";

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="todologo" />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={title}
          onChange={onChangeTitle}
        />
        <button>
          Criar <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
