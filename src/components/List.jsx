import styles from "./netflix.module.css"; 
import styled from 'styled-components';

export const SeriesDat = ({ data }) => {
  const { name, img_url, rating, description, cast, genre, watch_url } = data;

  const rat = rating >= 8.5 ? "superhit" : "avg";
const Rate = styled.h3({
  fontSize:"1.6rem",
  color:"#E30000",
  textTransform:"capitalize"

})
const But = styled.button({
  border: "none",
    fontSize: "1rem",
    background: `${rating >= 8.5 ? "green" : "yellow"}`,
    color: "white",
    padding: "0.6rem 1.2rem",
    borderRadius: "6px",
    cursor: "pointer",
    textDecoration: "none"
});
 

  return (
    <li className={styles.card}>
      <div>
        <img src={img_url} className={styles.img} alt={name} />
      </div>
      <div className={styles.cardContain}>
        <h2>Name: {name}</h2>
        <Rate>
          Rating: <span className={styles[rat]}>{rating}</span>
        </Rate>
        <p className="text-3xl font-bold underline">Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank" rel="noopener noreferrer">
          <But>Watch Now</But>
        </a>
      </div>
    </li>
  );
};
