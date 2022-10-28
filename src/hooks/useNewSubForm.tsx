import { useReducer } from "react";
import { Sub } from "../../types";

const INITIAL_STATE = {
  nickname: "",
  monthSubs: 0,
  avatar: "",
  description: "",
};

// Version 1:
// type FormReducerAction =
//   | { type: "change_value"; payload: { inputName: string; inputValue: string } }
//   | { type: "clear" };

//Version 2:
interface Change {
  type: "change_value";
  payload: { inputName: string; inputValue: string };
}
interface Clear {
  type: "clear";
}

type FormReducerAction = Change | Clear;

const formReducer = (state: Sub, action: FormReducerAction) => {
  switch (action.type) {
    case "change_value":
      const { inputName, inputValue } = action.payload;
      return {
        ...state,
        [inputName]: inputValue,
      };

    case "clear":
      return INITIAL_STATE;
  }
};

const useNewSubForm = () => {
  return useReducer(formReducer, INITIAL_STATE);
};

export default useNewSubForm;
