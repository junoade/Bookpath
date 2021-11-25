import React, { useState, useEffect } from "react"; // useEffect : 앱이 처음 시작되었을 때 useState : 상태 관리 
import "../css/Topbar.css"
import axios from "axios"; // axios 라이브러리 이용해서 FE-BE http 통신

function Topbar() {

  /* */
  const baseUrl = "http://localhost:8080"


  // input에 대한 상태값
  //const [input, setInput] = useState("");

  // 응답 데이터 관련
  const [rootDirs, setRootMarks] = useState([]);


  // 리액트 앱 실행시 한번만 불러 올 경우, useEffect
  useEffect(() => {
    getRootsDir();
  }, []);

  async function getRootsDir() {
    await axios.get(baseUrl + "/api/v1/rootDirs=3").then((response => {
      // 데이터 읽어왔을 때 응답 관련 데이터 상태 관리
      setRootMarks(response.data);
      console.log(response.data);
    })).catch((error) => { console.log(error) }) // http 메소드 실패했을 때 
  }


  return (
    <div>
      <div className="header">
        <p className="header_name"></p>
      </div>
      <div className="top_bar">
        <h1>&#8592;</h1>
        
        {
          rootDirs
            ? rootDirs.map((rootDir) => {
              return (
                <div className ="folder-box">
                <span className="rootDir_">{rootDir.title}</span>
                </div>
              )
            })
            : null
        }
          
        <h1>&#8594;</h1>
      </div>
    </div>
  );
}


export default Topbar;
