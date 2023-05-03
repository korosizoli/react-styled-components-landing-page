import GlobalStyles from "./GlobalStyles"
import Theme from "./Theme"
import About from "./components/About/About"
import Home from "./components/Home/Home"
import Services from "./components/Services/Services"
import ImageSlider from "./components/Slider/ImageSlider"
import { ImageSliderItems } from "./Data"
import Navbar from "./components/navbar/Navbar"
import Products from "./components/Products/Products"
import Blog from "./components/Blog/Blog"
import Footer from "./components/Footer/Footer"



function App() {
  return (
    <>
    <GlobalStyles />
    <Theme>
      <Navbar />
      <Home />
      <About />
      <Services />
      <ImageSlider slides={ImageSliderItems}/>
      <Products />
      <Blog />
      <Footer />
    </Theme>
    </>
  )
}

export default App
