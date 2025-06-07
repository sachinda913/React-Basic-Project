import CoreConcepts from "./components/CoreConcept/CoreConcepts";
import Header from './components/Header/Header';
import Examples from "./components/Examples/Examples";

function App() {
  return (
    <>
        <Header/>
        <main>
            <CoreConcepts/>
          <Examples/>
      </main>
    </>
  );
}

export default App;
