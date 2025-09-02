import series from "../api/seriesData.json";
import { SeriesDat } from "./List";
import styles from "./netflix.module.css"; // ✅ same folder


const Card = () => {
  return (
    <ul className={`${styles.grid} ${styles.gridThreeCols}`}>
      {series.map((curr) => (
        <SeriesDat key={curr.id} data={curr} />
      ))}
    </ul>
  );
};

export default Card;
