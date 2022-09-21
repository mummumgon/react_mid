import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  background: #ddd;
`;
const Wraper2 = styled(motion.div)`
  display: flex;
  width: 100vw;
  height: 200vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  background: #DDD;
`;
const BoxList = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  li{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    border-radius: 50px;
    background: linear-gradient(to right bottom,#0b9e48,#a1d4ae);
    overflow: hidden;
  }
`;
const Bigbox = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    border-radius: 50px;
    background: linear-gradient(to right bottom,#91f,#d0e);
    overflow: hidden;
`;
const Box = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  width: 100px;
  height: 100px;
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  place-self: center;
  width: 35px;
  height: 35px;
  border-radius: 50em;
  background-color: pink;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const box = {
  start:{scale: 0},
  end:{scale: 1 ,rotate:'180deg',transition:{delay: 0.3, duration: 0.3,type: "spring",stiffness: 200,damping:12}}
}
const box2 = {
  start:{scale: 0, opacity:0},
  end:{scale: 1 , opacity:1, transition:{ duration: 0.3, type: "spring", stiffness: 70, delayChildren: 0.2, staggerChildren:0.2}}
}
const box2Children ={
  start:{y: 20,opacity:0},
  end:{y: 0, opacity:1, transition:{ type: "spring", stiffness: 200, damping:8 }},
}
const box3 = {
  hover:{rotate:'90deg', scale:1.2},
  click:{borderRadius:'50em', scale:1}
}
const Svg = styled.svg`
  width: 100px;
  height: 100px;
  path {
    stroke: white;
    stroke-width: 2;
  }
`;
const svg = {
  start: { pathLength: 0, fill: "rgba(255, 255, 255, 0)" },
  end: {
    fill: "rgba(255, 255, 255, 1)",
    pathLength: 1,
  },
};

function Chapter1() {
  //부모의 크기를 전달 ref
  const box4Ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const rotate = useTransform(x,[-500,500],[-360,360]);
  const bgColor = useTransform(x,[-100,100],['linear-gradient(to right bottom,#91f,#d0e)','linear-gradient(to right bottom,#1f48ce,#21a3ca)'])
  const {scrollY, scrollYProgress} = useScroll();
  const scale = useTransform(scrollYProgress, [0,1] , [1,5])

  useEffect(()=>{
    //x값의 움직이는 현재위치값을 가지고옴
    // x.onChange(()=>{console.log(x.get())});
    //scrollY 현페이지 Y값 가지고 옴. scrollYProgress=>현페이지 전체 스크롤 진행율
    scrollY.onChange(()=>{console.log(scrollY.get(),scrollYProgress.get())});
  },[scrollY,scrollYProgress]);
  return (
    <div style={{overflow: 'hidden'}}>
    <Wrapper>
    <BoxList>
      <li>
        <Box 
          variants={box}
          initial='start'
          animate='end'
        />
      </li>
      <li>
        <Box variants={box2} initial='start' animate='end'>
          <Circle variants={box2Children}/>
          <Circle variants={box2Children}/>
          <Circle variants={box2Children}/>
          <Circle variants={box2Children}/>
        </Box>
      </li>
      <li><Box variants={box3} whileHover="hover" whileTap="click"/></li>
      <Bigbox ref={box4Ref}><Box drag dragConstraints={box4Ref} variants={box3} whileHover="hover" whileTap="click"/></Bigbox>
      {/* dragSnapToOrigin 원래 위치로 되돌아감 , 버튼 클릭시 set()값전달하여 이동*/}
      {/* <li><button onClick={()=>x.set(100)}>click</button><Box style={{ x }} drag='x' dragSnapToOrigin/></li> */}
      <Bigbox style={{background:bgColor}}><Box style={{ x , rotate}} drag='x' dragSnapToOrigin/></Bigbox>
      <li>
      <Svg
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <motion.path
          variants={svg}
          initial="start"
          animate="end"
          transition={{
            default: { duration: 5 },
            fill: { duration: 1, delay: 3 },
          }}
          d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z"
        ></motion.path>
      </Svg>
        </li>
    </BoxList>
  </Wrapper>
  <Wraper2 style={{background:'#0faf44'}}>
    <Box style={{ x , rotate, scale}} drag='x' dragSnapToOrigin/>
  </Wraper2>
  <Wrapper style={{background:'pink'}}>dd</Wrapper>
  </div>
  );
}

export default Chapter1;
