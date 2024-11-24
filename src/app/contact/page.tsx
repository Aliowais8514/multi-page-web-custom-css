import React from 'react'

const contact = () => {
  return (
    <div>
        <section className='contact-form'>
          <h2 className='fade-in'>Contact Us</h2>
          <form >
            <input type="text" placeholder='Your Name' required />
            <input type="email" placeholder='Your Email' required />
            <input type="text"  placeholder='Your Phone Number' required/>
            <textarea placeholder='Your Message...' rows={5} required></textarea>
            <button type='submit'>Send Message</button>
          </form>
        </section>
    </div>
  )
}

export default contact;