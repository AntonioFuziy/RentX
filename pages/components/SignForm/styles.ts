import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 420px;
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
`
export const Subtitle = styled.p`
  max-width: 300px;
  font-size: 14px;
  line-height: 20px;
  color: #777;
`
export const Form = styled.div`
  width: 100%;
  margin-top: 30px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Input = styled.input`
  border: 0;
  height: 30px;
  width: 100%;
  max-width: 400px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 4px;
`;
export const ForgotPassword = styled.a`
  margin-top: 30px;
`
export const LoginButton = styled.button`
  margin-top: 30px;
  width: 100%;
  max-width: 420px;
  height: 50px;
  background-color: ${({theme}) => theme.colors.lightRedTheme};
  border: 0;
  border-radius: 4px;
  color: #fff;
  font-size: 15px;
`
export const SignButton = styled.button`
  margin-top: 30px;
  width: 100%;
  max-width: 420px;
  height: 50px;
  background-color: ${({theme}) => theme.colors.grayPrimary};
  border: 0;
  border-radius: 4px;
  color: #000;
  font-size: 15px;
`