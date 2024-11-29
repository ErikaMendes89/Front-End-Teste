import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useState, useEffect } from 'react';


// Estilos
const RelatorioWrapper = styled.main`
  text-align: center;
  padding: 60px 20px;
`;

const Titulo = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 40px;
`;

const Subtitulo = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
`;

const Imagem = styled.img`
  width: 300px;
  height: auto;
  border-radius: 20px;
`;

const TextoInfo = styled.div`
  max-width: 400px;
  text-align: left;

  h3 {
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    margin-bottom: 10px;
    color: #666;
  }
`;

const Linha = styled.hr`
  width: 80%;
  margin: 40px auto;
  border: 1px solid #ccc;
`;

const ContainerBotoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ContainerBotoesInferiores = styled.div`
  display: flex;
  gap: 20px;
`;

const Botao = styled.button`
  padding: 12px 60px;
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

  &.recomecar {
    margin-top: 20px;
    border-color: black;
    &:hover {
      background-color: black;
      color: white;
    }
  }

  &.criar-conta {
    margin-top: 20px;
    border-color: black;
    &:hover {
      background-color: black;
      color: white;
    }
  }

  &.imprimir {
    margin-top: 20px;
    border-color: black;
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;



export default function Confirmacao() {
  const router = useRouter();
  const { imovelNome, unidadeNumero, kitId, kitNome, kitDescricao, kitPreco } = router.query;
  const [unidadeData, setUnidadeData] = useState(null);

  useEffect(() => {
    console.log('Router query:', router.query); // Log para depuração

    if (router.query.unidadeId) {
      fetch(`http://127.0.0.1:8000/unidades/${router.query.unidadeId}/`)
        .then((response) => response.json())
        .then((data) => {
          setUnidadeData(data); // Armazena os dados da unidade no estado
          console.log('Unidade data:', data); // Log para depuração
        })
        .catch((error) => console.error('Erro ao buscar unidade:', error));
    }
  }, [router.query, router.query.unidadeId]);

  const handleCriarConta = () => {
    router.push({
      pathname: '/TelaCadastro',
      query: {
        imovelNome,
        unidadeNumero,
        kitId,
        kitNome,
        kitDescricao,
        kitPreco,
      },
    });
  };

  const handleReiniciarDecoracao = () => {
    router.push('/kit');
  };

  return (
    <RelatorioWrapper>
      <Titulo>Relatório das Escolhas</Titulo>

      {imovelNome && unidadeNumero && (
        <InfoContainer>
          <TextoInfo>
            <h3>Empreendimento: {imovelNome}</h3>
            <p>Unidade: {unidadeNumero || 'Unidade não selecionada'}</p>
          </TextoInfo>
        </InfoContainer>
      )}

      {kitNome && kitDescricao && (
        <InfoContainer>
          <TextoInfo>
            <h3>Kit Selecionado: {kitNome}</h3>
            <p>Descrição: {kitDescricao}</p>
            <p>Preço: {kitPreco}</p>
          </TextoInfo>
        </InfoContainer>
      )}

      <Linha />

      <Subtitulo>Valor Final e Condições de Pagamento</Subtitulo>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

      <ContainerBotoes>
        <Botao className="criar-conta" onClick={handleCriarConta}>
          Criar Minha Conta e Finalizar Decoração
        </Botao>
        <ContainerBotoesInferiores>
          <Botao className="recomecar" onClick={handleReiniciarDecoracao}>
            Reiniciar Decoração
          </Botao>
        </ContainerBotoesInferiores>
      </ContainerBotoes>
    </RelatorioWrapper>
  );
}

