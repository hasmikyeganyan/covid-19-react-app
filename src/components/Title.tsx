import "../assets/styles/title.scss";

interface IProps {
  title: string;
  updated: string;
}

const Title = (props: IProps) => {
  return (
    <div className="navbar-brand text-secondary">
      <h1>{props.title}</h1>
      <h6>Updated at {props.updated}</h6>
    </div>
  );
};

export default Title;
