import React, {useEffect} from 'react'
import './main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import image1 from '../../Assets/image1.jpeg'
import image2 from '../../Assets/image2.jpeg'
import image3 from '../../Assets/image3.jpeg'
import image4 from '../../Assets/image4.jpeg'
import image5 from '../../Assets/image5.jpeg'
import image6 from '../../Assets/image6.jpeg'
import image7 from '../../Assets/image7.jpeg'
import image8 from '../../Assets/image8.jpeg'
import image9 from '../../Assets/image9.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc:image1,
    desTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations to the world.This place is known for its luxurious stays and adventurous activities.'
  },
  
  {
    id:2,
    imgSrc:image2,
    desTitle: 'Aqua Haven',
    location: 'Blue Lagoon Oasis',
    grade: ' AQUASCAPE',
    fees: '$600',
    description: 'Dive into relaxation at our pristine swimming pool. Crystal-clear waters invite you to unwind and refresh in style. Whether you are seeking a vigorous swim or a tranquil soak, our pool offers the perfect aquatic escape. Immerse yourself in luxury and bask in the sun-drenched paradise.'
  },

  {
    id:3,
    imgSrc:image3,
    desTitle: 'Elevate',
    location: 'Switzerland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'A testament of human engineering amidst nature grandeur, our mountain bridge stands as a harmonious link between rugged peaks. Traverse this architectural marvel and be awed by breathtaking vistas, where adventure meets tranquility.'
  },

  {
    id:4,
    imgSrc:image4,
    desTitle: 'Sunset Bliss Shore',
    location: 'Sunshine Cove',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'Our pristine beach boasts sugar-white sands and turquoise waters. Lounge beneath palm fronds, indulge in thrilling water sports, or simply bask in the sun warm embrace. Your idyllic escape awaits.'
  },

  {
    id:5,
    imgSrc:image5,
    desTitle: 'Burj khalifa',
    location: 'Dubai',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: 'Iconic marvel of modern architecture, Burj Khalifa pierces Dubai skyline at 828m. A gleaming testament to human ingenuity, it offers breathtaking views from its observation decks, a fusion of luxury and engineering.'
  },

  {
    id:6,
    imgSrc:image6,
    desTitle: 'Trailblaze',
    location: 'Thrilltopia',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description: 'The ultimate adventure companion, our car blends rugged durability with cutting-edge tech. Tackle challenging terrain effortlessly while enjoying premium comfort. Your gateway to thrill, designed for those who seek the extraordinary journey.'
  },

  {
    id:7,
    imgSrc:image7,
    desTitle: 'Skyward Sovereign',
    location: 'United Kingdom',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: 'A tower is a tall, vertical structure built for various purposes such as communication, observation, or defense. Typically composed of multiple levels, it offers elevation for better visibility and serves functional or symbolic roles in urban landscapes or natural surroundings.'
  },

  {
    id:8,
    imgSrc:image8,
    desTitle: 'Maldives',
    location: ' Indian Ocean',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'The Maldives, an exquisite tropical paradise in the Indian Ocean, boasts stunning turquoise waters, pristine white-sand beaches, and vibrant coral reefs. Its overwater bungalows, diverse marine life, and tranquil ambiance make it a sought-after destination for luxury vacations and unparalleled relaxation.'
  },
  
  {
    id:9,
    imgSrc:image9,
    desTitle: 'Himalayas',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'The Himalayas, Earth highest mountain range, span across Asia, featuring awe inspiring peaks like Mount Everest. With diverse ecosystems, cultures, and spiritual significance, they captivate adventurers, researchers, and seekers alike, offering a majestic and profound experience that words struggle to encompass.'
  },
]

const Main = () => {

  useEffect(() =>{
    Aos.init({duration: 2000})
  },[])

  return (
    <section className="main container section">

      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

        <div className="secContent grid">
          {
            Data.map(({id,imgSrc,desTitle,location,grade,fees,description})=> {
                return(
                  <div key={id} data-aos="fade-up" className="singleDestination">
                    
                    <div className="imageDiv">
                      <img src={imgSrc} alt={desTitle} />
                    </div>

                    <div className="cardInfo">
                      <h4 className="desTitle">{desTitle}</h4>
                      <span className="continent flex">
                        <HiOutlineLocationMarker className="icon" />
                        <span className="name">{location}</span>
                      </span>

                      <div className="fees flex">
                        <div className="grade">
                          <span>{grade}<small>+1</small></span>
                        </div>
                        <div className="price">
                        <h5>{fees}</h5>
                        </div>
                      </div>

                      <div className="desc">
                        <p>{description}</p>
                      </div>

                      <button className="btn flex">
                        DETAILS <HiOutlineClipboardCheck className="icon" />
                      </button>
                    </div>
                  </div>
                )
            })
          }
        </div>

    </section>
  )
}

export default Main