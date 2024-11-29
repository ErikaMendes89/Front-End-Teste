import styled from 'styled-components';

const AdvantagesWrapper = styled.section`
  padding: 50px 20px;
  text-align: center;
  height: 30vh;
`;

const AdvantagesTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 40px;
`;

const AdvantagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const VideoCircular = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: #f0f0f0;
  position: relative;
  overflow: hidden;
  margin-right: 20px;
`;

const Video = styled.video`
  width: 400px;
  height: 400px;
  border-radius: 30%;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: #000;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 50%;
`;

const AdvantagesText = styled.div`
  max-width: 500px;
  text-align: left;
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
`;

export const Advantages = () => (
  <AdvantagesWrapper id="vantagens">
    <AdvantagesTitle>Porque a Lobie Design? As Vantagens.</AdvantagesTitle>
    <AdvantagesContainer>
      <VideoCircular>
        <Video src="" controls />
        <PlayButton>&#9658;</PlayButton>
      </VideoCircular>
      <AdvantagesText>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </AdvantagesText>
    </AdvantagesContainer>
  </AdvantagesWrapper>
);
