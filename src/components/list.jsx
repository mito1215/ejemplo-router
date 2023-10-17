import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function List() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
    const [drinks, setDrink] = useState ([]);

    useEffect(() => {
        async function getDrinks(){
            const response = await fetch(url)
            const json = await response.json()
            setDrink(json.drinks)
        }
        getDrinks();
    }, [drinks])

    return (
        <>
            <h1 className="is-size-1 has-text-weight-semibold">Bebidas</h1>
            <div className="columns is-multiline">
                { drinks.map((drink) => (
                    <div key={drink.idDrink} className="column is-3">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-square">
                                    <img src={drink.strDrinkThumb} alt="Placeholder image"/>
                                </figure>
                            </div>
                        <div className="card-content">
                            <h2 className="mb-4 is-size-5 has-text-weight-semibold">{drink.strDrink}</h2>
                            <Link to={`/drink/${drink.idDrink}`} className="button is-link">Consultar</Link>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </>
    )
}

export default List