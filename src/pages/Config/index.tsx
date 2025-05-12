import { Save } from "lucide-react";
import { Container } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import { DefaultInput } from "../../components/DefaultInput";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";

import styles from "./styles.module.css";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import { toast } from "sonner";

const schema = z.object({
  focus: z.coerce.number().positive("O número não pode ser menor que zero"),
  short: z.coerce.number().positive("O número não pode ser menor que zero"),
  long: z.coerce.number().positive("O número não pode ser menor que zero"),
});

type FormData = z.infer<typeof schema>;

export function Config() {
  const { state, dispatch } = useTaskContext();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  function handleSaveConfig(data: FormData) {
    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        workTime: data.focus,
        shortBreakTime: data.short,
        longBreakTime: data.long,
      },
    });
    toast.success("Configurações atualizadas");
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Config</Heading>
      </Container>
      <Container>
        <p className={styles.textCenter}>
          Modifique as configurações da sua aplicação
        </p>

        <form className={styles.form} onSubmit={handleSubmit(handleSaveConfig)}>
          <label htmlFor="focus">Tempo de foco(min):</label>
          <DefaultInput
            type="text"
            inputMode="numeric"
            id="focus"
            defaultValue={state.config.workTime}
            {...register("focus")}
          />
          {errors.focus && (
            <p className={styles.error}>{errors.focus.message}</p>
          )}
          <label htmlFor="short">Descanso curto(min):</label>
          <DefaultInput
            type="text"
            inputMode="numeric"
            id="short"
            defaultValue={state.config.shortBreakTime}
            {...register("short")}
          />
          {errors.short && (
            <p className={styles.error}>{errors.short.message}</p>
          )}
          <label htmlFor="long">Descanso longo(min):</label>
          <DefaultInput
            type="text"
            inputMode="numeric"
            id="long"
            defaultValue={state.config.longBreakTime}
            {...register("long")}
          />
          {errors.long && <p className={styles.error}>{errors.long.message}</p>}
          <DefaultButton icon={<Save />}></DefaultButton>
        </form>
      </Container>
    </MainTemplate>
  );
}
