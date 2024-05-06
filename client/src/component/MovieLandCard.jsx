import React from "react";

function MovieLandCard({ movie }) {
  console.log(movie[0].landscapeImgUrl);
  const containerStyle = {
    display: "flex",
    flex: "3",
    top: "5px",
    alignItems: "center",
    gap: "20px",
    padding: "20px",
    // backgroundImage: url(movie[0].landscapeImgUrl), // corrected
    backgroundSize: "cover",
    borderRadius: "8px",
    position: "relative",
    justifyContent: "center",
    height: "500px", // Set your desired height here
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0,0.4)",
    borderRadius: "8px",
    padding: "20px",
    color: "white",
    display: "flex",
    flexDirection: "row",
    // justifyContent: 'center',
    alignItems: "flex-start",
  };

  const imageContainerStyle = {
    flex: "1",
    maxWidth: "25%",
    marginRight: "40px",
  };

  const imageStyle = {
    margin: "5px",
    width: "100%",
    height: "450px",
    borderRadius: "8px",
  };

  const infoStyle = {
    top: "50px",
  };
  return (
    <div className="container mx-auto">
      <div style={{ ...containerStyle, backgroundImage: `url(${movie[0].landscapeImgUrl})` }}>
        <div style={overlayStyle}>
          <div style={imageContainerStyle}>
            <img src={movie[0].portraitImgUrl} alt="poster" style={imageStyle} />
          </div>
          <div className="font-semibold w-[75%]">
            <h2 className="text-2xl font-bold mb-4">{movie[0].title}</h2>
            <p className="text-white-600 mb-2">
              <strong className="text-xl">Genre:</strong> {movie[0].genre}
            </p>
            <div>
              <p className="text-white-600 mb-2">
                <strong className="text-xl">Rating:</strong> {movie[0].rating}
                <button className="h-10 w-24 ml-9 bg-red-500 text-white border-none rounded-md text-lg font-bold cursor-pointer">
                  Rate Now
                </button>
              </p>
            </div>
            <h4>
              <strong className="text-xl mb-2">Available in: </strong>Kannada, English, Hindi, Telegu,
              Tamil
            </h4>
            <p className="text-white-600 mb-4 mt-4">
              <strong className="text-xl">Description:</strong> {movie[0].description}
            </p>
            <p className="text-white-600 mb-4">
              <strong className="text-xl">Duration:</strong> {movie[0].duration}
            </p>
            {/* <Link to={/mymovie/${movie[0]._id}} className="bg-red-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                    Book Tickets
                </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default MovieLandCard;
