import '@/styles/globals.css'
import { useEffect } from "react";
import Aos from "aos";

import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      duration: 500,
    });
  }, []);

  return <Component {...pageProps} />
}
