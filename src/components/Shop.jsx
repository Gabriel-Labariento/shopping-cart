import Nav from "./Nav"
import "../styles/Shop.css"
import Card from "./Card";
import { useState, useEffect } from "react"

export default function Shop(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="shop-container">
            <Nav></Nav>
            <main className="items-container">
                    {data && data.map(item => (
                    <Card key={item.id} title={item.title} imageUrl={item.image} description={item.description} price={item.price}  />
                ))} 
            </main>
            
        </div>
    )
}


