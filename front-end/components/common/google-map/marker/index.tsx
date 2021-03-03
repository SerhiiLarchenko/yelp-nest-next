/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/destructuring-assignment */
import * as S from './styles';

const Marker = (props: { url: string; lat: number; lng: number }) => {
  return <S.Marker url={props.url} />;
};

export { Marker };
