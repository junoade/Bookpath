
# 프론트엔드 백엔드 연동 개발 설명서


#### 1. 프론트 단의 리액트와 백엔드 단의 스프링부트에서 통신하기 위해서,

   해당 경로의 jar파일을 실행시켜 스프링부트의 WAS인 톰캣을 실행시켜야함.

> 해당 경로의 sampleData.json 파일 경로 주의할 것 


#### 2. 자바 11버전을 설치하고 자바 버전이 제대로 터미널에 출력되는지 확인한다.

``` sh
javac -version
```
![image-20211122215259433](https://user-images.githubusercontent.com/54317409/142867049-e51b1402-390d-4795-ae6b-688cdd302d76.png)



#### 3. 배포 파일 `bookpath-0.0.1-SNAPSHOT.jar` 을 다음의 명령어로 실행한다.

```shell
java -jar secureQR-0.0.1-SNAPSHOT.jar
```



#### 4. Frontend경로의 작업 파일 경로 `Frontend\bookpath` 에서 다음의 명령어를 입력한다

```
yarn electron:serve
```



- 만약 별도의 의존성 문제가 발생한다면,

  아래의 명령어를 실행하여 node_modules에 추가를 해봐도 괜찮을 것 같다.

  ```
  yarn add electron concurrently wait-on cross-env
  
  yarn add @electron/remote
  
  npm install axios
  ```

  

#### 5. 일렉트론에서 리액트 실행시 `Topbar.js` 에서 

   현재 baseUrl = "http://localhost:8080/api/v1/rootDirs=5" 로 HTTP GET 요청을 하게 된다.

![image-20211122220114461](https://user-images.githubusercontent.com/54317409/142867098-b67e4db8-6177-4b87-a3b6-651317b1423f.png)




#### 6. 현재 구현한 백엔드 API

- baseUrl+`/api/v1/rootDirs={value}`

  1~5개의 상위 디렉토리 정보를 요청하고 응답<br/>
  `{value}` : int 타입 1~5 <br/> 
  ![image](https://user-images.githubusercontent.com/54317409/142867947-f1029510-d871-47bc-958f-5244c3d8fd96.png)


- baseUrl+`api/v1/getChildren={value}` 
  
  1~5개의 상위 디렉토리 정보를 기준으로 하위 디렉토리 또는 하위 링크들의 정보를 요청하고 응답<br/>
  `{value}`: int 타입 0~4 <br/>
  ![image](https://user-images.githubusercontent.com/54317409/142868124-b9cfc175-673b-4aec-8d09-9b9d827595a0.png)

