import GlovalStyle from "./GlovalStyle";
import styled from "styled-components";
import {Link} from 'react-router-dom';

const Container = styled.section`
  max-width: 500px;
  width: 100%;
  padding: 20px;
  margin: 50px auto;
`;

const ListUl = styled.ul`
    li{
        a{
            display: block;
            font-size:20px;
        }
    }
`;
function Main() {
  return <div>
      <GlovalStyle/>
      <Container>
        <ListUl>
          <li>
            <Link to="/coins">Coin</Link>
          </li>
          <li>
            <Link to="/todos">ToDO List</Link>
          </li>
          <li>
            <Link to="/dragdrop">Drag and Drop</Link>
          </li>
        </ListUl>
      </Container>
    </div>
}

export default Main;