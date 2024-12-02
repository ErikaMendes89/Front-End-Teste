import styled from "styled-components";

const Title = styled.h1`
 font-size: 1.8rem;
 font-family: 'coursive';
 font-weight: 100;

`
const TelaProximosPassos = styled.main`
 padding: 40px;
 gap: 20px;
 color: black;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`


export default function TelaProximosPasso(){
return(
     <TelaProximosPassos>
        <Title>Próximos Passos</Title>
     </TelaProximosPassos>
)
}