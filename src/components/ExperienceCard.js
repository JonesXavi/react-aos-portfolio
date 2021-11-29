import React, {useState, createRef} from "react";
import ColorThief from "colorthief";

const ExperienceCard = ({cardInfo}) => {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  return (
    <div className="experience-card" data-aos={cardInfo.aos.type} data-aos-delay={cardInfo.aos.delay}>
      <div style={{background: rgb(colorArrays)}} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h2 className="experience-text-company">{cardInfo.company}</h2>
        </div>
        <img crossOrigin={"anonymous"} ref={imgRef} className="experience-roundedimg" src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5 className="experience-text-role">
          {cardInfo.role}
        </h5>
        <h5 className="experience-text-date">
          {cardInfo.duration}
        </h5>
        <p className="subTitle experience-text-desc">
          {cardInfo.desc}
        </p>
      </div>
    </div>
  );
}

export default ExperienceCard;
