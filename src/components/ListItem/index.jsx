import * as S from "./styled";

function ListItem({ title, author, url, img, service }) {
  return (
    <S.Item>
      <S.Img src={img} />
      <S.ContentsBox>
        <S.Title>{title}</S.Title>
        <S.author>{author}</S.author>
      </S.ContentsBox>
    </S.Item>
  );
}

export default ListItem;
