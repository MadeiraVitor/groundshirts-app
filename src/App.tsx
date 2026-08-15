import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
      </main>
    </>
  );
}

export default App;
