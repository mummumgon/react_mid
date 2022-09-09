import {Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.section`
  max-width: 500px;
  width: 100%;
  padding: 20px;
  margin: 50px auto;
`;

function Coins(){
    return <Container>
        <ul>
            <li>
                <Link to={`/coins/1`}>디테일</Link>
            </li>    
        </ul>     
    </Container>
}
export default Coins;