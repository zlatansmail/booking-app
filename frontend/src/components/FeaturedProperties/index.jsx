import useFetch from "../../hooks/useFetch";

import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error, reFetch } = useFetch(
    "hotels?featured=true&limit=4"
  );

  return (
    <div className="fp">
      {loading ? (
        "Loading..."
      ) : (
        <>
          {data.map((hotel, index) => (
            <div className="fpItem" key={index}>
              <img
                src={hotel.photos[0]}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{hotel.name}</span>
              <span className="fpCity">{hotel.city}</span>
              <span className="fpPrice">Starting from {hotel.cheapestPrice}</span>
              {hotel.rating && <div className="fpRating">
                <button>{hotel.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
