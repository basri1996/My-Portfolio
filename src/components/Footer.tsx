import styled from "styled-components";
import facebook from "../assets/images/icons8-facebook-64.png";
import instagram from "../assets/images/icons8-instagram-64.png";
import github from "../assets/images/icons8-github-64.png";
import linkedin from "../assets/images/icons8-linkedin-64.png";
import reactLogo from "../assets/images/icons8-react-80.png";

function Footer() {
  return (
    <MainDiv>
      <WrapperDiv>
        <FacebookLogo
          href="https://www.facebook.com/luka.khutsidze"
          target="_blank"
        />
        <InstagramLogo
          href="https://www.instagram.com/lukakhutsidze/"
          target="_blank"
        />
        <GithubLogo href="https://github.com/lukak1997" target="_blank" />
        <LinkedinLogo
          href="https://www.linkedin.com/in/luka-khutsidze-202b44293/"
          target="_blank"
        />
      </WrapperDiv>
      <TitileDiv>
        <ReactLogo />
      </TitileDiv>
    </MainDiv>
  );
}

export default Footer;

const ReactLogo = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: inline-block;
    width: 75px;
    height: 75px;
    background-image: url(${reactLogo});
  }
`;

const MainDiv = styled.div`
  width: 100%;
  height: 200px;
  background-color: #35a29f;
  display: flex;
  padding: 0 30px;
  justify-content: space-between;
`;

const FacebookLogo = styled.a`
  width: 60px;
  height: 60px;
  background-image: url(${facebook});
  :hover {
    color: #c0eef2;
    cursor: pointer;
  }
`;
const InstagramLogo = styled.a`
  width: 60px;
  height: 60px;
  background-image: url(${instagram});
  :hover {
    color: #c0eef2;
    cursor: pointer;
  }
`;
const GithubLogo = styled.a`
  width: 60px;
  height: 60px;
  background-image: url(${github});
  :hover {
    color: #c0eef2;
    cursor: pointer;
  }
`;

const LinkedinLogo = styled.a`
  width: 60px;
  height: 60px;
  background-image: url(${linkedin});
  :hover {
    color: #c0eef2;
    cursor: pointer;
  }
`;

const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const TitileDiv = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }
  @media (min-width: 1200px) {
    margin-right: 150px;
  }
`;
