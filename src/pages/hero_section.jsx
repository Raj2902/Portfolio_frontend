import Button from "react-bootstrap/Button";
import profile_pic from "../images/DSC_3161.JPG";
function HeroSectionComponent() {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          textAlign: "left",
          marginLeft: "7.3%",
          textTransform: "capitalize",
          marginTop: "10%",
        }}
      >
        <p style={{ textTransform: "uppercase" }}>
          Hello there welcome to my site
        </p>
        <p style={{ fontSize: "xxx-large" }}>I'm Raj Agarwal</p>
        <p style={{ color: "rgb(255, 0, 254)", fontSize: "xxx-large" }}>
          A Mern stack web developer
        </p>
        <span className="tooltip-container">
          <Button
            style={{ textTransform: "uppercase", margin: "20px 20px 0px 0px" }}
            variant="outline-light"
          >
            See Portfolio
          </Button>
          <span className="tooltip-text">A indepth look at my portfolio</span>
        </span>
        <span className="tooltip-container">
          <Button
            style={{ textTransform: "uppercase", margin: "20px 20px 0px 0px" }}
            variant="outline-light"
          >
            Contact Me
          </Button>
          <span className="tooltip-text">Get in touch with me</span>
        </span>
      </div>
      <div
        className="tooltip-container"
        style={{ margin: "5% 0px 0px 12%", width: "20%" }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            padding: "2%",
            border: "5px solid rgb(255, 0, 254)",
          }}
          src={profile_pic}
          alt="profile_pic"
        />
        <span className="tooltip-text_img">
          Hi, there its Good to see you, Thanks for visting my Portfolio page{" "}
        </span>
      </div>
    </div>
  );
}
export default HeroSectionComponent;
