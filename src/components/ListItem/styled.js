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

export const Title = styled.p`
  font-size: 25px;
`;

export const author = styled.p`
  font-size: 13px;
`;
