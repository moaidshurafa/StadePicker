const Stadiums = ({ title, text, stadiums, onSelectStadium }) => {
  return (
    <section className="places-category">
      <h2>{title}</h2>
      <p className="fallback-text">{text}</p>
      {stadiums.length > 0 && (
        <ul className="places">
          {stadiums.map((stadium) => (
            <li key={stadium.id} className="place-item">
              <button onClick={() => onSelectStadium(stadium.id)}>
                <img src={stadium.image.src} alt={stadium.image.alt} />
                <h3>{stadium.title}</h3>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
export default Stadiums;
