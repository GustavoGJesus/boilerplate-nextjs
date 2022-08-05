import * as S from './styles';

const Main = ({
  title = 'NextJS Boilerplate',
  description = 'Typescript, ReactJS, NextJS, Jest, Eslint, Prettier, Husky and Styled Componets',
}) => {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.png" alt="logo text nextjs" />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/illustration.gif"
        alt="people development software"
      />
    </S.Wrapper>
  );
};

export default Main;
