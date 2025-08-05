import Article from "./components/Article";
import LoginForm from "./components/LoginForm";
import DarkText from "./components/DarkText";

const App = () => {
  return (
    <div className="bg-teal-100 min-h-screen flex justify-center items-center">
      <Article />
      <LoginForm />
      <DarkText />
    </div>
  );
};
export default App;
