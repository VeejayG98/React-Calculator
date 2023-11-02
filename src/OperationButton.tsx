import { Dispatch } from "react";
import { ACTIONS, Action } from "./App";

type OperationButtonProps = {
  operation: string;
  dispatch: Dispatch<Action>;
};

export default function OperationButton({ operation, dispatch }: OperationButtonProps) {
  return <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: {operation} })}>{operation}</button>;
}
