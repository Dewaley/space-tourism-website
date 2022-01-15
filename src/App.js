import "tailwindcss/tailwind.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App" class="overflow-x-hidden w-screen bg-homeBackgroundMobile bg-cover bg-center sm:bg-homeBackgroundTablet md:bg-homeBackgroundDesktop h-screen flex flex-col justify-between">
      <Nav />
      <Home/>
    </div>
  );
}

export default App;
