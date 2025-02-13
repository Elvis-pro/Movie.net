export default function MovieDivs({ title, date, image }) {
  return (
    <div className="Grid-1">
      <div className="movie-box">
        {/* Debugging: Check if backgroundImage is applied */}
        <div
          className="custom-div"
          style={{
            backgroundImage: image ? `url(${image})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="tittle-div">
          <div className="T-div">INTERNATIONAL</div>
          <h2 className="M-tittle">{title}</h2>
          <p className="paragraph">...</p>
          <div className="blog-entry">
            <div className="msg">
              <span className="cf">comment off</span>
            </div>
            <div className="date">{date}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
