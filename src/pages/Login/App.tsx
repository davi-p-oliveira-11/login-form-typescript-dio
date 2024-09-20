import { useForm } from "react-hook-form";

import Input from "../../components/Input";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Container,
  LoginContainer,
  Column,
  SpacingMd,
  SpacingSm,
  Title,
  SubTitle,
  MainText,
  InputLabel,
} from "./styles";
import { defaultValues, IFormLogin } from "./types";

import { loginContent } from "../../data/data";
import Button from "../../components/Button";

const schema = yup
  .object({
    email: yup.string().email("Invalid E-mail").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "No minimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Login = () => {
  const {
    register,
    control,
    formState: { error, isValid },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange",
  });

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <SpacingMd />
          <SubTitle>{loginContent.subtitle}</SubTitle>
          <SpacingSm />
          <MainText>{loginContent.maintext}</MainText>
          <SpacingMd />
          <InputLabel>Enter your Email </InputLabel>
          <Input
            name="email"
            placeholder="Email"
            control={control}
            errorMessage={error?.email?.message}
          />
          <SpacingMd />
          <InputLabel>Enter your Password </InputLabel>
          <Input
            name="password"
            type="password"
            placeholder="Password"
            control={control}
            errorMessage={error?.password?.message}
          />
          <SpacingMd />
          <Button title="Enter" />
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;
