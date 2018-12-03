import * as React from "react";
import "./../assets/scss/RecipeCarousel.scss";
import { Link } from "react-router-dom";

const reactLogo = require("./../assets/img/react_logo.svg");

export interface RecipeCarouselProps {
}

export default class RecipeCarousel extends React.Component<RecipeCarouselProps, undefined> {

    recipes = [
        {
            id: 3,
            title: 'Smothered Chicken',
            imageUrl: 'https://static01.nyt.com/images/2014/09/22/multimedia/classic-smotheredchicken/classic-smotheredchicken-videoSixteenByNine310.jpg'
        },
        {
            id: 3,
            title: 'Spaghetti Aglio e Olio',
            imageUrl: 'https://s23209.pcdn.co/wp-content/uploads/2018/02/Aglio-e-OlioIMG_3194-360x360.jpg'
        },
        {
            id: 3,
            title: 'Zucchini with Shallots',
            imageUrl: 'https://static01.nyt.com/images/2017/06/30/dining/30COOKING-ZUCCHINI2/30COOKING-ZUCCHINI2-mediumThreeByTwo252.jpg'
        },
        {
            id: 3,
            title: 'Beef Stew',
            imageUrl: 'https://static01.nyt.com/images/2014/04/11/dining/beefstew/beefstew-mediumThreeByTwo252-v2.jpg'
        },
        {
            id: 3,
            title: 'Fettuccine with Asparagus',
            imageUrl: 'https://static01.nyt.com/images/2016/04/18/dining/18COOKING-FETTUCCINEASPARAGUS1/18COOKING-FETTUCCINEASPARAGUS1-mediumThreeByTwo252.jpg'
        }
    ]

    render() {
        return (
            <section>
                <h2>Times Classics</h2>

                <div className="row">
                    <div className="row__inner">
                        {shuffle(this.recipes).map((recipe: any) =>
                            <div className="tile">
                                <div className="tile__media">
                                    <img src={recipe.imageUrl} alt="" className="tile__img" />
                                </div>
                                <Link to={`/recipes/` + recipe.id} className="tile__details">
                                    <div className="tile__title">
                                        <Link to={`/recipes/` + recipe.id}>{recipe.title}</Link>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        );
    }
}

function shuffle(array: any[]) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  