import { useState, useEffect } from "react"
import axios from "axios"
import '../App.css'
import Naav from "./navbar"
import { Button, Carousel } from 'react-bootstrap';
function Shopnew(){
    const [data,setData] = useState([])
    
  const [item,setItem] = useState('')
    useEffect(()=>{
      console.log(item)
      axios.get('http://localhost:5288/getallproduts').then((res)=>{
        setData(res.data)
      })
    },[])
    const handleSubmit = async (e) =>{
      e.preventDefault()
      await axios.post('http://localhost:5288/getproductbyid',{item})
        .then((data)=>{
          console.log(data)
          setData(data.data)
        })
        .catch((err)=>{
          console.log(err)
        })
    }
    return(
        <>
        
            <Naav />
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="wp1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="wp7.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="wp3.jpg"
          alt="Third slide"
        />      </Carousel.Item>
    </Carousel>
    <br></br>
    <h1 className="App">Latest Anime</h1>
       <form onSubmit={handleSubmit} className="search">
       <input
              type="text"
              placeholder="Search"
              className=" m-lg-4"
              onChange={(e)=>{setItem(e.target.value)} }
            />
       </form>
            <div className="products-list">
            {
              data.map((ele,i)=>{
                return (
                  <div className="card1" key={i}>
                    <img src={`http://localhost:5288/images/${ele.productpic}`} alt="" />
                    <p>{ele.title}</p>
                    <p>{ele.description}</p>
                    <p>{ele.category}</p>
                    <Button href="https://aniwatch.to/watch/one-piece-film-red-18236?ep=96071">Watch Now</Button>
                  </div>
                )
            })
          }




          
          </div>
            
        </>
    )
}
export default Shopnew