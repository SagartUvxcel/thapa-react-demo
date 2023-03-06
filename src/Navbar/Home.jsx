import React from 'react';
import CommonSection from './CommonSection';
const imageSrc = "https://empoche.com/user/pages/05.help/03.getting-started/your-first-task/rocket-maker.png?g-e07b98a8 "
const Home = () => {

  return (
    <>
      <section className='mainSection'>
        <div className=''>
          <CommonSection
            pageName="Grow your business with"
            imageSrc={imageSrc}
            visit="/services"
            btName="Get Started"
          />
        </div>


      </section>

    </>
  )
}

export default Home