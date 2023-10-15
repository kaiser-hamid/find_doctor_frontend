//css
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Rating({ data }) {
  return (
    <div
      style={{
        display: "inline-block",
        background: `linear-gradient(90deg, orange ${data}%, gray 0%)`,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        WebkitColor: "transparent",
      }}
    >
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
    </div>
  );
}
