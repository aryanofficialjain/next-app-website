import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <div>
        <h1>Our Teams</h1>
        <p>The ones who run this company</p>
      </div>
      <br />
      <div>
        
        <section>
          <Image src={'/1.jpg'} alt={'Teams'} width={300} height={300} />
          <div>
            <h1>John Doe</h1>
            <p>CEO & Founder</p>
            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <button>Contact</button>
          </div>
        </section>

        <section>
          <Image src={'/2.jpg'} alt={'Teams'} width={300} height={300} />
          <div>
            <h1>Anja Doe</h1>
            <p>Art Director</p>
            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <button>Contact</button>
          </div>
        </section>

        <section>
          <Image src={'/3.jpg'} alt={'Teams'} width={300} height={300} />
          <div>
            <h1>Mike Ross</h1>
            <p>Web Designer</p>
            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <button>Contact</button>
          </div>
        </section>

        <section>
          <Image src={'/4.jpg'} alt={'Teams'} width={300} height={300} />
          <div>
            <h1>Dan Star</h1>
            <p>Designer</p>
            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <button>Contact</button>
          </div>
        </section>

      </div>
    </div>
  )
}

export default page
