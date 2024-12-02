import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 40px 20px;
  min-height: 100vh;
`;

const Form = styled.form`
  text-align: center;
  width: 100%;
  max-width: 500px;
  padding: 20px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 12px;
  font-size: 1rem;
  width: 80%;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: background-color 0.3s, border-color 0.3s;

  &:focus {
    border-color: #000;
    outline: none;
    background-color: #f9f9f9;
  }
`;

const Button = styled.button`
  padding: 12px 30px;
  font-size: 1rem;
  color: black;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 30px;
`;

export default function CreateAccount() {
  const router = useRouter();
  //const{ imovelNome, kitNome, kitId, kitPreco, kitDescricao } = router.query;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    endereco: "",
    numero: "",
    complemento: "",
    UF: "",
    cidade: "",
    DDD: "",
    telefone: "",
    CPF: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const clienteData = {
      client_email: formData.email,
      client_name: formData.name,
      client_endereco: formData.endereco,
      client_numero: formData.numero,
      client_complemento: formData.complemento,
      client_Estado: formData.UF,
      client_cidade: formData.cidade,
      client_telefone: `${formData.DDD}-${formData.telefone}`,
      client_cpf: formData.CPF,
      imovelNome: router.query.imovelNome,
      unidadeNumero: router.query.unidadeNumero,
      kitId: router.query.kitId,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/registrar-cliente/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(clienteData),
      });
    
      console.log("Dados enviados:", clienteData);
    
      if (response.ok) {
        const data = await response.json();
        console.log("Dados retornados pela API:", data);
    
        alert(`Conta criada com sucesso! ID do contrato: ${data.contrato_id}`);
    
        // Redireciona para a página de contrato
        router.push(`http://127.0.0.1:8000/contrato/${data.contrato_id}/pdf`);
      } else {
        const errorData = await response.json();
        console.error("Erro ao registrar cliente:", errorData);
        alert(`Erro ao criar conta: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Erro na comunicação com a API:", error);
      alert("Ocorreu um erro inesperado. Por favor, tente novamente.");
    }
    

  
};
  

  return (
    <Container>
      <Title>Criar Minha Conta</Title>
      <Description>Preencha os dados abaixo para finalizar sua conta e contrato:</Description>
      <Form onSubmit={handleSubmit}>
        <Input id="name" type="text" placeholder="Nome Completo" value={formData.name} onChange={handleChange} required />
        <Input id="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <Input id="endereco" type="text" placeholder="Endereço" value={formData.endereco} onChange={handleChange} required />
        <Input id="numero" type="number" placeholder="Número" value={formData.numero} onChange={handleChange} required />
        <Input id="complemento" type="text" placeholder="Complemento" value={formData.complemento} onChange={handleChange} />
        <Input id="UF" type="text" placeholder="UF" value={formData.UF} onChange={handleChange} required />
        <Input id="cidade" type="text" placeholder="Cidade" value={formData.cidade} onChange={handleChange} required />
        <Input id="DDD" type="number" placeholder="DDD" value={formData.DDD} onChange={handleChange} required />
        <Input id="telefone" type="number" placeholder="Telefone" value={formData.telefone} onChange={handleChange} required />
        <Input id="CPF" type="number" placeholder="CPF" value={formData.CPF} onChange={handleChange} required />
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
}
