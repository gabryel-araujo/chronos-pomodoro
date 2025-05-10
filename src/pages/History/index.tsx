import { Trash2 } from "lucide-react";
import { Container } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import styles from "./style.module.css";
import { taskReducer } from "../../contexts/TaskContext/taskReducer";
import { initialTaskState } from "../../contexts/TaskContext/intialTaskState";
import { useReducer } from "react";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

export function History() {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  const typeTaskDict = {
    workTime: "Foco",
    shortBreakTime: "Descanso curto",
    longBreakTime: "Descanso Longo",
  };

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
                    <td>
                      {new Date(task.startDate).toLocaleDateString("pt-BR")}
                    </td>
                    <td>{task.interruptDate ? "Interrompida" : "Concluída"}</td>
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
