import Footer from "./app/components/Footer"
import Header from "./app/components/Header"
import Section from "./app/components/Section"
import HighlightSection from "./app/components/HighlightSection"
import { useEffect, useState } from "react";
import { CategoryService } from "./app/services/category.service";
import { ICategory } from "./app/@libs/types";

function App() {

  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    CategoryService.getAll()
    .then(result => {
      console.log(result)
      setCategories(result.data)
    })
    .catch(error => {
      console.log(error)
    })
  })
  
  return (
    <div className="wrapper">
      <Header />
      <main
      style={{
        marginTop: '8rem'
      }}>
      <HighlightSection/>
      {
        categories.map(item => (
          <Section key={item.id} category={item}></Section> 
        ))
      }
      </main>
      <Footer />
    </div>
  )
}

export default App
