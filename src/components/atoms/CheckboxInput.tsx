import { CheckboxInputProps } from "../../utils/component";


const CheckboxInput: React.FC<CheckboxInputProps> = ({ checked, onChange }) => {
  return (
    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
      <input
        className="relative float-left ..."
        type="checkbox"
        value=""
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
};

export default CheckboxInput;