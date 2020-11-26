import React from 'react';

function ChoosenInfo(props) {
    const {title, img, alt} = props.choosenContent;
    const image = img ? <img src={img} alt={alt} className="profile__info-img"/> : null;

    return (
            <div className="profile__info">
                <div>
                    <h2 className="profile__title">{title}</h2>
                    <ul className="profile__info-list">
                        <li className="info-list__item">1 lorem lorem lorem lorem</li>
                        <li className="info-list__item">2 lorem lorem lorem lorem</li>
                        <li className="info-list__item">3 lorem lorem lorem lorem</li>
                        <li className="info-list__item">4 lorem lorem lorem lorem</li>
                        <li className="info-list__item">5 lorem lorem lorem lorem</li>
                    </ul>
                </div>
                {image}
            </div>
    );
}

export default ChoosenInfo;