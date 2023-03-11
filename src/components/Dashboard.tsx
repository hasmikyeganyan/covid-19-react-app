import ListElements from "./ListElements";
import "../assets/styles/dashboard.scss";
import greenBacteria from "../assets/images/bacteria.png";
import redBacteria from "../assets/images/coronavirus.png";

interface IProps {
  data: {
    confirmed?: number;
    recovered?: number;
    deaths?: number;
    active?: number;
  };
}

const Dashboard = (props: IProps) => {
  return (
    <div className="global">
      <ul className="list-unstyled">
        <div className="d-flex">
          <ListElements
            title="Coronavirus Cases"
            src={redBacteria}
            result={props.data?.confirmed ?? 0}
          />
          <ListElements
            title="Total Recovered"
            src={greenBacteria}
            result={props.data?.recovered ?? 0}
          />
        </div>
        <div className="d-flex">
          <ListElements
            title="Total Deaths"
            src={redBacteria}
            result={props.data?.deaths ?? 0}
          />
          <ListElements
            title="Active Cases"
            src={redBacteria}
            result={props.data?.active ?? 0}
          />
        </div>
      </ul>
    </div>
  );
};

export default Dashboard;
