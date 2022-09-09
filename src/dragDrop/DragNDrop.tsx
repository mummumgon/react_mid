import styled from "styled-components";
import {Link } from 'react-router-dom';
const Container = styled.section`
  max-width: 500px;
  width: 100%;
  padding: 20px;
  margin: 50px auto;
`;
function DragNDrop(){
    return <Container>
        <Link to='/dragdrop/detail'>드래그 자세히</Link>
        </Container>
}
export default DragNDrop;