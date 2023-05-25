import styled from "styled-components";

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 550px;
  height: 50px;
  border-radius: 999px;
  overflow: hidden;
  background-image: linear-gradient(
    rgba(226, 254, 12, 0.5),
    rgba(4, 254, 0, 0.6)
  );
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  > div {
    display: flex;
    align-items: center;
    width: 545px;
    height: 45px;
    background-color: #ffffff;
    border-radius: 999px;
  }
`;

export const SearchIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 10px;
`;

export const Search = styled.input`
  width: 450px;
  height: 100%;
  border: 0;
  outline: none;
  margin-right: 30px;
  font-size: 18px;
`;
