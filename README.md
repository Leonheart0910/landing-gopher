# GopherSoft Landing Page

## Directory Structure
```
.
├── .github               # Github setting folder
├── .vscode               # VSCode setting folder
├── public                # Public folder
│   └── assets
│       └── images        # Images
├── src
│   ├── components        # all components
│   ├── pages             # Next JS pages
│   ├── styles            # PostCSS style folder with Tailwind
│   └── utils             # Utility folder
├── .eslintignore         # Ignore ESLint
├── .eslintrc             # ESLint settings
├── .gitignore            # Ignore Git commit
├── .nvmrc                # Specification of NPM
├── .prettierignore       # Ignore prettier
├── .prettierrc           # Formatting code setting
├── LICENSE               # License file
├── lint-staged.config.js # Lint information
├── next-env.d.ts         # NextJS environment definition file
├── next.config.js        # NextJS configuration
├── package-lock.json     # Same packages with others
├── package.json          # Package information
├── postcss.config.js     # PostCSS setting
├── SECURITY.md           # Security
├── README.md             # README file
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```


## Next.js

Next.js에서는 getStaticProps, getStaticPaths, getServerSideProps 등의 데이터 가져오기 함수를 사용하여 페이지의 데이터를 미리 불러오고,    
이를 페이지 컴포넌트의 props로 전달할 수 있습니다.

- getStaticProps: 빌드 시에 데이터를 가져와서 정적 페이지를 생성합니다. 정적 페이지는 한 번 빌드되면 내용이 변하지 않으며, 모든 요청에 대해 동일한 HTML을 제공합니다.

- getStaticPaths: 동적 라우팅을 사용하는 페이지에서 사용되며, 어떤 경로들을 미리 생성할지 정의합니다.

- getServerSideProps: 각 요청마다 서버에서 데이터를 가져와 페이지를 생성합니다. 이를 통해 동적인 페이지를 생성할 수 있습니다.


## Husky
husky는 Git 훅을 쉽게 관리할 수 있도록 도와주는 도구입니다. Git 훅은 Git 명령어가 실행될 때 자동으로 실행되는 스크립트입니다.   
예를 들어, pre-commit 훅은 커밋이 이루어지기 전에 자동으로 실행되어 코드의 문법 검사나 테스트를 실행할 수 있습니다.

"prepare": "husky install" 명령어는 프로젝트에 husky를 설치하고 초기화하는 명령어입니다.    
이 명령어는 npm install 명령어를 실행할 때 자동으로 실행되어 husky를 설치하고 초기화합니다.     
이렇게 하면 다른 개발자가 프로젝트를 클론하고 npm install 명령어를 실행할 때 자동으로 husky가 설치되어 Git 훅을 사용할 수 있게 됩니다.


## postcss.config.js
postcss.config.js 파일은 PostCSS의 설정을 정의하는 파일입니다. 여기에 명시된 플러그인들은 PostCSS가 CSS 파일을 처리할 때 사용됩니다.

- tailwindcss: Tailwind CSS를 사용하기 위한 플러그인입니다.
- autoprefixer: CSS에 자동으로 벤더 프리픽스를 추가해주는 플러그인입니다.
- cssnano: 프로덕션 환경에서 CSS 파일의 크기를 최소화하기 위한 플러그인입니다.

따라서, 위의 설정은 Tailwind CSS를 사용하고, CSS 파일에 자동으로 벤더 프리픽스를 추가하며, 프로덕션 환경에서 CSS 파일의 크기를 최소화하기 위한 것입니다. 이러한 기능들이 프로젝트에 필요하다면 postcss.config.js 파일이 필요합니다. 반면, 이러한 기능들이 필요하지 않다면 postcss.config.js 파일을 삭제하거나 수정할 수 있습니다.


## @next/bundle-analyzer
- https://www.npmjs.com/package/@next/bundle-analyzer
- 번들 파일이 어떻게 구성되었는지 쉽게 파악하게 해주는 시각화 도구
