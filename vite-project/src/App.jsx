import React from "react"
import Navbar from "./components/navbar.jsx"
import Card from "./components/card.jsx"
import data from "./data.js"
import Hero from "./components/Hero.jsx"

console.log(data)

function App()
{
  // <Hero />
  const cards = data.map(item =>
  {
    return (
      <Card
        Key={item.id}
        {...item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list flex space-x-4 overflow-x-auto p-5">
        {cards}
      </section>
    </div>
  )
}
export default App
