import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App