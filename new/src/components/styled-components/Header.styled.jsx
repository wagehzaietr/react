import styled from "styled-components";

export const Styledheader = styled.header`
  padding: 40px 0;
  margin-bottom: 30px;
`;

export const Logo = styled.img`
  width: 100px;


  @media (max-width: ${({theme}) => theme.mobile}){
    margin-bottom: 40px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: ${({theme}) => theme.mobile}){
    flex-direction: column;
  }


`;

export const Imagenew = styled.img`

width: 375px;
margin-left: 40px;
transition: .4s;
animation: moveup 1s alternate infinite;

@keyframes moveup {
  from{
    transform: translateY(7px);


  }
}


@media (max-width: ${({theme}) => theme.mobile}){
    margin: 40px 0 30px;
}


`;
