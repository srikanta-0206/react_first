import Card from "./components/Card";
import styles from "./components/netflix.module.css"; // ✅ path from src
import { Ev } from "./components/event";

export const App = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.cardHeading}>List of Series</h1>
      <Card />
      <Ev/>
    </section>
    
  );
};
