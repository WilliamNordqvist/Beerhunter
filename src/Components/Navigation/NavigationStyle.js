import Styled from 'styled-components';


export const Main = Styled.nav`
display:flex;
flex-direction:row;
background-color:var(--color-r);
height:10vh;
position:fixed;
bottom:0;
left:0;
right:0;
justify-content:center;
align-items:center;

ul{
  margin:0;
  padding:0;
    
    li{
        margin:15px 20px;
        display: inline;
        color:white;
        text-decoration:none;
          
        i{
            font-size:30px;
            color:white;  
            &:hover{
                color: var(--color-y);
            } 
            &:active{
                color:Grey;
            }
            @media (max-width:360px) {
                font-size: 25px;
        }   
         }
          
         @media (max-width:375px) {
              margin:15px 15px;
        }
    }   
}
`;



export const MainNoneAuth = Styled.nav`
display:flex;
flex-direction:row;
background-color:white;
height:10vh;
justify-content:center;
align-items:center;

button{
                
                color:black;  
                font-size:24px;
                font-weight:bold;
                text-decoration:none;
                border:none;
                width:100vw;
                height:10vh;
                margin:0;
                padding:0;
                background: linear-gradient(to bottom, rgba(243,226,199,1) 0%, rgba(193,158,103,1) 31%, rgba(182,141,76,1) 54%, rgba(193,158,103,1) 80%, rgba(233,212,179,1) 100%);
                box-shadow: 0px -4px 3px -2px rgba(150,150,150,1);
                cursor:pointer;

                &:hover{
                    
                    background-color:#cccccc;
                } 
                &:active{
                    color:Grey;
                }   
    
            }
ul{
  margin:0;
  padding:0;
    
    li{
        margin:15px;
        display: inline;
        color:white;
        text-decoration:none;
          
        i{
            font-size:36px;
            color:white;  
            &:hover{
                color: Silver;
            } 
            &:active{
                color:Grey;
            }   
  
         }
         
    }   
}
`;
