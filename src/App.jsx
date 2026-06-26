import Greeting from "./components/Greeting";
import UserStatus from "./components/UserStatus";
import Weather from "./components/weather";

const App = () => {
  return (
    <>
      <Weather temperature={13} />
      <UserStatus loggedin={true} isAdmin={true} />
      <Greeting timeOfDay={"good morning"} />
    </>
  );
};

export default App;