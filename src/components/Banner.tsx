import styled from 'styled-components';
import { useRouter } from 'next/router';

const BannerWrapper = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const Slide = styled.div<{ $backgroundImage: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 50px;

  &.active {
    opacity: 1;
  }
`;

const ParallaxContent = styled.div`
  color: white;
  max-width: 600px;
  z-index: 1;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    margin: 20px 0;
    font-size: 1.2rem;
    max-width: 500px;
  }

  button {
    padding: 10px 20px;
    background-color: rgba(255, 255, 255, 0.342);
    color: black;
    border: solid black;
    border-radius: 30px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

export const Banner = () => {
    const router = useRouter();
  
    const handleClick = () => {
      router.push('/selecaoimoveis');
    };
  
    return (
      <BannerWrapper>
        <Slide $backgroundImage="/assets/banner.jpg"className="active">
          <ParallaxContent>
            <h1>Decore online. Alugue rápido.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <button onClick={handleClick}>EXPERIMENTE</button>
          </ParallaxContent>
        </Slide>
      </BannerWrapper>
    );
  };
