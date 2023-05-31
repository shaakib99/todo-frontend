import {
  ITask,
  eTaskStatus,
  ITaskBoard,
  eActionType,
} from "@/interfaces/task.interface";
import { useReducer } from "react";

interface IState {
  isLoading: boolean;
  tasks: ITaskBoard;
}

interface IAction {
  type: eActionType;
  payload?: any;
}

export function useTaskBoardModel() {
  const [data, dispatch] = useReducer(
    (state: IState, action: IAction) => {
      switch (action.type) {
        case eActionType.UPDATE_IS_LOADING:
          state.isLoading = action.payload;
          break;
        case eActionType.FETCH_TASKS:
          state.isLoading = true;
          break;
        case eActionType.UPDATE_TASKS:
          state.isLoading = false;
          state.tasks = action?.payload || {};
          break;
        default:
      }

      return { ...state };
    },
    {
      isLoading: false,
      tasks: {
        todo: [
          {
            id: "1",
            title: "Testing title",
            status: eTaskStatus.todo,
            description: "Testing description",
          },
        ],
        active: [],
        done: [],
      },
    }
  );

  const moveTask = (task: ITask, queue: eTaskStatus) => {
    if (task?.status === queue) return;
    
    const { tasks = {} } = data;

    switch (task?.status?.toLowerCase()) {
      case eTaskStatus.todo?.toLowerCase():
        tasks.todo = tasks?.todo?.filter((t) => task?.id != t?.id) || [];
        break;
      case eTaskStatus.active?.toLowerCase():
        tasks.active = tasks?.active?.filter((t) => task?.id != t?.id) || [];
        break;
      case eTaskStatus.done?.toLowerCase():
        tasks.done = tasks?.done?.filter((t) => task?.id != t?.id) || [];
        break;
    }

    switch (queue?.toLowerCase()) {
      case eTaskStatus.todo?.toLowerCase():
        task.status = eTaskStatus.todo;
        tasks.todo?.push(task);
        break;
      case eTaskStatus.active?.toLowerCase():
        task.status = eTaskStatus.active;
        tasks.active?.push(task);
        break;
      case eTaskStatus.done?.toLowerCase():
        task.status = eTaskStatus.done;
        tasks.done?.push(task);
        break;
    }

    return dispatch({ type: eActionType.UPDATE_TASKS, payload: { ...tasks } });
  };
  const moveToNextQueue = (task: ITask) => {};
  return { data, moveToNextQueue, moveTask };
}
