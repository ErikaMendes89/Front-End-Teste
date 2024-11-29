import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Footer } from '../components/Footer';

interface Kit {
  id: number;
  kit_name: string;
  kit_image: string;
  valor: number;
  kit_descricao: string;
}

interface Unidade {
  id: string;
  uni_numero: string;
}

interface Apartment {
  id: number;
  emp_name: string;
  emp_endereco: string;
  unidades: Unidade[];
}

// Estilos
const KitSection = styled.section`
  text-align: center;
  padding: 40px 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 5px;
`;

const UnitInfo = styled.p`
  color: #666;
  font-size: 1rem;
  margin-bottom: 40px;
`;

const KitsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const KitCard = styled.div`
  background-color: #f5f5f5;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const KitImage = styled.div<{ $bgImage: string }>`
  background-size: cover;
  background-position: center;
  height: 150px;
  border-radius: 15px;
  margin-bottom: 20px;
  background-image: url(${(props) => props.$bgImage});
`;

const KitTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SelectButton = styled.button`
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

// Componente principal
export default function KitSelection() {
  const [kits, setKits] = useState<Kit[]>([]);
  const [apartment, setApartment] = useState<Apartment | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<Unidade | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { imovelId, unidadeId } = router.query;

   console.log(isLoading)
  // Busca os detalhes do imóvel e unidade escolhidos
  useEffect(() => {
    if (imovelId) {
      fetch(`http://127.0.0.1:8000/empreendimentos/${imovelId}/`)
        .then((response) => response.json())
        .then((data) => {
          setApartment(data);
          if (data.unidades && unidadeId) {
            const unit = data.unidades.find((u: Unidade) => u.id === unidadeId);
            setSelectedUnit(unit || null);
          }
        })
        .catch((error) => console.error('Erro ao carregar apartamentos:', error));
    }
  }, [imovelId, unidadeId]);

  // Busca os kits associados à unidade selecionada
  useEffect(() => {
    if (unidadeId) {
      setIsLoading(true);
      fetch(`http://127.0.0.1:8000/unidades/${unidadeId}/kits/`)
      .then(response => response.json())
      .then(data => {
        setKits(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Erro ao carregar kits:', error);
        setIsLoading(false);
      });
  }
  }, [unidadeId]);

  // Redireciona para a página de confirmação ao selecionar um kit
  const handleSelectKit = async (kitId: number) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/unidades/${unidadeId}/kits/`);
      const kits = await response.json();
      const kit = kits.find((k) => k.id === kitId);
  
      if (!kit) {
        alert('Erro: Kit não encontrado!');
        return;
      }
  
      router.push({
        pathname: '/confirmacao',
        query: {
          imovelNome: apartment?.emp_name,
          unidadeNumero: selectedUnit?.uni_numero || router.query.unidadeNumero,
          kitId: kit.id,
          kitNome: kit.kit_name,
          kitDescricao: kit.kit_descricao,
          kitPreco: `R$ ${kit.valor.toFixed(2)}`,
        },
      });
    } catch (error) {
      console.error('Erro ao buscar kits:', error);
      alert('Erro ao buscar kits. Por favor, tente novamente mais tarde.');
    }
  };
  
  console.log(router.query);
  return (
    <KitSection>
      <Title>Escolha o kit de decoração</Title>
      {apartment && selectedUnit && (
        <>
          <Subtitle>{apartment.emp_name}</Subtitle>
          <UnitInfo>
            Unidade {selectedUnit.uni_numero} - {apartment.emp_endereco}
          </UnitInfo>
        </>
      )}

<KitsContainer>
  {kits.map((kit) => (
    <KitCard key={kit.id}>
      <KitImage $bgImage={kit.kit_image || '/default-image.jpg'} />
      <KitTitle>{kit.kit_name}</KitTitle>
      <Price>R$ {kit.valor.toFixed(2)}</Price>
      <Description>{kit.kit_descricao}</Description>
      <SelectButton onClick={() => handleSelectKit(kit.id)}>
        Selecionar
      </SelectButton>
    </KitCard>
  ))}
</KitsContainer>
      <Footer />
    </KitSection>
  );
}

