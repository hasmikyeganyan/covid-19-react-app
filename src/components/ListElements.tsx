import "../assets/styles/list.scss";

interface IProps {
  title: string;
  result: number;
  src?: string | undefined;
}

const ListElements = (props: IProps) => {
  return (
    <>
      <li className="card w-50">
        <h4>{props.title}</h4>
        <img alt="bacteria" src={props.src} width={50} height={50}></img>
        <h3>{props.result}</h3>
      </li>
    </>
  );
};

export default ListElements;
