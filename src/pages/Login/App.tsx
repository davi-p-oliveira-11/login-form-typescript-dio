import {
  Container,
  LoginContainer,
  Column,
  SpacingMd,
  SpacingSm,
  Title,
  SubTitle,
  MainText,
} from "./styles";

import { loginContent } from "../../data/data";

const Login = () => {
  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <SpacingMd />
          <SubTitle>{loginContent.subtitle}</SubTitle>
          <SpacingSm />
          <MainText>{loginContent.maintext}</MainText>
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;
