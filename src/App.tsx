import './App.css'
import Accordion from './components/Accordion'
import { tabContents } from './data/db'

function App() {

  return (
    <>
      <header className='app-header'>
        <h1>Softtek Technical Test</h1>
      </header>
      <section className='app-top-section'>
        <Accordion 
          title='Softtek Accordion Test'
          bgColor='orange'
          collapsed={false}
        >
          <>
            <p>This is a technical test using React components with compound pattern</p>
            <p>In here you can set any component or list of components or elements you need</p>
            <p>Autor: Carlos Acevedo</p>
          </>
        </Accordion>
      </section>
      <section className='app-bottom-section'>
        <aside className='app-accordion-aside'>
          {tabContents.map(tab => (
            <Accordion id={tab.id} title={tab.title} content={tab.content} />
          ))}
        </aside>
        <div className='app-other-container'>Free space to render anything</div>
      </section>
    </>
  )
}

export default App
