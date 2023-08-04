import styled from "styled-components";
import profilePhoto from "../assets/images/363068898_1488136471924576_8146566858769457486_n.jpg";
function Card() {
  return (
    <MainDiv>
      <LeftDiv>
        <Image src={profilePhoto} />
        <MainInfo>
          <Infos>Name: Daviti</Infos>
          <Infos>Surname: Basiladze</Infos>
          <Infos>Birthday: 1996/09/16</Infos>
          <Infos>Number: 571554747</Infos>
          <Infos>Mail: datuni32@gmail.com</Infos>
        </MainInfo>
      </LeftDiv>
      <RightDiv>
        <Title>About Me </Title>
        <Description>
          Hello there! I'm Daviti, a skilled and passionate ReactJS and React
          Native developer, I bring a wealth of experience and knowledge in
          building robust and efficient web and mobile applications. My
          expertise extends to various web technologies, including TypeScript,
          JavaScript, HTML, and CSS. With a particular affinity for creating
          visually appealing and responsive user interfaces, I have honed my
          skills in utilizing Tailwind CSS to craft modern and elegant designs.
        </Description>
        <Description>
          Over the course of my 6-month journey in the software development
          industry, I have had the opportunity to work with cutting-edge
          frameworks and libraries. ReactJS and React Native have been the focal
          points of my career, allowing me to master their respective
          ecosystems, develop intricate frontend solutions, and seamlessly
          transition between web and mobile development.
        </Description>
        <Description>
          Having contributed to more than 20 projects throughout my career, I
          have gained a deep understanding of project lifecycles and
          collaborative development environments. My ability to grasp complex
          concepts quickly and efficiently has enabled me to deliver
          high-quality code and solve challenging technical problems. Moreover,
          I am well-versed in implementing various React hooks to optimize
          performance and maintainable codebases.
        </Description>
      </RightDiv>
    </MainDiv>
  );
}

export default Card;

const MainDiv = styled.div`
  height: 100%;
  width: 100%;
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1100px) {
    flex-direction: row;
  }
`;

const Image = styled.img`
  width: 200px;
  height: 250px;
  border-radius: 50%;
  @media (min-width: 768px) {
    width: 400px;
    height: 450px;
    border-radius: 50%;
  }
`;
const LeftDiv = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 50%;
  }
`;
const RightDiv = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  @media (min-width: 768px) {
    width: 50%;
  }
`;
const MainInfo = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  gap: 10px;
  color: #35a29f;
  margin-top: 20px;
  border-radius: 20px;
  font-family: "Poppins";
  font-size: 20px;
`;
const Infos = styled.li``;

const Title = styled.h1`
  color: #35a29f;
  font-size: 60px;
  font-weight: 900;
`;
const Description = styled.h2`
  font-size: 18px;
  font-weight: 300;
  line-height: 25px;
  letter-spacing: 1px;
  padding: 15px;
  font-family: "Poppins";
  color: #35a29f;
  opacity: 0.6;
`;
