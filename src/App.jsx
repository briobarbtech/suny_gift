import Title from './components/Title'
import styled from "styled-components";
import Book from './components/Book';

function App() {
  return <AppStyled>
  <div className='body'>
  <Title title="Hola Suny"/>
  <Book/>
  </div>
  </AppStyled>
}
const AppStyled = styled.div`
.body {
height: 100vh;
background-color: #000;
}
`
export default App;

