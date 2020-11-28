import React from 'react';

function ChoosenInfo(props) {
    const {title, img, alt} = props.choosenContent;
    const image = img ? <img src={img} alt={alt} className="profile__info-img"/> : null;

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

export default ChoosenInfo;