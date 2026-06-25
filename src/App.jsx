import Person from "./components/Person";
import Product from "./components/Product";

const App = () => {
  return (
    <>
      <Person name="Saim" age={21} />
      <Product name="Iphone 20" price="$1900" />
    </>
  );
};

export default App;