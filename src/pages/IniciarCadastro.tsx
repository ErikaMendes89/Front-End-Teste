import styled from "styled-components";
import { useRouter } from "next/router";

const Container = styled.div`
display : flex;
justify-content: center;
align-items: center;
flex-direction: column;
min-height: 100vh;
background: #ffff;
padding: 20px;
`
const Label = styled.label`
  display: block;
  font-size: 1.1rem;
  margin-bottom: 8px;
`
const Form = styled.form`
 text-align: center;
 padding: 60px 20px;
`

const Title = styled.h3`
  font-family: 'Cursive';
  font-size: 2.5rem;
  margin-bottom: 20px;
  gap: 5px;
`
const Input=styled.input`
 padding: 12px;
  font-size: 1rem;
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  
  &:focus {
    border-color: #333;
    outline: none;
    background-color: #f9f9f9;
  }
`
const Button = styled.button`
padding: 12px 30px;
font-size:1 rem;
color: black;
background-color: transparent;
border: 2px solid black;
border-radius: 50px;
cursor: pointer;
transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;

&:hover{
 background-color:Black;
 color: white;
 transform? scale(1.05);
}

&: active{
  transform:scale(0.98);
}
`


export default function CreateAcount(){
   const router = useRouter();

   const handleEnviar = ()=>{
      router.push('/TelaCadastro');
    };

    return(
       <Container>
       <Title>Criar conta</Title>
       <Form>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Digite seu email" aria-label="Digite seu email" required/>
        <Button className="enviar" onClick={handleEnviar}>Enviar</Button>
       </Form>
       </Container> 
    )
}