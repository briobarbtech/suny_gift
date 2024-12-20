import styled from "styled-components";

function Title({ title }) {
  return (
    <TitleStyled>
      <div className="box">
        <p>{title}</p>
      </div>
    </TitleStyled>
  );
}
const TitleStyled = styled.div`
.box{
padding-top: 30px}
  p {
    display: block;
    text-align: center;
    font-family: "8BIT WONDER", sans-serif;
    font-size: 3em;
    color:rgb(255, 161, 255);
  }
`;

export default Title;
