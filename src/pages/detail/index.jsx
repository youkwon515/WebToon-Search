import * as S from "./styled";
import returnIcon from "../../assets/return.svg";
import { Link } from "react-router-dom";
function Detail({ detailValue }) {
  const url = detailValue.url;
  const date = detailValue.updateDays;
  const dateArr = [];
  date.forEach((e) => {
    if (e === "finished") {
      dateArr.push("완결");
    } else if (e === "mon") {
      dateArr.push("월요일");
    } else if (e === "tue") {
      dateArr.push("화요일");
    } else if (e === "wed") {
      dateArr.push("수요일");
    } else if (e === "thu") {
      dateArr.push("목요일");
    } else if (e === "fri") {
      dateArr.push("금요일");
    } else if (e === "sat") {
      dateArr.push("토요일");
    } else if (e === "sun") {
      dateArr.push("일요일");
    }
  });
  return (
    <S.Container>
      <S.ContainerCard>
        <S.Return>
          <Link to="/">
            <S.ReturnIcon src={returnIcon} />
          </Link>
        </S.Return>
        <S.Box>
          <S.WebToonImgBox>
            <S.WebToonImg src={detailValue.img} />
          </S.WebToonImgBox>
          <S.WebToonContentsBox>
            <S.Title>{detailValue.title}</S.Title>
            <S.Author>{detailValue.author}</S.Author>
            <S.UpdateDays>
              {dateArr.join(", ")}
              {" 웹툰"}
            </S.UpdateDays>
            <S.ContentsText>소개 :</S.ContentsText>
            <S.ContentsTextBox>
              <S.ContentsText>
                "{detailValue.title}"는 현재 {dateArr.join(", ")} 웹툰이며
              </S.ContentsText>
              <S.ContentsText>
                "{detailValue.author}" 작가의 작품입니다.
              </S.ContentsText>
            </S.ContentsTextBox>
            <S.UrlLinkBox>
              <S.UrlLink
                onClick={() => {
                  window.open(url);
                }}
              >
                바로가기
              </S.UrlLink>
            </S.UrlLinkBox>
          </S.WebToonContentsBox>
        </S.Box>
      </S.ContainerCard>
    </S.Container>
  );
}

export default Detail;
