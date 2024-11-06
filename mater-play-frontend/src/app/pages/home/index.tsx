import Section from "../../components/Section";
import { useEffect, useState } from "react";
import { CategoryService } from "../../services/category.service";
import { ICategory } from "../../@libs/types";
import HighlightSection from "../../components/HighlightSection";


function Homepage(){

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
}, [])

return (
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
    )
}

export default Homepage;