import Info from './components/Info.jsx'
import About from './components/About.jsx'
import Interests from './components/Interests.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="w-4/5 max-w-7xl mx-auto bg-[#1a1b21] my-8 rounded-2xl
    text-white">
      <main className="">
        <Info />
        <About />
        <Interests />
        <Footer />
      </main>
    </div>
  )
}