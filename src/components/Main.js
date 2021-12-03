import React, { useState, useEffect } from "react"; // useEffect : 앱이 처음 시작되었을 때 useState : 상태 관리
import "../css/Main.css";
import axios from "axios"; // axios 라이브러리 이용해서 FE-BE http 통신

function Main() {
  const baseUrl = "http://localhost:8080";

  // 응답 데이터 관련
  const [childs, setChilds] = useState([]);
  // const [childsURl, setChildsUrl] = useState([]);

  useEffect(() => {
    getChilds();
  }, []);

  // getChildsUrl();
  console.log("length", childs.length);

  async function getChilds() {
    await axios
      .get(baseUrl + "/api/v1/getChildren=0")
      .then((response) => {
        // 데이터 읽어왔을 때 응답 관련 데이터 상태 관리
        setChilds(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      }); // http 메소드 실패했을 때
  }

  // async function getChildsUrl() {
  //   await axios
  //     .get("https://github.com/")
  //     .then((response) => {
  //       // 데이터 읽어왔을 때 응답 관련 데이터 상태 관리
  //       setChildsUrl(response.data);
  //       console.log("url", response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     }); // http 메소드 실패했을 때
  // }

  // , "_blank", "noopener,noreferrer"
  const openInNewTab = (url) => {
    const newWindow = window.open(url);
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="main">
      <div className="main__left">
        {console.log("length", childs["children"].length)}
        {childs["children"] // 현재 json의 키값 구조 참고
          ? childs["children"].map((child) => {
              console.log("child", child);
              return (
                // 해당 링크를 누를 수 있게 return
                <div
                  className="content-box"
                  onClick={() => {
                    // shell.openExternal(child.url);
                    // window.oprn(child.url);
                    openInNewTab(child.url);
                    require("electron").shell.openExternal(child.url);
                  }}
                >
                  <pre>
                    <span>{child.title}</span>
                  </pre>
                  <pre>
                    <span>{child.url}</span>
                  </pre>
                  <pre>
                    <span></span>
                  </pre>
                </div>
              );
            })
          : null}
      </div>

      <div className="updown"></div>

      <div className="main__right">
        <div className="content-box">exexexex</div>
      </div>
    </div>
  );
}

export default Main;
