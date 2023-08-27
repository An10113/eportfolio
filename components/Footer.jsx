import React from 'react'

function Footer() {
  return (
    <>
    <footer>
    <div class="p-[6%] bg-black">
      <div class="max-w-[1200px] m-auto df flex-col items-center ">
        <a href="#" class="flex items-center justify-center">
          <figure class="relative w-16 invert">
            <img src="./assets/letter-a.png" class="footer__logo--img" alt="" />
          </figure>
        </a>
        <div class="footer__copyright text-white mt-5 text-center">Copyright @2023 Tran Thanh An</div>
      </div>
    </div>
  </footer>
  </>
  )
}

export default Footer