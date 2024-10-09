import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import loader from '../../Assets/blocks-shuffle-3.svg'
import TypingCard from '../../Common/TypingCard'
import { student1, student2, student3 } from '../../Assets/Student'
import { space1, space2, space3 } from '../../Assets/Space'
import { envImg1, envImg2, envImg3 } from '../../Assets/Environment'

function Home() {
  const student = [
    loader, student1, loader, student2, loader, student3
  ]
  const space = [
    loader, space1, loader, space2, loader, space3
  ]
  const environment = [
    loader, envImg1, loader, envImg2, loader, envImg3
  ]
  return (
    <>

      <section className="h-[70vh] bg-cover bg-center  flex flex-col justify-center dark:text-white text-center">
        <div className="max-w-5xl shadow-neumorphism dark:shadow-neumorphismDark bg-white dark:bg-transparent p-9 rounded-xl mx-auto max-h-max">
          <h1 className="text-5xl font-bold mb-4">Discover the Power of AI</h1>
          <p className="text-xl mb-6">
            Experience cutting-edge technology that transforms how you interact with information.
          </p>
          <NavLink to="/signup" className="px-4 py-2 bg-gray-300 text-black font-semibold rounded-full  hover:bg-gray-200 transition duration-300">
            Learn More
          </NavLink>
        </div>
        {/* <TypingText text={"vaibhav"} css={""}/> */}
      </section>
      <div className='my-7 flex flex-wrap gap-2'>
        <TypingCard text={"Young student in a futuristic classroom, interacting with 3D holographic displays on a computer, surrounded by cool blue lighting and a tech-driven STEM learning environment."} para={"This image shows a young student in a futuristic learning environment, working on a computer with advanced holographic technology. The student is wearing glasses and interacting with a digital interface displaying floating 3D holograms, likely representing scientific models or robotics. The atmosphere is immersive, with cool blue lighting highlighting the high-tech setup, suggesting a focus on STEM education, coding, or digital innovation. The background features other students engaged in similar activities, indicating a collaborative, tech-driven learning space."} imgArray={student} imgChange={3000} pauseDuration={4000} />
        <TypingCard text={"A vibrant spiral galaxy with glowing red and orange core, swirling arms of blue and purple, and scattered stars in deep space."} para={"This image depicts a vibrant spiral galaxy, with its swirling arms extending into the deep, starry space. At its center is a glowing, intense core surrounded by red and orange hues, giving the appearance of a cosmic vortex. The outer regions display a mix of blues and purples, with distant stars scattered throughout the galaxy and the surrounding space. The image beautifully captures the dynamic and vast nature of a spiral galaxy in the universe."} imgArray={space} imgChange={4500} pauseDuration={5000} />
        <TypingCard text={"Futuristic eco-friendly scene with lush green trees, a glossy green protective bubble, smooth hills, and a minimalist design representing environmental preservation and harmony"} para={"This image illustrates a vibrant, eco-friendly theme with lush green trees and a clean, modern design. At the center is a large, glossy green bubble, symbolizing protection or environmental preservation. The bubble encases a natural landscape with stylized, fluffy trees and smooth terrain, reflecting a sense of sustainability, freshness, and harmony with nature. The image beautifully combines elements of nature with a futuristic touch, promoting the concept of environmental conservation."} imgArray={environment} imgChange={4000} pauseDuration={2000} />
      </div>
      
    </>

  )
}

export default Home
