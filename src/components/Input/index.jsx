import * as S from "./styled";
import icon from "../../assets/searchIcon.svg";
function Input(props) {
  return (
    <S.SearchBox>
      <div>
        <S.SearchIcon src={icon} />
        <S.Search {...props} />
      </div>
    </S.SearchBox>
  );
}

export default Input;
