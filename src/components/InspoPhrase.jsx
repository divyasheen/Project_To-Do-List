import { useState, useEffect } from "react";

function InspoPhrase() {
const [phrase, setPhrase] = useState({})

useEffect(()=>{
    fetch("https://dummyjson.com/quotes")
    .then(resp=>resp.json())
    .then(data=>setPhrase(data)

)
    .catch(error=>console.log(error.message))
}, [])





  return (
    <div>
<h2>Your inspiration for today is: </h2>
<ul>
  {phrase.quotes?.map((el) => (
    <li key={el.id}>{el.quote}</li>
  ))}
</ul>

    </div>
  )
}

export default InspoPhrase