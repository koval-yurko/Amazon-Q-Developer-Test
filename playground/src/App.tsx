import React, { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { ComponentShowcase } from './components/ComponentShowcase'
import { Header } from './components/Header'
import { componentRegistry } from './data/componentRegistry'

function App() {
  const [selectedComponent, setSelectedComponent] = useState('Button')

  return (
    <div className="playground-container flex">
      <Sidebar
        components={componentRegistry}
        selectedComponent={selectedComponent}
        onSelectComponent={setSelectedComponent}
      />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="main-content">
          <ComponentShowcase
            component={componentRegistry.find(c => c.name === selectedComponent)}
          />
        </main>
      </div>
    </div>
  )
}

export default App