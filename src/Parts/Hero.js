import React from "react";
import ImagesHero from "assets/images/img-hero.jpg";
import ImagesHero_ from "assets/images/img-hero-frame.jpg";
import IconCities from "assets/icon/icon-cities.svg";
import IconTraveler from "assets/icon/icon-traveler.svg";
import IconTreasure from "assets/icon/icon-treasure.svg";

import Button from "components/Button/Button";

import numberFormat from "utils/formatNumber";

import Fade from "react-reveal/Fade";

export default function Hero(props) {
  const showMostPicked = () => {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  };

  return (
    <Fade>
      <section className="container pt-4">
        <div className="row align-item-center">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="font-weight-bold line-height-1 mb-3">
              
            </h1>
            <p className="mb-4 font-weight-light text-gray-500 w-75" style={{ lineHeight: "170%" }}>
              We provide what you need to enjoy your holiday with family. Time to make another memorable moments.
            </p>
            <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
              Show Me Now
            </Button>

            <div className="row" style={{ marginTop: 80, flexWrap: "nowrap" }}>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img width="36" height="36" src={IconTraveler} alt={`${props.data.travelers} Travelers`} />
                <h6 className="mt-3">
                  {numberFormat(props.data.travelers)} <span className="text-gray-500 font-weight-light">Travelers</span>
                </h6>
              </div>

              <div className="col-auto" style={{ marginRight: 35 }}>
                <img width="36" height="36" src={IconTreasure} alt={`${props.data.treasures} Treasures`} />
                <h6 className="mt-3">
                  {numberFormat(props.data.treasures)} <span className="text-gray-500 font-weight-light">Treasures</span>
                </h6>
              </div>

              <div className="col-auto" style={{ marginRight: 35 }}>
                <img width="36" height="36" src={IconCities} alt={`${props.data.cities} Cities`} />
                <h6 className="mt-3">
                  {numberFormat(props.data.cities)} <span className="text-gray-500 font-weight-light">Cities</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-6 pl-5 ">
            <div style={{ width: 520, height: 410 }}>
              <img src={ImagesHero} alt="Room with couches" className="img-fluid position-absolute" style={{ margin: "-30px 0 0 -30px", zIndex: 1 }} />
              <img src={ImagesHero_} alt="Room with couches frame" className="img-fluid position-absolute" style={{ margin: "0 -15px -15px 0" }} />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
