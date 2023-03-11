interface IProps {
  onValueChange: (value: string) => void;
}

const Input = (props: IProps) => {
  return (
    <form className="form-inline">
      <input
        className="form-control mr-sm-2"
        type="date"
        onChange={(e) => props.onValueChange(e.target.value)}
      />
    </form>
  );
};

export default Input;
