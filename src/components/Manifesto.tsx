import styled from 'styled-components';

const ManifestoWrapper = styled.section`
  background-color: #d3cfaf;
  padding: 50px;
  text-align: center;
  height: 40vh;
`;

const ManifestoTitle = styled.h2`
  font-size: 2rem;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const ManifestoQuote = styled.blockquote`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  font-style: italic;
  color: #777;
  margin: 0 auto;
  max-width: 80%;
  line-height: 1.6;
  position: relative;
`;

export const Manifesto = () => (
  <ManifestoWrapper id="manifesto">
    <ManifestoTitle>O manifesto</ManifestoTitle>
    <ManifestoQuote>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...`
    </ManifestoQuote>
  </ManifestoWrapper>
);
