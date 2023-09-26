import React from 'react';
import { memo } from 'react'

const App = () => {
  console.log('hahah')
  return (
    <div className="App">
      <h1>Heloo world</h1>
    </div>
  )
}

export default memo(App)