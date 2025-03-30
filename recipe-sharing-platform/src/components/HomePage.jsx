import { useEffect,useState } from "react";

const HomePage = () =>{

  const [recipeList,setRecipe] = useState([]);
  
  useEffect(() => {
      fetch('./data.json')
      .then(response =>{
          if(!response.ok){
              throw new Error('Could not load data')
          } 
          return response.json();

      } )
      .then(data => setRecipe(data))
      .catch(error => console.log(error))

  },[]);

  return(
      <div>
        <h1 class='text-blue-500'>Recipe Sharing</h1>

        <div>

        {data.map(recipe => {

              <div key={recipe.id}>
                <p>Title:{recipe.title}</p>
                <img src={recipe.image}/>
                <p>Summary:{recipe.summary}</p>
              </div>
          })
          }
           
        </div>
  
      </div>
  );
}
export default HomePage;


