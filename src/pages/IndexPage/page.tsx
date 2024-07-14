import { useEffect, useState } from "react"
import { Pizza } from "@/constants/interfaces";
import './styles.css';
const BASE_URL = 'https://shift-backend.onrender.com';

export const IndexPage = () => {
    const [pizzas, getPizzas] = useState<Pizza[]>([]);

    useEffect (() => {
      fetch(BASE_URL + '/pizza/catalog')
        .then(res => res.json())
        .then(data => {
          getPizzas(data.catalog)
        });
    }, [])
    return (
        <div className="pizza__list">
          {pizzas.map(pizza =>
          <div key={pizza.id} className="pizza__card">
            <img src={BASE_URL + pizza.img} alt={pizza.name} height={100} width={100} />
            <h2>{pizza.name}</h2>
            <div>{pizza.description}</div>
          </div>)}
        </div>
    )
}