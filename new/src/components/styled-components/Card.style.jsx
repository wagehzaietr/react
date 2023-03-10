import styled from "styled-components";

export const StyledCard = styled.div`
display: flex;
align-items: center;
background-color: #fff;
border-radius: 15px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
margin: 40px 0;
padding: 60px;
flex-wrap: wrap;
display: flex;
align-items: center;
justify-content: center;

img{
    width: 400px;
    object-fit: contain;
    display: flex;
    align-items: center;
    justify-content: center;

}
h2{
margin: 12px;
}

@media screen and (max-width: ${({theme}) => theme.mobile}) {
    img{
        background-size: cover;
        width: 250px;
}  
}


`;