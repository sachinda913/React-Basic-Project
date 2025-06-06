import {CORE_CONCEPTS} from "./data";
import {EXAMPLES} from "./dataExample";
import Header from './components/Header/Header';
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton";
import {useState} from 'react';

function App() {
    const [selectedTopic,setSelectedTopic] = useState();

    function handleClick(selectedButton){
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    }
    let tabContent = <p>Please select a topic.</p>
    if(selectedTopic){
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                      <code>{EXAMPLES[selectedTopic].code}</code>
                  </pre>
            </div>
        );
    }

  return (
    <div>
        <Header />
      <main>
          <section id="core-concepts">
              <h2>Core concepts</h2>
              <ul>
                  {CORE_CONCEPTS.map((item) => (
                      <CoreConcept key={item.title}{...item}/>))}
              </ul>
          </section>
          <section id="examples">
              <h2>Examples</h2>
              <menu>
                  <TabButton isSelected={selectedTopic === 'components'}
                             onSelect={() => handleClick('components')} label='Components'/>
                  <TabButton isSelected={selectedTopic === 'jsx'}
                             onSelect={() => handleClick('jsx')} label='JSX' />
                  <TabButton isSelected={selectedTopic === 'props'}
                             onSelect={() => handleClick('props')} label='Props' />
                  <TabButton isSelected={selectedTopic === 'state'}
                             onSelect={() => handleClick('state')} label='State' />
              </menu>
              {tabContent}
          </section>
      </main>
    </div>
  );
}

export default App;
