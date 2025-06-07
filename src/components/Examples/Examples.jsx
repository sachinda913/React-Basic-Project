import TabButton from "../Button/TabButton";
import {useState} from "react";
import {EXAMPLES} from "./dataExample";
import Section from "../Section";
import Tabs from "../Tabs";

export default function Examples() {

    const [selectedTopic,setSelectedTopic] = useState();
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
    function handleClick(selectedButton){
        setSelectedTopic(selectedButton);
    }

    return(
        <Section title="Examples" id="examples">
            <Tabs
                buttons={
                <>
                <TabButton isSelected={selectedTopic === 'components'}
                           onSelect={() => handleClick('components')} label='Components'/>
                <TabButton isSelected={selectedTopic === 'jsx'}
                           onSelect={() => handleClick('jsx')} label='JSX' />
                <TabButton isSelected={selectedTopic === 'props'}
                           onSelect={() => handleClick('props')} label='Props' />
                <TabButton isSelected={selectedTopic === 'state'}
                           onSelect={() => handleClick('state')} label='State' />
                </>
            }>
                {tabContent}
            </Tabs>
        </Section>
    );
}