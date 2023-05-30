import * as S from "./styled";

function ListItem({ title, author, url, img, service }) {
  return (
    <S.Item>
      <S.Img src={img} />
      <S.ContentsBox>
        <S.TitleBox>
          <S.Title>{title}</S.Title>
        </S.TitleBox>
        <S.author>{author}</S.author>
        <S.serviceBox>{service}</S.serviceBox>
      </S.ContentsBox>
    </S.Item>
  );
}

export default ListItem;
