import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, rgba(0, 0, 0, 0.8), rgba(4, 0, 0, 0.6)),
    url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzOW52MJ2lD-H4PxW1ZHpVTDROe8M2TbXwpXBfNVOxfIGX2zqFUYH5PUGid-D71tBsRAg&usqp=CAU")
      fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 1300px;
  height: 800px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const Return = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 80px;
`;

export const ReturnIcon = styled.img`
  width: 45px;
  height: 45px;
  margin-left: 13px;
`;

export const WebToonImgBox = styled.div`
  width: 450px;
  height: 600px;
  border-radius: 10px 0 0 10px;
  border: 0.1px solid black;
  border-right: 0;
  overflow: hidden;
`;

export const WebToonImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const WebToonContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 650px;
  height: 600px;
  padding: 15px;
  background-color: #fff;
  border: 0.1px solid black;
  border-left: 0;
  border-radius: 0px 10px 10px 0px;
`;

export const Title = styled.p`
  font-size: 50px;
  font-weight: 700;
`;

export const Author = styled.p`
  font-size: 23px;
`;

export const UpdateDays = styled.p`
  font-size: 20px;
`;

export const ContentsTextBox = styled.div`
  padding: 20px;
  width: 100%;
  height: 250px;
  background-color: rgb(218, 218, 218);
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px gray inset;
`;

export const ContentsText = styled.p`
  font-size: 15px;
  color: #333333;
`;

export const UrlLinkBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
`;

export const UrlLink = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  width: 100px;
  height: 35px;
  background-color: gray;
  color: #ffffff;
  margin-left: 5px;
  border: 0;
  font-family: "SEBANG_Gothic_Bold";
`;

export const Box = styled.div`
  display: flex;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
`;
