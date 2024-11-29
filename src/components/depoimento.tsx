import styled from 'styled-components';
import Image from 'next/image';

const ProdutoDetalhadoWrapper = styled.section`
  background-color: #fffefe;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const ProdutoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d3cfaf;
  border-radius: 50px 0 0 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 820px;
  height: 460px;
`;

const ProdutoInfo = styled.div`
  max-width: 40%;
  padding: 40px;
  background-color: #d3cfaf;
`;

const ProdutoImagem = styled.div`
  flex: 1;
  width: 80%;
  text-align: center;
`;

const ImagemTexto = styled.p`
  font-size: 0.8rem;
  color: #999;
  margin-top: 10px;
`;

export const ProdutoDetalhado = () => {
  return (
    <ProdutoDetalhadoWrapper id="produto-detalhado">
      <ProdutoContainer>
        <ProdutoInfo>
          <h2>Nota 100</h2>
          <h4>Be.in.Rio Tonelero</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </ProdutoInfo>
        <ProdutoImagem>
          <Image src="/assets/banner5.jpeg" alt="Imagem do produto" width={400} height={400}/>
          <ImagemTexto>Imagem do produto (não a unidade do Cliente)</ImagemTexto>
        </ProdutoImagem>
      </ProdutoContainer>
    </ProdutoDetalhadoWrapper>
  );
};
