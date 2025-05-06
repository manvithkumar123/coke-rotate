import React from 'react'
import "./home.css"

const Home = () => {
  return (
    <div className='coke_page'>
        <div className="coke_banner">
            <div className="coke_product">
            <div className="coke_soda" style={{ "--url": "url('../../../images/wrap.jpg')" }}></div>
            <div className="coke_soda" style={{ "--url": "url('../../../images/wrap2.jpg')"}}></div>
            </div>
            <div className="coke_description">
                <h1 style={{textAlign:"center"}} className='cola_thunder'>Cola Thunder</h1>
                <p className='cola_thunder_para'>
                  Cola Thunder is a refreshing cool drink that energizes your senses with every sip.
                  It's crafted for those who crave bold flavor and a fizzy thrill. Grab your bottle today and taste the thunder!
                  Whether you're chilling with friends or powering through a long day, Cola Thunder has your back.
                  With every gulp, feel the rush of bubbles that electrify your taste buds.
                  It's more than just a drink—it's an experience packed with energy and attitude.
                  Crafted from a unique blend of secret ingredients, it delivers maximum satisfaction.
                  Cola Thunder stands out with its bold design and unforgettable taste.
                  Crack open a bottle and dive into a storm of flavor that leaves you wanting more.
                  Perfectly balanced for any mood—be it a party, a break, or a celebration.
                  Enjoy the cool burst that redefines what a soft drink should be.
                  Trusted by thousands, loved by millions—Cola Thunder is here to shake things up.
                  So why wait? Unleash the thunder today and refresh your world!
                </p>
                <h1 style={{textAlign:"center"}} className='cola_diet'>Cola Diet</h1>
                <p className='cola_diet_para'>
                  Introducing Coke Diet – the perfect choice for those who love the classic cola taste but with zero sugar and fewer calories.
                  It's a lighter, refreshing alternative that doesn’t compromise on flavor. Whether you're watching your intake or just prefer a smoother sip,
                  Coke Diet delivers satisfaction without the guilt. Enjoy the same fizzy excitement with a healthier twist – because your taste buds deserve the best of both worlds.
                  <br /><br />
                  Coke Diet is carefully formulated to suit your active lifestyle. Whether you're hitting the gym, working late, or just unwinding at home,
                  this drink is the smart choice for modern individuals who care about their health without sacrificing the joy of indulgence.
                  Every can is a celebration of balance – the balance between taste and wellness, between tradition and innovation.
                  <br /><br />
                </p>
            </div>
           
        </div>
    </div>
  )
}

export default Home
