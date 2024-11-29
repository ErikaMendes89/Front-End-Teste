import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';



type Unidade = {
  id: string;
  uni_numero: string;
};

type Apartment = {
  id: number;
  nome: string;
  emp_name: string;
  unidade: string;
};

const SelecaoImoveisWrapper = styled.main`
  text-align: center;
  padding: 60px 20px;
`;

const Title = styled.h1`
  font-family: 'Cursive', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 40px;
`;

const SelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectionBox = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 1.1rem;
  margin-bottom: 8px;
`;

const Select = styled.select`
  width: 300px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
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
`;

export default function SelecaoImoveis() {
  const [apartment, setApartment] = useState<Apartment[]>([]);
  const [selectedImovel, setSelectedImovel] = useState('');
  const [unidades, setUnidades] = useState<Unidade[]>([]);
  const [selectedUnidade, setSelectedUnidade] = useState('');
  const router = useRouter();

  useEffect(() => {
    fetch('http://127.0.0.1:8000/empreendimentos/')
      .then((response) => response.json())
      .then((data) => {
        setApartment(data); 
      })
      .catch((error) => console.error('Erro ao carregar empreendimentos', error));
  }, []);


  const handleImovelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const empreendimentoId = e.target.value;
    setSelectedImovel(empreendimentoId);
  
    fetch(`http://127.0.0.1:8000/empreendimentos/${empreendimentoId}/unidades/`)
      .then((response) => response.json())
      .then((data) => {
        setUnidades(data); // Atualiza a lista de unidades.
      })
      .catch((error) => console.error('Erro ao carregar unidades', error));
  
    setSelectedUnidade('');
  };
  


  const handleSubmit = () => {
    if (selectedImovel && selectedUnidade) {
      router.push({
        pathname: `/imovel/${selectedImovel}`,
        query: { unidadeId: selectedUnidade },
      });
      alert(`Imóvel: ${selectedImovel}, Unidade: ${selectedUnidade}`);
    } else {
      alert('Por favor, selecione um imóvel e uma unidade.');
    }
  };

  return (
    <SelecaoImoveisWrapper>
      <Title>Imóveis com decoração</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Description>

      <SelectionContainer>
      <SelectionBox>
          <Label htmlFor="imovel">Escolha um imóvel</Label>
          <Select id="imovel" name="imovel" onChange={handleImovelChange} value={selectedImovel}>
            <option value="">Lista dos empreendimentos</option>
            {apartment.map((apto) => (
              <option key={apto.id} value={apto.id}>
                {apto.emp_name}
              </option>
            ))}
          </Select>
        </SelectionBox>

       
        {selectedImovel && (
          <SelectionBox>
            <Label htmlFor="unidade">Qual unidade você quer decorar?</Label>
            <Select id="unidade" name="unidade" onChange={(e) => setSelectedUnidade(e.target.value)} value={selectedUnidade}>
              <option value="">Lista das unidades</option>
              {unidades.map((unidade) => (
                <option key={unidade.id} value={unidade.id}>
                  {unidade.uni_numero}
                </option>
              ))}
            </Select>
          </SelectionBox>
        )}

        <Button onClick={handleSubmit}>SELECIONAR</Button>
      </SelectionContainer>
    </SelecaoImoveisWrapper>
  );
}
