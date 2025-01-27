import React from 'react'
import "./index.css"
const pizzaData = [
{
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
},
{
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
},
{
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
},
{
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
},
{
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
},
{
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
},
];

function App() {
    return (
        <>
    <Header />
    <Menus />
    <Footer />
        </>
    )
}
function Header() {
    return (
        <header className='header'>
            <h1>Fast React Pizza Co.</h1>
        </header>
    )
}
function Menus() {
    
    return (
        <div className='container'>
            <div className="menu">
                <h2>OUR MENU</h2>
                <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious</p>
                <div className='pizzas'>
                {pizzaData.map((pizza) => (
                    <Pizza
                    className={pizza.soldOut ? "pizza sold-out" : "pizza"}
                    name={pizza.name}
                    ingredients={pizza.ingredients}
                    price={pizza.price}
                    photoName={pizza.photoName}
                    />
                ))}
                </div>
                <div className="order">
                    <p>we're open until 22:00, Come visit us or order online</p>
                    <button className='btn'>Order Now</button>
                </div>
            </div>
        </div>
    )
}
function Footer() {
    return (
        <div className='footer'>
        </div>
    )
}
interface pizzaProps{
    name: string,
    ingredients: string,
    price: number,
    photoName: string,
    className?: string
}
function Pizza({name, ingredients, price, photoName, className} : pizzaProps) {
    return (
        <div className={className}>
            <img alt={name} src={"../public/" + photoName} />
            <div>
                <h3>{name}</h3>
                <p>{ingredients}</p>
                <span>{price}</span>
            </div>
        </div>
    )
}
export default App;
