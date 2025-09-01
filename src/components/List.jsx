export const SeriesDat = ({ data }) => {
  const { name, img_url, rating, description, cast, genre, watch_url } = data;

  const rat = rating >= 8.5 ? "superhit" : "avg";

  const btn_style = {
    border: "none",
    fontSize: "1rem",
    background:rating >= 8.5 ? "green" : "yellow",
    color: "white",
    padding: "0.6rem 1.2rem",
    borderRadius: "6px",
    cursor: "pointer",
    textDecoration: "none"
  };

  return (
    <li className="card">
      <div>
        <img src={img_url} className="img" alt={name} />
      </div>
      <div className="card-contain">
        <h2>Name: {name}</h2>
        <h3>
          Rating: <span className={rat}>{rating}</span>
        </h3>
        <p>Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank" rel="noopener noreferrer">
          <button style={btn_style}>Watch Now</button>
        </a>
      </div>
    </li>
  );
};
