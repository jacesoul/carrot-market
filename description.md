### Set Up

- `npm install -D tailwindcss postcss autoprefixer`
- `npx tailwindcss init -p`
- tailwind.config.js에서 content: ["./pages/**/*.{js,jsx,ts,tsx}"]의 의미는 pages폴더의, 모든 디렉토리의, 그 안의 모든 .js, .jsx, .ts, .tsx로 끝나는 모든 파일에서 우리가 Tailwind를 사용한걸 찾아낸다.

### TOUR OF TAILWIND

- Tailwind CSS는 유틸리티 우선 CSS 프레임워크이다.
- 유틸리티라는것의 의미는 Tailwind가 아주 많은 클래스네임을 가진다는 뜻이다.
- 결국 Tailwind CSS는 아주 크고, 대빵 크고, 슈퍼 뚠뚠한 CSS파일이라고 보면 된다.
- Tailwind CSS IntelliSense 익스텐션 설치
- rem은 document 폰트 사이즈를 기준으로 하고 브라우저에 따른 사이즈를 달리 가질수 있게 해준다.
- rem을 사용하면 반응형 디자인을 하기가 아주 용이하다.
- flex flex-col에서 space를 사용하면 자식요소에 margin을 줄수 있다. space-y-5를 하면 hidden 되어있지 않은 모든 자식요소에 margin-top과 margin-bottom을 준다.(tailwind의 helper function)
- space-x-5에서 space는 자식 component의 좌우 margin을 알아서 계산해준다.
- peer modifier은 input의 state에 따라 span의 style을 변경시킬수 있다.
- peer은 peer selector보다 앞쪽에 위치해야한다.
- Tailwind CSS를 사용할 때는 모든 클래스네임이 모바일에 우선 적용되고 그 다음에 보다 큰 화면들을 위한 선택자가 있다.
- Responsive Modifiers -> sm, md, lg, xl, 2xl
- 반응형 modifier들은 그 다음 modifier들에 의해 정지돼야 한다.
- 기본값으로 다크모드는 컴퓨터의 환경 설정에 따라 활성화 되게 되어있다.
- 다크모드를 하기 위해 해야하는 건 dark 선택자를 적어주는것이 전부다.
- tailwind.config.js에서 darkmode설정이 media로 설정되어 있으면 다크모드 설정은 환경설정을 따라간다. 그러나 class로 바꾸면 브라우저와 컴퓨터가 다크모드임에도 불구하고 다크모드가 활성화되지 않는다.
- class방식에서 다크모드를 활성화하기 위해 필요한 조건은, 단지 dark: 선택자를 쓰는 요소의 부모요소에 dark 클래스네임을 추가하는 것 뿐이다.
- tailwind 3.0 버전이전에는 하나의 커다란 CSS파일이였다. 그리고 웹사이트를 배포하기전에 한가지 할일이 더 있었는데 바로 파일을 청소하는것이다. 그러니까 이전에는 웹사이트 배포를 위해 프로젝트를 빌드할때, 모든 파일의 코드를 스캔해서 CSS파일에 포함된 클래스명을 제외하고 나머지 사용하지 않는 클래스들을 전부 삭제했다. 이 과정을 purging이라고 부른다. 이러한 과정때문에 지금처럼 선택자들을 다른 선택자들의 위에 계속해서 쌓을수 있는 기능을 가지질 못했다.
- 지금은 Just-In-Time 컴파일러라는 것 때문에 가능하다. JIT 컴파일러라는건, 코드를 실시간으로 감시하면서 필요한 클래스를 생성하는 기능이다.

### TAILWIND PRACTICE

- Tailwind Forms라 불리는 코어 Plugin 설치
- Plugin은 기본적으로 Tailwind 환경에서 부가적인 기능을 더해주는데 어떤 코어, 핵심 Plugins들도 존재한다.
- heroicons.dev는 오직 svg들의 콜렉션이다. font-awesome과 같은것들처럼 install 할 필요가 없다.
- svg attribute path에 있는 stroke-linecap을 strokeLinecap으로 변경하기
- space-x-1은 div의 그 자식들에게 margin-right과 margin-left를 추가해준다.
- flex-1을 적용하면 다른 형제 요소보다 flex가 강해진다. flex-1을 적용하면 줄어드는걸 방지할수 있다.
- text-base는 기본적으로 text를 리셋해주는것이라고 생각하면 된다.
- divide는 어떤 요소의 옆에 형제 요소가 있으면 border를 넣어준다.
- absolute를 사용할때, 그 부모 컨테이너는 relative가 되어야한다.
- aspect-video는 자동으로 비디오의 비율 (aspect-ratio)을 준다.(16대9의 비율)
- aspect-square는 원을 만들때 사용할수 있다.(rounded-full 사용)
- 이전에는 너비와 높이를 지정했었는데 만약 높이를 신경쓰고 싶지 않다면 그냥 aspect-square를 쓰면된다.
- space를 사용하는 것이 각각의 요소에 margin을 지정하는 것보다 효율적이고 좋다.
- [key: string]: any;은 input에 원하는 prop을 전달하고 싶을때 사용한다.(required, max-length, password 같은 input의 type등 다 보낼수있다)

