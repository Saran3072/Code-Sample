import React from 'react'

const Head = () => {
  return (
    <>
        <section className='head'>
            <div className="container flexSB">
                <div className="logo">
                    <h1 style={{fontFamily: "sans-serif", fontWeight: "500"}}>Pragna Classes</h1>
                    <span style={{fontFamily: "sans-serif"}}>Tagline</span>
                </div>
                <div className="social">
                    <a href="https://www.facebook.com/" target=""><i className='fab fa-facebook-f icon'></i></a>
                    <a href="https://www.instagram.com/" target=""><i className='fab fa-instagram icon'></i></a>
                </div>
            </div>
        </section>
    </>
  )
}

export default Head
