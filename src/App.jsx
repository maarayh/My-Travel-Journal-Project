import './App.css'
import Navbar from './Card Component/Navbar'
// import About from './COOmponents/About'
// import Header from './COOmponents/Header'
//import './styleee.css'
import './styleeeee.css'
import Card from './Card Component/Card'
import data from './Card Component/CardData';
import Footer from './Card Component/Footer';



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
  //   <div className='border-box'>
  //     <div className='container'>
  //        <Header/>
  //        <About/>
  //   </div>
   
  //  </div>
 
  )
}

export default App
