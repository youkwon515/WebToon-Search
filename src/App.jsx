import { useState } from "react";
import Input from "./components/Input";
import List from "./components/List";

function App() {
  const [webtoon, setWebtoon] = useState([]);

  async function webToonSearch(value) {
    const res = await fetch(
      `https://korea-webtoon-api.herokuapp.com/search?keyword=${value}`
    );
    const data = await res.json();
    setWebtoon(data.webtoons);
    console.log(data.webtoons);
  }

  const onSearch = (e) => {
    if (e.key === "Enter") {
      webToonSearch(e.target.value);
    }
  };
  return (
    <>
      <Input onKeyUp={onSearch} placeholder="제목, 작가 이름을 검색하세요" />
      <List webtoon={webtoon} />
    </>
  );
}

export default App;
