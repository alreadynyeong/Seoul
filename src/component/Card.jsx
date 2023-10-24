import "../css/Card.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Card = ({ id, name, title }) => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  const imgSrc = imagePaths[title];
  const hoverSrc = hoverPaths[title];
  return (
    <div
      className="card"
      onClick={() => {
        navigate(`/${title}`);
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {hover ? (
        <>
          <img src={hoverSrc} alt={name} width={324} height={414} />
        </>
      ) : (
        <>
          <div className="card-img">
            <img src={imgSrc} alt={name} width={324} height={324} />
          </div>
          <div className="card-head">{name}</div>
        </>
      )}
    </div>
  );
};

export default Card;

const imagePaths = {
  신촌: require("../assets/card/신촌.png"),
  혜화: require("../assets/card/혜화.png"),
  덕수궁: require("../assets/card/덕수궁.png"),
  잠실: require("../assets/card/잠실.png"),
  남산: require("../assets/card/남산.png"),
  여의도: require("../assets/card/여의도.png"),
  석촌: require("../assets/card/석촌.png"),
  상암: require("../assets/card/상암.png"),
  성북동: require("../assets/card/성북동.png"),
  정릉: require("../assets/card/정릉.png"),
  한강: require("../assets/card/한강.png"),
  지하철: require("../assets/card/지하철.png"),
  압구정: require("../assets/card/압구정.png"),
  성수: require("../assets/card/성수.png"),
  동대문: require("../assets/card/동대문.png"),
  홍대: require("../assets/card/홍대.png"),
  대치: require("../assets/card/대치.png"),
  인사동: require("../assets/card/인사동.png"),
  을지로: require("../assets/card/을지로.png"),
  북한산: require("../assets/card/북한산.png"),
  디디피: require("../assets/card/디디피.png"),
  서울역: require("../assets/card/서울역.png"),
  동묘: require("../assets/card/동묘.png"),
  경복궁: require("../assets/card/경복궁.png"),
};

const hoverPaths = {
  신촌: require("../assets/hover/신촌_호버.png"),
  혜화: require("../assets/hover/혜화_호버.png"),
  덕수궁: require("../assets/hover/덕수궁_호버.png"),
  잠실: require("../assets/hover/잠실_호버.png"),
  남산: require("../assets/hover/남산_호버.png"),
  여의도: require("../assets/hover/여의도_호버.png"),
  석촌: require("../assets/hover/석촌_호버.png"),
  상암: require("../assets/hover/상암_호버.png"),
  성북동: require("../assets/hover/성북동_호버.png"),
  정릉: require("../assets/hover/정릉_호버.png"),
  한강: require("../assets/hover/한강_호버.png"),
  지하철: require("../assets/hover/지하철_호버.png"),
  압구정: require("../assets/hover/압구정_호버.png"),
  성수: require("../assets/hover/성수_호버.png"),
  동대문: require("../assets/hover/동대문_호버.png"),
  홍대: require("../assets/hover/홍대_호버.png"),
  대치: require("../assets/hover/대치_호버.png"),
  인사동: require("../assets/hover/인사동_호버.png"),
  을지로: require("../assets/hover/을지로_호버.png"),
  북한산: require("../assets/hover/북한산_호버.png"),
  디디피: require("../assets/hover/디디피_호버.png"),
  서울역: require("../assets/hover/서울역_호버.png"),
  동묘: require("../assets/hover/동묘_호버.png"),
  경복궁: require("../assets/hover/경복궁_호버.png"),
};
