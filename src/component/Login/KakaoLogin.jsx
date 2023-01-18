import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { requestUserInfo } from "./KakaoOauth";
import COLOR from "../../style/color";
const KakaoLogin = () => {
  const { search } = useLocation();
  const code = new URLSearchParams(search).get("code");
  const navigator = useNavigate();
  useEffect(() => {
    requestUserInfo(code).then((res) => {
      const {
        access_token,
        expires_in,
        id_token,
        refresh_token,
        refresh_token_expires_in,
        scope,
        token_type,
      } = res.data;
      const kakaoDom = document.getElementById("kakaoDom");
      if (kakaoDom) {
        const accessDom = document.createElement("ol");
        accessDom.innerHTML = `
          <li><div class="Li__Title">access_token</div> ${access_token}</li>
          <li><div class="Li__Title">expires_in</div> ${expires_in}</li>
          <li><div class="Li__Title">id_token</div> ${id_token}</li>
          <li><div class="Li__Title">refresh_token</div> ${refresh_token}</li>
          <li><div class="Li__Title">refresh_token_expires_in</div> ${refresh_token_expires_in}</li>
          <li><div class="Li__Title">scope</div> ${scope}</li>
          <li><div class="Li__Title">token_type</div> ${token_type}</li>
        `;
        kakaoDom.appendChild(accessDom);
      }
    });
  }, []);

  return (
    <KakaoDiv>
      <Header>
        <div style={{ "font-size": "30px", "font-weight": "bold" }}>
          KAKAO LOGIN DATA
        </div>
        <HomeButton
          onClick={() => {
            navigator("/");
          }}
        >
          홈으로 가기
        </HomeButton>
      </Header>

      <KakaoStyle id="kakaoDom"></KakaoStyle>
    </KakaoDiv>
  );
};

export default KakaoLogin;

const Header = styled.div`
  display: flex;
  align-items: center;
  //flex-direction: column;
  gap: 100px;
`;
const KakaoDiv = styled.div`
  padding: 50px 0 0 30px;
`;
const HomeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  text-align: center;
  vertical-align: middle;
  color: white;
  background-color: ${COLOR.DARKMAIN};
  cursor: pointer;
`;
const KakaoStyle = styled.div`
  li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 5px;
    margin: 20px 0;
    .Li__Title {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 40px;

      line-height: 20px;
      border-radius: 10px;
      background-color: ${COLOR.MAIN};
      color: #ffff;
      font-weight: bold;
    }
  }
`;
