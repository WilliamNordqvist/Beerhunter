import Styled from 'styled-components';
import Background from '../../Graphics/Backgorunds/fred-crandon-796719-unsplash.jpg'
export const Main = Styled.div`
    text-align: center;
    height:90vh;
    overflow-y: scroll;
    font-size: 17px;
    display:flex;
    flex-direction:column;
    

   
`;
export const MainContent = Styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:white;
`;

export const Header = Styled.header`
    width: 100%;
    height: 10vh;
    background-color:grey;
    flex-direction:row;
    display:flex;
    justify-content:flex-end;
    align-items: center;
    border-bottom: 5px solid silver;

    a{
        background-color:transparent;
        font-size:24px;
        color:white;
        margin-right:15px;
    }
`;

export const MiddleSection = Styled.section`
    
    color:white;
    width: 100%;
    height: 34vh;
    background:url(${Background});
    background-size:cover;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    border-bottom:5px solid black;
    
    
    
`;

export const StatusSection = Styled.section`
    
    color:black;
    width: 100%;
    height: 20vh;
    margin-top:20px;
    display:flex;
    
    flex-direction:column;
    justify-content:flex-start;
    align-items: center;
    
    h1{
        margin:0px;
        font-size:16px;
    }
    p{
        margin:0px;
        font-size:14px;
    }
    
`;

export const BioSection = Styled.section`
    
    color:black;
    width: 100%;
    height: 30vh;
    background-color:silver;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    border-top:5px solid grey;
    border-bottom:5px solid grey;
    
    h1{
        margin:0px;
    }
    p{
        margin:0px;
    }
    
`;

export const BioCard = Styled.section`
    
    color:black;
    width: 90%;
    height: 80%;
  
    border-radius:4px;
    background-color:white;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items: flex-start;
    padding:5px;
   
    
    h1{
        margin:0px;
    }
    p{
        margin:0px;
    }
    
`;


export const Avatar = Styled.div`
  
  width:80px;
  height:80px;
  border:5px solid grey;
  border-radius:50%;
  background-color:white;
  margin-top:20px;
  i{
      color:black;
    margin-top:20px;
      font-size:46px;
  }
   
`;

