import * as React from "react";
import "./../assets/scss/RecipeCarousel.scss";
import { Link } from "react-router-dom";

const reactLogo = require("./../assets/img/react_logo.svg");

export interface RecipeCarouselProps {
}

export default class RecipeCarousel extends React.Component<RecipeCarouselProps, undefined> {
    render() {
        return (
            <section>
                <h2>Times Classics</h2>

                <div className="row">
                    <div className="row__inner">
                        <div className="tile">
                            <div className="tile__media">
                            <img className="tile__img" src="https://static01.nyt.com/images/2014/09/22/multimedia/classic-smotheredchicken/classic-smotheredchicken-videoSixteenByNine310.jpg" alt=""  />
                            </div>
                            <div className="tile__details">
                            <div className="tile__title">
                                <Link to={`/recipes/3`}>Smothered Chicken</Link>
                            </div>
                            </div>
                        </div>

                        <div className="tile">
                            <div className="tile__media">
                            <img className="tile__img" src="https://static01.nyt.com/images/2017/07/19/dining/19COOKING-CHICKEN2/19COOKING-CHICKEN2-mediumThreeByTwo252.jpg" alt=""  />
                            </div>
                            <div className="tile__details">
                            <div className="tile__title">
                                Chicken Marengo
                            </div>
                            </div>
                        </div>

                        <div className="tile">
                            <div className="tile__media">
                            <img className="tile__img" src="https://static01.nyt.com/images/2017/06/30/dining/30COOKING-ZUCCHINI2/30COOKING-ZUCCHINI2-mediumThreeByTwo252.jpg" alt=""  />
                            </div>
                            <div className="tile__details">
                            <div className="tile__title">
                                Zucchini with Shallots
                            </div>
                            </div>
                        </div>

                        <div className="tile">
                            <div className="tile__media">
                            <img className="tile__img" src="https://static01.nyt.com/images/2014/04/11/dining/beefstew/beefstew-mediumThreeByTwo252-v2.jpg" alt=""  />
                            </div>
                            <div className="tile__details">
                            <div className="tile__title">
                                Beef Stew
                            </div>
                            </div>
                        </div>

                        <div className="tile">
                            <div className="tile__media">
                            <img className="tile__img" src="https://static01.nyt.com/images/2016/04/18/dining/18COOKING-FETTUCCINEASPARAGUS1/18COOKING-FETTUCCINEASPARAGUS1-mediumThreeByTwo252.jpg" alt=""  />
                            </div>
                            <div className="tile__details">
                            <div className="tile__title">
                                Fettuccine with Asparagus
                            </div>
                            </div>
                        </div>

                        <div className="tile">
                            <div className="tile__media">
                            <img className="tile__img" src="https://static01.nyt.com/images/2014/04/08/dining/sobasalad/sobasalad-videoSixteenByNine310-v3.jpg  " alt=""  />
                            </div>
                            <div className="tile__details">
                            <div className="tile__title">
                                Soba Salad
                            </div>
                            </div>
                        </div>

                        <div className="tile">
                            <div className="tile__media">
                            <img className="tile__img" src="https://static01.nyt.com/images/2014/05/12/dining/Roast-Chicken-With-Cumin-Honey-And-Orange/Roast-Chicken-With-Cumin-Honey-And-Orange-videoSixteenByNine310.jpg" alt=""  />
                            </div>
                            <div className="tile__details">
                            <div className="tile__title">
                                Top Gear
                            </div>
                            </div>
                        </div>

                        <div className="tile">
                            <div className="tile__media">
                            <img className="tile__img" src="https://static01.nyt.com/images/2015/03/11/dining/11CLASSIC/11CLASSIC-videoSixteenByNine310.jpg" alt=""  />
                            </div>
                            <div className="tile__details">
                            <div className="tile__title">
                                Top Gear
                            </div>
                            </div>
                        </div>

                        <div className="tile">
                            <div className="tile__media">
                            <img className="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-9.jpg" alt=""  />
                            </div>
                            <div className="tile__details">
                            <div className="tile__title">
                                Top Gear
                            </div>
                            </div>
                        </div>

                        <div className="tile">
                            <div className="tile__media">
                            <img className="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-10.jpg" alt=""  />
                            </div>
                            <div className="tile__details">
                            <div className="tile__title">
                                Top Gear
                            </div>
                            </div>
                        </div>

                        <div className="tile">
                            <div className="tile__media">
                            <img className="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-11.jpg" alt=""  />
                            </div>
                            <div className="tile__details">
                            <div className="tile__title">
                                Top Gear
                            </div>
                            </div>
                        </div>

                        <div className="tile">
                            <div className="tile__media">
                            <img className="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-12.jpg" alt=""  />
                            </div>
                            <div className="tile__details">
                            <div className="tile__title">
                                Top Gear
                            </div>
                            </div>
                        </div>

                        <div className="tile">
                            <div className="tile__media">
                            <img className="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-13.jpg" alt=""  />
                            </div>
                            <div className="tile__details">
                            <div className="tile__title">
                                Top Gear
                            </div>
                            </div>
                        </div>

                        <div className="tile">
                            <div className="tile__media">
                            <img className="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-14.jpg" alt=""  />
                            </div>
                            <div className="tile__details">
                            <div className="tile__title">
                                Top Gear
                            </div>
                            </div>
                        </div>

                        <div className="tile">
                            <div className="tile__media">
                            <img className="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-15.jpg" alt=""  />
                            </div>
                            <div className="tile__details">
                            <div className="tile__title">
                                Top Gear
                            </div>
                            </div>
                        </div>

                        <div className="tile">
                            <div className="tile__media">
                            <img className="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-16.jpg" alt=""  />
                            </div>
                            <div className="tile__details">
                            <div className="tile__title">
                                Top Gear
                            </div>
                            </div>
                        </div>

                        <div className="tile">
                            <div className="tile__media">
                            <img className="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-17.jpg" alt=""  />
                            </div>
                            <div className="tile__details">
                            <div className="tile__title">
                                Top Gear
                            </div>
                            </div>
                        </div>

                        <div className="tile">
                            <div className="tile__media">
                            <img className="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-18.jpg" alt=""  />
                            </div>
                            <div className="tile__details">
                            <div className="tile__title">
                                Top Gear
                            </div>
                            </div>
                        </div>

                        <div className="tile">
                            <div className="tile__media">
                            <img className="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-19.jpg" alt=""  />
                            </div>
                            <div className="tile__details">
                            <div className="tile__title">
                                Top Gear
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
