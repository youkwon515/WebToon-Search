import styled from "styled-components";

export const Item = styled.li`
  width: 400px;
  height: 600px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  position: relative;
  border-radius: 15px;
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5), 0 6px 6px rgba(0, 0, 0, 0.5);
  }
  background-color: #333333;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: #fff;
  white-space: nowrap;
  overflow: hidden;
  border-radius: 0 0 15px 15px;
  text-overflow: ellipsis;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  width: 320px;
  height: 50px;
`;

export const Title = styled.p`
  font-size: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const author = styled.p`
  font-size: 13px;
`;

export const serviceBox = styled.div`
  position: absolute;
  right: 10px;
  bottom: 25%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
