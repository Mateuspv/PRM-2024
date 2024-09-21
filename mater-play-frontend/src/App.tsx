import Footer from "./app/components/Footer"
import Header from "./app/components/Header"
import Section from "./app/components/Section"
import HighlightSection from "./app/components/HighlightSection"

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main
      style={{
        marginTop: '8rem'
      }}>
      <HighlightSection/>
        <Section
        title="Recomendado para Você"></Section>
        <Section 
        title="Para toda familia"></Section>
      </main>
      <Footer />
    </div>
  )
}

export default App
