import styled from "styled-components";

function Title({title}) {
    return <TitleStyled>
        <p>{title}</p>
  
        </TitleStyled>
  }
const TitleStyled = styled.div `
p {
    display: block;
    text-align: center;
    font-family: '8BIT WONDER', sans-serif;     
    font-size: 3em;            
    color:rgb(255, 154, 154);
}
`

export default Title;