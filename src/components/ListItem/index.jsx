import * as S from "./styled";
import { Link } from "react-router-dom";
function ListItem({ title, author, url, img, service, onClick }) {
  return (
    <Link to="/detail" onClick={onClick}>
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
    </Link>
  );
}

export default ListItem;
