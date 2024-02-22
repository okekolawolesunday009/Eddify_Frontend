import styled from "styled-components";

export const ProfileWrapper =  styled.ol`

padding:0px;
// flex:0.1;
height: 100%;
// margin-top: -100px;
display: flex;
flex-direction: ${props => !props.column ? "column" : 'row'};
justify-content: space-around;
align-items: center;
// background-color:red;

@media screen and (max-width: 768px){
   
     

}




`;