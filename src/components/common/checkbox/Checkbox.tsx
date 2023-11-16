import * as SC from './Checkbox.styled';

interface ICheckboxProps {
  onChange: (checked: boolean) => void;
  label?: string;
}

const Checkbox = ({ onChange, label }: ICheckboxProps) => {
  return (
    <SC.Checkbox>
      <SC.CheckboxInput type="checkbox" id="default-checkbox" onChange={e => onChange(e.target.checked)} />
      {label && <SC.Label htmlFor="default-checkbox">{label}</SC.Label>}
    </SC.Checkbox>
  );
};

export { Checkbox };
