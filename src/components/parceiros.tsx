import styled from 'styled-components';
import Image from 'next/image';

const ParceirosWrapper = styled.section`
  padding: 50px 0;
  background-color: #f7f7f7;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 40px;
`;

const ParceirosCarousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CarouselButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.144);
  border: 2px solid black;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const ParceirosLogos = styled.div`
  display: flex;
  overflow: hidden;
  margin: 0 50px;
  max-width: 100%;
  height: 200px;
`;

const LogoItem = styled.div`
  background-color: #f3f0f0;
  border-radius: 20px;
  width: 150px;
  height: 150px;
  margin: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 10px 10px 20px rgba(248, 247, 247, 0.705), -10px -10px 20px rgba(255, 255, 255, 0.7);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 5px 5px 15px rgba(109, 107, 107, 0.3), -5px -5px 15px rgba(173, 169, 169, 0.9);
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 20%;
  }

  p {
    margin-top: 10px;
    font-size: 1rem;
    font-weight: bold;
    color: #555;
  }
`;

export const Parceiros = () => {
  return (
    <ParceirosWrapper id="parceiros">
      <Title>Parceiros da Lobbie Design</Title>
      <ParceirosCarousel>
        <CarouselButton className="prev-btn">‹</CarouselButton>
        <ParceirosLogos>
          <LogoItem>
            <Image src="/assets/LOBIELOGO.PNG" alt="Parceiro 1" width={50} height={50}/>
            <p>Nome</p>
          </LogoItem>
          <LogoItem>
            <Image src="/assets/LOGO.PNG" alt="Parceiro 2"  width={50} height={50}/>
            <p>Nome</p>
          </LogoItem>
          <LogoItem>
            <Image src="/assets/LOGO.PNG" alt="Parceiro 3"  width={50} height={50} />
            <p>Nome</p>
          </LogoItem>
          <LogoItem>
            <Image src="/assets/LOGO.PNG" alt="Parceiro 4"  width={50} height={50}/>
            <p>Nome</p>
          </LogoItem>
          <LogoItem>
            <Image src="/assets/LOGO.PNG" alt="Parceiro 5"  width={50} height={50} />
            <p>Nome</p>
          </LogoItem>
        </ParceirosLogos>
        <CarouselButton className="next-btn">›</CarouselButton>
      </ParceirosCarousel>
    </ParceirosWrapper>
  );
};
