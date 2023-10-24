import "../css/Home.css";
import { ReactComponent as Logo } from "../assets/icon/Logo.svg";
import Card from "../component/Card";
import cityData from "../constants/City";

const Home = () => {
  return (
    <div className="Home">
      <Logo />
      <div className="cards">
        {cityData.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            id={item.id}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
