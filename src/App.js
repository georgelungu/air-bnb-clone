import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import data from './data'


import './App.css';
import './Components/Hero.css'
import './Components/Navbar.css'
import './Components/Card.css'

function App() 
{
  const cards = data.map(item => 
  <Card
    key={item.id} 
    img={item.coverImg}
    id={item.id} 
    rating={item.stats.rating}
    reviewCount={item.stats.reviewCount}
    location={item.location}
    title={item.title}
    price={item.price}
    openSpots = {item.openSpots}
  />)

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className='cards-wrapper'>
        {cards}
      </div>
    </div>
  );
}

export default App;
