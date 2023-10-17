import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Drink() {
    const {id} = useParams();
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`

    const [drink, setDrink] = useState ({});
    useEffect(() => {
        async function getDrinks(){
            const response = await fetch(url)
            const json = await response.json()
            setDrink(json.drinks[0])
        }
        getDrinks();
    })


    return (
        <>
            <section className="hero is-link is-medium">
                <div className="hero-body">
                    <div className="is-flex is-justify-content-start">
                        <figure className="image is-drink mr-5">
                            <img src={drink.strDrinkThumb} alt="Placeholder image"/>
                        </figure>
                        <div className="info">
                            <h1 className="title">{drink.strDrink}</h1>
                            <h3 className="subtitle">{drink.strCategory}</h3>
                            <p className="content">{drink.strInstructions}</p>
                            <div className="card-content">
                                <Link to={`/`} className="button is-color">Regresar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Drink