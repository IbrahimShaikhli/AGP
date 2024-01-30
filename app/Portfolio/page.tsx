import Footer from "../Sections/Footer"
import PortfolioLibrary from '@/app/Portfolio/PortfolioLib'
import NavBar from "../UI/Components/Navbar"


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:px-16 px-4 bg-white">
        <PortfolioLibrary/>
        <Footer/>
    </main>
  )
}
