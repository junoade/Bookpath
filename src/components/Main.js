import React, { useState, useEffect } from "react"; // useEffect : 앱이 처음 시작되었을 때 useState : 상태 관리 
import "../css/Main.css"
import axios from "axios"; // axios 라이브러리 이용해서 FE-BE http 통신

function Main() {
  const baseUrl = "http://localhost:8080";

  // 응답 데이터 관련
  const [childs, setChilds] = useState([]);

  useEffect(() => {
    getChilds();
  }, [])


  async function getChilds() {
    await axios.get(baseUrl + "/api/v1/getChildren=0").then((response => {
      // 데이터 읽어왔을 때 응답 관련 데이터 상태 관리
      setChilds(response.data);
      console.log(response.data);
    })).catch((error) => { console.log(error) }) // http 메소드 실패했을 때 
  }

  return (
    <div className="main">
      <div className="main__left">
        {

          childs["children"] // 현재 json의 키값 구조 참고 
            ? childs["children"].map((child) => {
              return (
                // 해당 링크를 누를 수 있게 return 
                <a href={child.url}>{child.title}</a>
              )
            })
            : null

        }
      </div>

      <div className="updown"></div>

      <div className="main__right">
        <a href="">asdsad</a>
      </div>
    </div>
  );
}

export default Main;