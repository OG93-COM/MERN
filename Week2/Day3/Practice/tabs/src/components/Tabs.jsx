import React from 'react'

const Tabs = (props) => {
    const { allTabs, currentTabIndex, setCurrentTabIndex } = props;

  // conditionally styling the tabs with classes in CSS
  const tabStyle = (index) => {
    if (index === currentTabIndex) {
      return "selectedTab";
    } else {
      return "inselectedTab";
    }
  }

  const setSelectedTab = (index) => {
    setCurrentTabIndex(index);
  }

  return (
    <div className="tabs">
        {
        allTabs.map((tabName, index) => (
          <div key={index} className={ tabStyle(index) } onClick={(e) => setSelectedTab(index) }>
            { tabName.label }
          </div>
        ))
      }

    </div>
    
  )
}

export default Tabs