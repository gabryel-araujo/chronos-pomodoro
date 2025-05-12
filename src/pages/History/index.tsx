import { Trash2 } from "lucide-react";
import { Container } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import styles from "./style.module.css";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { TaskModel } from "../../models/TaskModel";
import { formatDate } from "../../utils/formatDate";
import { toast } from "sonner";

export function History() {
  const { state, dispatch } = useTaskContext();

  const typeTaskDict = {
    workTime: "Foco",
    shortBreakTime: "Descanso curto",
    longBreakTime: "Descanso Longo",
  };

  function handleCheckTask(task: TaskModel): string {
    if (task.completeDate !== null) {
      return "Concluída";
    } else if (task.interruptDate !== null) {
      return "Interrompida";
    } else if (task.id === state.activeTask?.id) {
      return "Em andamento";
    }
    return "Abandonada";
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>
          Histórico{" "}
          <DefaultButton
            color="red"
            icon={<Trash2 color="white" />}
            square={true}
            onClick={() => {
              toast.success("Histórico deletado!");
              dispatch({ type: TaskActionTypes.RESET_STATE });
            }}
          ></DefaultButton>
        </Heading>
      </Container>

      <Container>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead className={styles.tableHead}>
              <tr className={styles.teste}>
                <th scope="col">Atividade</th>
                <th scope="col">Duração</th>
                <th scope="col">Data</th>
                <th scope="col">Status</th>
                <th scope="col">Tipo</th>
              </tr>
            </thead>
            <tbody>
              {state.tasks.map((task) => {
                return (
                  <tr className={styles.tableData} key={task.id}>
                    <td scope="row">{task.name}</td>
                    <td>{task.duration} min</td>
                    <td>{formatDate(task.startDate)}</td>
                    <td>{handleCheckTask(task)}</td>
                    <td>{typeTaskDict[task.type]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </MainTemplate>
  );
}
