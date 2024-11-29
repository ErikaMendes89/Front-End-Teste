import styled from 'styled-components';
import Image from 'next/image';

const FooterWrapper = styled.footer`
  background-color: #f2f2f2;
  padding: 40px 20px;
  color: black;
  font-family: Arial, sans-serif;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 20px;
`;

const FooterColumn = styled.div`
  h4 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      margin-bottom: 8px;
      a {
        text-decoration: none;
        color: black;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const SocialIcons = styled.div`
  a {
    margin-right: 15px;
    img {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Footer = () => (
  <FooterWrapper>
    <FooterContent>
      <div>
        <h3>LOBIE<span>Design</span></h3>
      </div>
      <FooterColumn>
        <h4>Lobie Design</h4>
        <ul>
          <li><a href="#">Imóveis com Decoração</a></li>
          <li><a href="#">Vantagens</a></li>
          <li><a href ="#">Experimente</a></li>
          <li><a href ="#">Contato</a></li>
          <li><a href="#">Área do Cliente</a></li>
        </ul>
      </FooterColumn>
      <div>
        <p>Siga-nos</p>
        <SocialIcons>
          <a href="https://facebook.com" aria-label="Visit our Facebook page">
          <Image src="/assets/logo-facebook.png" alt="Facebook" width={32} height={32}/></a>
          <a href="https://instagram.com" aria-label="Visit our Instagram page">
          <Image src="/assets/logo-instagram.png" alt="Instagram" width={32} height={32} /></a>
        </SocialIcons>
      </div>
    </FooterContent>
    <div>&copy; 2024 Todos os direitos reservados</div>
  </FooterWrapper>
);
