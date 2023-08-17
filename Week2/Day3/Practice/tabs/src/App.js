
import { useState } from 'react';
import './App.css';
import ContentResult from './components/ContentResult';
import Tabs from './components/Tabs';

function App() {

  const tabsArray = [
    { label: "Tab 1", content: "Tab 1 content is showing here" },
    { label: "Tab 2", content: "Tab 2 content is showing here" },
    { label: "Tab 3", content: "Tab 3 content is showing here" },
    { label: "Tab 4", content: "Tab 4 content is showing here" },
  ];

  const [ allTabs, setAllTabs ] = useState(tabsArray);
  
  const [ currentTabIndex, setCurrentTabIndex ] = useState(0);

  

  return (
    <div className="App mt-3">
      <h1>Hello TABS</h1>
      <Tabs 
        allTabs={ allTabs } 
        currentTabIndex={ currentTabIndex }
        setCurrentTabIndex={ setCurrentTabIndex } 
      />
      <ContentResult allTabs={ allTabs } currentTabIndex={ currentTabIndex } />


    </div>
  );
}

export default App;
