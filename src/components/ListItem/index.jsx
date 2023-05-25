function ListItem({ title, author, url, img, service }) {
  return (
    <li>
      <img src={img} />
      <p>서비스 : {service}</p>
      <p>제목 : {title}</p>
      <p>작가 : {author}</p>
      <a href={url}>이동</a>
    </li>
  );
}

export default ListItem;
