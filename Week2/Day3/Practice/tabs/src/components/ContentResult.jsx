import React from 'react'

const ContentResult = (props) => {
    const { allTabs, currentTabIndex } = props;

    return (
      <div className="contentResult">
        { allTabs[currentTabIndex].content }
      </div>
    )
}

export default ContentResult