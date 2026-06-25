import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";

function App(params)
{
  const myName="Saim"
  const multiply=(a,b)=>a*b
  const specialClass='simple-class'
  return <section>
    <p> 
      2 + 2 ={2+2}
      <h1>my name is {myName}</h1>
      <p>my Friends List: {["Ahmed","Zohaib","Fasseh"]}</p>
      <p>2*2={multiply(2,2)}</p>
      <p className={specialClass}>This is a special class</p>
    </p>
    <Greeting/>
    <ProductInfo/>
  </section>
}
export default App;