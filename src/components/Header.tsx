import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: transparent;
`;

const Logo = styled.h2`
  font-size: 1.5rem;
  span {
    font-family: 'Cursive';
    font-style: italic;
    color: black;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
  a {
    text-decoration: none;
    color: black;
    transition: color 0.3s;
    &:hover {
      color: #555;
    }
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    cursor: pointer;
    span {
      display: block;
      height: 3px;
      background-color: black;
      border-radius: 5px;
      transition: all 0.3s;
    }
  }
`;

export const Header = () => (
  <HeaderWrapper>
    <Logo>LOBIE<span>Design</span></Logo>
    <Nav>
      <a href="#apartamentos">IMÓVEIS COM DECORAÇÃO</a> |
      <a href="#vantagens">VANTAGENS</a> |
      <a href="#EXPERIMENTE">EXPERIMENTE</a> |
      <a href="#CONTATO">CONTATO</a> |
      <a href="#AREA DO CLIENTE">ÁREA DO CLIENTE</a>
    </Nav>
    <HamburgerMenu>
      <span></span>
      <span></span>
      <span></span>
    </HamburgerMenu>
  </HeaderWrapper>
);
