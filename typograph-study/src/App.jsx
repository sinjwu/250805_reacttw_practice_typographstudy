/* import Article from "./components/Article";
import LoginForm from "./components/LoginForm"; */
import DarkText from "./components/DarkText";
import DarkModeToggle from "./components/DarkModeToggle";

const App = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex justify-center items-center">
      <DarkText />
      <DarkModeToggle />
    </div>
  );
};
export default App;
