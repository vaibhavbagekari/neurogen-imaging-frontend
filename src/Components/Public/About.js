import React from 'react'
import { Link } from 'react-router-dom'
import { SIGNUP } from '../../Constants/Routes'

function About() {
  return (
    <>
    <div className='h-16'></div>
    <header class=" dark:text-white p-5">
        <h1 class="text-3xl font-bold">NeuroGen Imaging</h1>
        <p class="mt-2">Harnessing the power of Generative Adversarial Networks (GANs) to create stunning images from prompts.</p>
    </header>

    <main class="container mx-auto mt-10 p-5">
        <section class="dark:text-primary-dark p-6">
            <h2 class="text-2xl font-semibold">About Our Product</h2>
            <p class="mt-4">
                NeuroGen Imaging utilizes advanced Generative Adversarial Networks (GANs) to generate high-quality images based on user-provided prompts. Whether you're an artist seeking inspiration, a researcher needing visual data, or simply curious about AI-generated art, NeuroGen Imaging is designed to meet your creative needs.
            </p>
        </section>

        <section class="mt-8 dark:text-primary-dark">
            <h2 class="text-2xl font-semibold">Features</h2>
            <ul class="list-disc list-inside mt-4">
                <li>Generate unique images based on any textual prompt.</li>
                <li>High-resolution outputs suitable for various applications.</li>
                <li>User-friendly interface for seamless interaction.</li>
                <li>Regular updates with new features and improvements.</li>
            </ul>
        </section>

        <section class="mt-8 dark:text-primary-dark">
            <h2 class="text-2xl font-semibold">Get Started</h2>
            <p class="mt-4">
                Ready to explore the creative possibilities with NeuroGen Imaging? Join us and start generating stunning images today!
            </p>
            <Link to={SIGNUP} class="mt-4 inline-block bg-primary-light dark:text-white px-4 py-2 rounded-lg hover:shadow-md shadow-gray-300 transition duration-300">Try It Now</Link>
        </section>
    </main>
    </>
  )
}

export default About
