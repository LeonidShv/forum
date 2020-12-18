import PropTypes from "prop-types";
import React from "react";

function ChoosenInfo(props) {
  const { choosenContent: { title, img, alt} } = props;
  const image = img ? (
    <img src={img} alt={alt} className="profile__info-img" />
  ) : null;

  return (
    <div className="profile__info">
      <div>
        <h2 className="profile__title">{title}</h2>
        <div className="profile__info-list">
          <p className="info-list__item">1 lorem lorem lorem lorem</p>
          <p className="info-list__item">1 lorem lorem lorem lorem</p>
          <p className="info-list__item">1 lorem lorem lorem lorem</p>
          <p className="info-list__item">1 lorem lorem lorem lorem</p>
          <p className="info-list__item">1 lorem lorem lorem lorem</p>
        </div>
      </div>
      {image}
    </div>
  );
}

ChoosenInfo.propTypes = {
  choosenContent: PropTypes.object,
  title: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string
};

export default ChoosenInfo;
