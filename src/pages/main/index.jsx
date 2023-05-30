import { useState } from "react";
import Input from "../../components/Input";
import List from "../../components/List";
import * as S from "./styled";

function Main({ detailValue }) {
  const [webtoon, setWebtoon] = useState([]);
  const [InputValue, setInputValue] = useState(undefined);
  async function webToonSearch(value) {
    const res = await fetch(
      `https://korea-webtoon-api.herokuapp.com/search?keyword=${value}`
    );
    const data = await res.json();
    setWebtoon(data.webtoons);
  }

  const onSearch = (e) => {
    const inputValue = e.target.value;
    if (e.key === "Enter") {
      webToonSearch(inputValue);
      setInputValue(inputValue);
    }
  };

  const handleDetailValue = (arr) => {
    detailValue(arr);
  };

  return (
    <>
      <S.SearchContainer>
        <Input onKeyUp={onSearch} placeholder="제목이나 작가를 검색하세요." />
      </S.SearchContainer>
      <S.ListContainer>
        <List
          webtoon={webtoon}
          InputValue={InputValue}
          detailValue={handleDetailValue}
        />
      </S.ListContainer>
    </>
  );
}

export default Main;
