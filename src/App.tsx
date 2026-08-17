import { Categories } from "./components/Categories";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <Gallery />
      </main>
    </>
  );
}

export default App;
