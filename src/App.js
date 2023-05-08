import './App.css';
import FrontPage from './Components/FrontPage';
import Empty from './Components/Empty';
import SecondPage from './Components/SecondPage';
import ContactPage from "./Components/ContactPage"
function App() {
  return (
  <div className='App'>
  <FrontPage/>
  <Empty/>
  <SecondPage/>
  
  <ContactPage/>

  </div>
  )
}

export default App;
