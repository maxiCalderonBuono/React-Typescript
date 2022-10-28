import { Sub } from "../../types";
import useNewSubForm from "../hooks/useNewSubForm";

interface FormProps {
  onSub: (newSub: Sub) => void;
}

const Form = ({ onSub }: FormProps) => {
  //   const [inputValues, setinputValues] =
  //     useState<FormState["inputValues"]>(INITIAL_STATE);

  const [inputValues, dispatch] = useNewSubForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSub(inputValues);
    dispatch({ type: "clear" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
  };

  const handleClear = () => {
    dispatch({ type: "clear" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="nes-field">
          <label htmlFor="nickname">Nick</label>
          <input
            onChange={handleInputChange}
            value={inputValues.nickname}
            type="text"
            id="nickname"
            className="nes-input"
            required
            name="nickname"
          />
        </div>
        <div className="nes-field">
          <label htmlFor="monthSubs">monthSubs</label>
          <input
            onChange={handleInputChange}
            value={inputValues.monthSubs}
            type="text"
            id="monthSubs"
            className="nes-input"
            required
            name="monthSubs"
          />
        </div>
        <div className="nes-field">
          <label htmlFor="avatar">Avatar</label>
          <input
            onChange={handleInputChange}
            value={inputValues.avatar}
            type="text"
            id="avatar"
            className="nes-input"
            required
            name="avatar"
          />
        </div>{" "}
        <div className="nes-field">
          <label htmlFor="description">Description</label>
          <textarea
            onChange={handleInputChange}
            value={inputValues.description}
            id="description"
            className="nes-textarea"
            required
            name="description"
          />
        </div>
        <button className="nes-btn" type="submit">
          Add new sub!
        </button>
        <button
          onClick={handleClear}
          className="nes-btn is-error"
          type="button"
        >
          Clear the form
        </button>
      </form>
    </div>
  );
};

export default Form;
