import ListItem from "../ListItem";
import * as S from "./styled";
function List({ webtoon, InputValue, detailValue }) {
  return (
    <S.List>
      {webtoon.length !== 0 ? (
        webtoon.map(({ _id, title, author, url, img, service }) => {
          const handleDetailValue = () => {
            const detailArr = { id: _id, title, author, url, img, service };
            detailValue(detailArr);
          };
          return (
            <ListItem
              key={_id}
              title={title}
              author={author}
              url={url}
              img={img}
              service={service}
              onClick={handleDetailValue}
            />
          );
        })
      ) : InputValue === undefined ? (
        <h1>제목이나 작가를 검색하세요.</h1>
      ) : (
        <h1>검색 결과가 없습니다.</h1>
      )}
    </S.List>
  );
}

export default List;
