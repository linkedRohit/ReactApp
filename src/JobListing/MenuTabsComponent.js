import React from 'react'
import TabPanel, { TabBody, TabStrip } from 'react-tab-panel'
import 'react-tab-panel/index.css'
import 'react-tab-panel/base.css'
import 'react-tab-panel/theme/default.css'

export default () => {
  return <TabPanel MinHeight="500px" tabAlign="start" transition="true" onActivate={(index) => console.log('Tab ' + index + ' was activated!')}>

  <TabBody style={{padding: 10}}>
  <div tabTitle="First tab">
    Lorem ipsum Nisi fugiat ut nulla consectetur reprehenderit.
  </div>
  <div tabTitle="Second tab">
    Two Lorem ipsum Nisi fugiat ut nulla consectetur reprehenderit.
  </div>
</TabBody>
  </TabPanel>
}
