import { Dispatch } from "react";
import { ACTIONS, Action } from "./App";

type DigitButtonProps = {
  dispatch: Dispatch<Action>;
  digit: string
}

export default function DigitButton({ dispatch, digit }: DigitButtonProps) {
  return <button 
  onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: {digit} })}
  >
    {digit}
  </button>;
}
