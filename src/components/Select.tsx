import "../assets/styles/select.scss";

interface IProps {
  data: {
    iso: string;
    name: string;
  }[];
}

const Select = (props: IProps) => {
  return (
    <>
      <label htmlFor="region">Select region:</label>
      <select className="regions-select">
        {props.data.map((i) => (
          <option key={i.name} value={i.iso}>
            {i.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
