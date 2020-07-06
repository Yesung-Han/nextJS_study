# nextJS_study
Next.JS 스터디 프로젝트

md 파일 읽어서 블로그 띄우기

## 사용한 유틸리티 모듈

- gray-matter 

  파일 앞에 메타정보를 기입하고 파일을 불러올때 그 정보를 오브젝트 형식으로 불러올 수 있다.

  ```
  ---
  title: Hello
  slug: home
  ---
  <h1>Hello world!</h1>
  ```
  -->

  ```
  {
    content: '<h1>Hello world!</h1>',
    data: { 
      title: 'Hello', 
      slug: 'home' 
    }
  }
  ```

- remark, remark-html

  markdown 을 읽어서 string 형식의 html을 뽑아준다.


## es6 문법 

함수 파라미터 디스트럭쳐링
  ```
  export async function getStaticProps({ params }) {

  }
  ```

  ==

  ```
  export async function getStaticProps(args) {
    const { params } = args
  }

  //만약 디폴트로 object가 아닌게 들어올 수도 있으면 디폴트로 빈 object 주기

  export async function getStaticProps({ params } = {}) {

  }
  ```
