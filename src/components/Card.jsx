import series from "../api/seriesData.json";
import { SeriesDat } from "./List";

const Card = () => {
  return (
    <ul className="grid grid-three-cols ">
      {series.map((curr) => (
        <SeriesDat key={curr.id} data={curr} />
      ))}
    </ul>
  );
};

export default Card;
