import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 420px;
  background-color: #f5fafc;

  border-radius: 8px;
  padding: 20px;

  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  color: #1c2027;
`;
export const SubTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #9aa3ae;
`;

export const MainText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #bac2d0;
`;
export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const SpacingMd = styled.div`
  margin: 10px 0;
`;

export const SpacingSm = styled.div`
  margin: 5px 0;
`;

export const InputLabel = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #1c2027;
`;
