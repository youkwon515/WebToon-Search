import React from "react";
import { Oval } from "react-loader-spinner";
import * as S from "./styled";
const Loading = () => {
  return (
    <S.LoadingBox>
      <Oval color="#000000" width={150} height={150} secondaryColor="#ffffff" />
    </S.LoadingBox>
  );
};

export default Loading;
