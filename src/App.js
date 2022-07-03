import './App.css';
import Body from './components/Body';
import Card from './components/card';
import CardData from './components/carddata';
function App() {
  return (
  <>
  <Body/>
  <CardData/>
  <>
  <ul> 
    <li><Card teams=" IT TEAM"/></li>
    <li> <Card teams=" HR TEAM"/></li>
    <li><Card teams=" DG TEAM"/></li>
  </ul>
  </>
  
 </>
  );
}

export default App;
