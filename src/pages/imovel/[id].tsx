import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

// Styled components
const ProdutoWrapper = styled.main`
  text-align: center;
  padding: 60px 20px;
`;

const Imagem = styled.img`
  width: 300px;
  height: auto;
  border-radius: 20px;
  margin-bottom: 20px;
`;

const Descricao = styled.p`
  font-size: 1.2rem;
  margin: 10px 0;
  font-weight: bold;
`;

const UnidadeWrapper = styled.div`
  margin-bottom: 20px;
`;

const UnidadeTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const UnidadeList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const UnidadeItem = styled.li`
  margin: 5px 0;
`;

const Button = styled.button`
  padding: 12px 30px;
  font-size: 1rem;
  color: black;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: black;
    color: white;
  }

  &.reiniciar {
    margin-top: 20px;
    background-color: #ccc;
    &:hover {
      background-color: #bbb;
    }
  }
`;

export default function ImovelSelecionado() {
  const router = useRouter();
  const { id, unidadeId } = router.query;

  const [empreendimento, setEmpreendimento] = useState<{
    id: number;
    emp_name: string;
    emp_endereco: string;
  } | null>(null);

  const [unidadeSelecionada, setUnidadeSelecionada] = useState<{
    id: number;
    uni_numero: number;
    uni_image: string;
  } | null>(null);

  // Busca o empreendimento selecionado
  useEffect(() => {
    if (id) {
      fetch(`http://127.0.0.1:8000/empreendimentos/${id}/`)
        .then((response) => response.json())
        .then((data) => {
          setEmpreendimento(data);
        })
        .catch((error) =>
          console.error('Erro ao carregar empreendimento:', error)
        );
    }
  }, [id]);

  // Busca a unidade selecionada
  useEffect(() => {
    if (id && unidadeId) {
      fetch(`http://127.0.0.1:8000/empreendimentos/${id}/unidades/`)
        .then((response) => response.json())
        .then((data) => {
          const unidade = data.find((u: { id: number }) => u.id === parseInt(unidadeId as string));          setUnidadeSelecionada(unidade || null);
        })
        .catch((error) =>
          console.error('Erro ao carregar unidade:', error)
        );
    }
  }, [id, unidadeId]);

  if (!empreendimento || !unidadeSelecionada) {
    return <p>Carregando os dados do imóvel...</p>;
  }

  const handleVoltar = () => {
    router.push('/selecaoimoveis');
  };

  const handleSelecionar = () => {
    router.push({
      pathname: '/kit',
      query: {
        imovelId: empreendimento.id,
        unidadeId: unidadeSelecionada.id,
        unidadeNumero: unidadeSelecionada.uni_numero,
      },
    });
  };

  return (
    <ProdutoWrapper>
      <h1>{empreendimento.emp_name}</h1>
      <Descricao>Endereço: {empreendimento.emp_endereco}</Descricao>

      <UnidadeWrapper>
        <UnidadeTitle>Unidade Selecionada:</UnidadeTitle>
        <UnidadeList>
          <UnidadeItem>
            Número: {unidadeSelecionada.uni_numero}
          </UnidadeItem>
          {unidadeSelecionada.uni_image && (
            <Imagem
              src={`http://127.0.0.1:8000/${unidadeSelecionada.uni_image}`}
              alt={`Imagem da unidade ${unidadeSelecionada.uni_numero}`}
            />
          )}
        </UnidadeList>
      </UnidadeWrapper>

      <Button className="selecionar" onClick={handleSelecionar}>
        SELECIONAR
      </Button>
      <Button className="reiniciar" onClick={handleVoltar}>
        Reiniciar Escolha
      </Button>
    </ProdutoWrapper>
  );
}