### DATABASE SETUP

- Prisma는 Node.js와 Typescript ORM(Object Relational Mapping)이다. 참고로 ERD는 Entity Relationship Diagram이다.
- Prisma를 사용하기 위해서는 먼저 Prisma에게 데이터베이스 어떻게 생겼는지 설명을 해줘야한다.(schema.prisma라는 파일에)
- Prisma는 데이터베이스와 상호작용을 할수 있게 해줄뿐아니라 client라는 것도 만들어주는데, client는 자동완성을 지원하기 때문에 아주 좋다.
- Prisma Studio는 아주 휼륭한 Visual Database Browser인데 데이터베이스를 위한 관리자 패널(Admin Panel)같은 것이다.
- 이번에는 MySQL을 사용할건데 PlanetScale이 MySQL과 호환되는 데이터베이스이다.
- Prisma Extension 설치 / Syntax highlight 같은 기능이 있어서 prisma 파일을 좀더 보기 좋게 만들어준다.
- `npm i prisma -D`
- `npx prisma init`

1. .env에 있는 데이터베이스 URL을 수정해야한다.
2. schema.prisma 파일에서 datasource의 provider(사용할 데이터베이스)를 설정한다.

- PlanetScale은 MySQL과 호환되는 serverless 데이터베이스 플랫폼이다.
- serverless는 우리가 서버를 관리하고, 유지보수할 필요가 없다는 뜻이다.
- Vitess는 가장 scaling 기능이 뛰어난 오픈소스 데이터베이스이다.
- Vitess는 유튜브를 scale하기 위해 구글이 만든것이다.
- `brew install planetscale/tap/pscale`
- `brew install mysql-client`
- `pscale auth login`
- `pscale region list`
- `pscale database create carrot-market --region ap-northeast`
- `pscale connect carrot-market`
- 한 객체가 다른 객체에 연결된 상태를 생성하려고 할때 그 연결을 받는 객체가 존재한다는 것을 보장하려고한다.
- Vitess는 그 부분을 보장해주지 않기때문에 Prisma를 통해서 해야한다.
- `npx prisma db push`
- `npx prisma studio`
- `npm i @prisma/client`
- **npx prisma generate**는 어떻게 코드로 데이터베이스에 말을 걸지 클라이언트를 생성해준다.
- prisma client는 생각하는 방식으로 구성하고 앱에 맞춤화된 유형으로 prisma 스키마에서 자동 생성되는 쿼리빌더이다.
- NextJS는 API를 만들기 위해 다른 서버를 구축할 필요가 없을 정도로 좋다.
- NextJS는 풀스택 앱을 만들기 위한 모든게 들어있는 아주 멋진 프레임워크이다.

### REACT HOOK FROM

- React Hook Form은 validation이나 에러, 이벤트 같은 필요한 기능들을 넣어서 form을 만들수 있게 해준다.
- `npm i react-hook-form`
- 위의 명령어가 실행되지 않는다면 현재의 리액트 버전과 맞지 않아서 그렇다.
- `npm i react-hook-form --legacy-peer-deps`
- register 함수는 input을 state와 연결시켜주는 역할을 한다.
- watch함수는 form을 말 그대로 '보게 해주는'함수이다.
- handleSubmit은 2개의 함수를 받는데 첫번째 함수는, form이 유효할 때만 실행되는 함수이다. 두번째 함수는 form이 유효하지 않을 때 실행되는 함수이다.
- Next.js에서는 req.body가 req의 인코딩을 기준으로 인코딩 된다는것을 알수있다.
- nextJS에서 api route를 만들때는 그 function을 export default 해야한다는것이다.
- 어떤 코드를 짜든 return 값은 nextJS가 실행할 function이어야한다.
- 먼저 function을 어떻게 쓸지 적고 그 다음에 세부사항을 구현하는게 좋다.

### AUTHENTICATION

- 인증은 유저가 누구인지 알아내는 것이고, 인가는 유저가 보려는 데이터에 접근 권한이 있는지를 알아내는것이다.
- **npx prisma db push**를 하면 db를 수정하는 동시에 prisma client를 새로 만들어준다.
- Twilio는 사람들에게 메세지를 보내기 위해 사용된다.
- Twilio를 사용하면 SMS를 통해 메세지를 보낼 수 있고 robocall 또는 폰 번호를 숨기는 기능도 있다.
- `npm install twilio`
- env파일을 수정하면 서버를 꼭 재시작해줘야 한다.
- 이메일 서비스를 위한 SendGrid
  https://sendgrid.com/solutions/email-api/
- `npm install --save @sendgrid/mail`
- iron session은 서명, 암호화된 쿠키를 사용하는 NodeJS 무상태 세션 도구다. (세션을 위한 백엔드를 구축할 필요가 없다.)
- JWT는 암호화되지 않고 서명이 되었을뿐이다.
- `npm install iron-session`

### Next, prisma, pscale

- `npm run dev`
- `pscale auth login`
- `pscale connect carrot-market`
- `npx prisma studio`

### AUTHORIZATION

- NextAuth는 Next.js에서 authentication 구현을 도와주는 패키지다. 설정만 하면 모든일 이보이지 않는곳에서 처리가 된다.
