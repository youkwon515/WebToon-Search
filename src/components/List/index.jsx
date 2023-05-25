import ListItem from "../ListItem";

function List({ webtoon }) {
  return (
    <ul>
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
    </ul>
  );
}

export default List;
