import * as S from './styles';

const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.png" alt="logo text nextjs" />
      <S.Title>NextJS Boilerplate</S.Title>
      <S.Description>
        Typescript, ReactJS, NextJS, Jest, Eslint, Prettier, Husky and Styled
        Componets
      </S.Description>
      <S.Illustration
        src="/img/illustration.gif"
        alt="people development software"
      />
    </S.Wrapper>
  );
};

export default Main;
