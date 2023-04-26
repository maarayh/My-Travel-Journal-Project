import './App.css'
import Navbar from './CardComponent/Navbar'
// import About from './COOmponents/About'
// import Header from './COOmponents/Header'
//import './styleee.css'
import './styleeeee.css'
import Card from './CardComponent/Card'
import data from './CardComponent/CardData';
import Footer from './CardComponent/Footer';



function App() {

      const cards = data.map(items=>{
        return (
        <Card
          key={items.id}
          card_img={items.card_img}
          title={items.title}
          description={items.description}
          location ={items.location}
          link={items.link}
          date={items.date}
        />
       ) })

   return (
    <div>
        <Navbar/>
        <section className='card_list'>
             {cards}
        </section>
        <Footer/>       
      
       
    </div>

 
  )
}

export default App
