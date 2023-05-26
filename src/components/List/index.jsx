import ListItem from "../ListItem";
import * as S from "./styled";
function List({ webtoon }) {
  return (
    <S.List>
      {webtoon.map(({ _id, title, author, url, img, service }) => {
        return (
          <ListItem
            key={_id}
            title={title}
            author={author}
            url={url}
            img={img}
            service={service}
          />
        );
      })}
    </S.List>
  );
}

export default List;
