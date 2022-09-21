import {  useState  } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {Helmet} from "react-helmet";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right bottom,#91f,#d0e);
`;
const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  width: 50vw;
  gap: 20px;
  margin-bottom: 50px;
`;
const Box = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: rgba(255,255,255,0.6);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  &:nth-child(1){transform-origin:right bottom}
  &:nth-child(2){transform-origin:left bottom}
  &:nth-child(3){transform-origin:right top}
  &:nth-child(4){transform-origin:left top}
`;
const Btn = styled(motion.button)`
    width: 100px;
    line-height: 30px;
    cursor: pointer;
`;
const Circle = styled(motion.p)`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #0099ff;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  `;
const Overlay = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  div{
    width: 500px;
    background-color: rgba(255,255,255,1);
  }
`;
const box ={
  hover:{scale: 1.1, transition:{ type: "spring", stiffness: 300, damping:20 }},
}

const btn ={
  start:{scale: 1,color:'#0099ff'},
  click:{scale: 1.1,color:'#ff9800',transition:{ duration:0.3}}
};
function Chapter2() {
  const [swich , setSwich] = useState(false);
  const [toggle , setToggle] = useState(false);
  const onClick = (state:boolean) =>  setSwich(state); 
  const ontoggle = () =>  setToggle((mode:boolean)=> !mode ); 
  const arr = ['1','2','3','4'];
  const [id , setId] = useState<null | string>(null);

  const originX = (x:any) => {
    const offX = +x % 2 !== 0 ? "1" : "0";
    console.log(`${offX} `);
    return `${offX}`;
};
  const originY = (y:any) => {
    const offY = +y <= 2? "1" : "0";
    console.log(`${offY}`);
    return `${offY}`;
};
  return (
    <div style={{overflow: 'hidden'}}>
         <Helmet>
                <title>animation 구현</title>
            </Helmet>
    <Wrapper onClick={ontoggle}>
    <Grid>
    <AnimatePresence/>
    { arr.map(
      (n)=>
      <Box className={'aaa'} onClick={()=> setId(n)} 
      style={{
        originX: originX(n), originY:originY(n)
      }} key={n} layoutId={n}  variants={box} whileHover='hover'>
        {n === '2' && (!swich ? <Circle layoutId="swich"/>:null)}
        {n === '3' && (swich ? <Circle layoutId="swich"/>:null)}
      </Box>
      )}
      <AnimatePresence/>
    </Grid>
    <Btn variants={btn} initial='start' whileTap='click' onTap={()=>{onClick(false)}} onTapStart={()=>{onClick(true)}} >Swich!</Btn>
    <AnimatePresence/>
    {id ? <Overlay onClick={()=>setId(null)} initial={{backgroundColor:'rgba(0,0,0,0)'}} animate={{backgroundColor:'rgba(0,0,0,0.5)'}} exit={{backgroundColor:'rgba(0,0,0,0)'}}><Box layoutId={id} /></Overlay> : null}<AnimatePresence/>
    </Wrapper>
  </div>
  );
} 

export default Chapter2;
