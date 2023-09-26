//css
import "@fortawesome/fontawesome-free/css/all.min.css";

export default ({ data }) => {
  return (
    <div
      style={{
        display: "inline-block",
        background: `linear-gradient(90deg, orange ${data}%, gray 0%)`,
        "background-clip": "text",
        "-webkit-background-clip": "text",
        color: "transparent",
        "-webkit-color": "transparent",
      }}
    >
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
    </div>
  );
};
