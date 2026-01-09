import React from 'react'

function Footer() {
  return (
    <>
    <footer>
    <div className="p-[6%] bg-black">
      <div className="max-w-[1200px] m-auto df flex-col items-center ">
        <a href="#" className="flex items-center justify-center">
          <figure className="relative w-16 invert">
            <img src="./assets/letter-a.png" className="footer__logo--img" alt="" />
          </figure>
        </a>
        <div className="footer__copyright text-white mt-5 text-center">Copyright @2026 Tran Thanh An</div>
      </div>
    </div>
  </footer>
  </>
  )
}

export default Footer