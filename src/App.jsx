import Navbar from "./components/Navbar";
import Member from "./components/Member";
import Hero from "./components/Hero";
import NewArrival from "./components/NewArrival";

function App() {
  return (
    <>
      <Navbar />
      <main >
        <Member />
        <Hero />
        <NewArrival />
      </main>
    </>
  );
}

export default App;
