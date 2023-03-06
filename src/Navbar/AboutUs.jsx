import React from 'react';
import CommonSection from './CommonSection';
const imageSrc ="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*zJ6BlIllcCHK7htO9pknuQ.png";
const AboutUs = () => {
  return (
    <>
      <section className='mainSection'>
        <div className=''>
          <CommonSection
            pageName="Welcome to About Page"
            imageSrc={imageSrc}
            visit="/services"
            btName="Contact Here"
          />
        </div>


      </section>

    </>
  )
}

export default AboutUs