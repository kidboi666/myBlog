import { List } from "../../layout/List"
import { Line } from "../../shared/Line"
import { Text } from "../../shared/Text"
import { Title } from "../../shared/Title"

export const SkillsSection = () => {
  return (
    <article className="flex flex-col gap-12">
      <Title variant="resume">기술 역량.</Title>
      <section className="flex flex-col gap-4">
        <Title as="h3">HTML & CSS</Title>
        <List className="list-inside list-disc">
          <Text as="div" className="flex flex-col gap-2">
            <List.Row>
              시맨틱에 대한 지식을 꾸준히 학습하여 접근성에 관한 지식을 가지려 노력하고 있습니다.
            </List.Row>
            <List.Row>
              grid와 flex를 사용하여 반응형 작업을 모든 프로젝트에 적용하였습니다.
            </List.Row>
          </Text>
        </List>
      </section>
      <section className="flex flex-col gap-4">
        <Title as="h3">JavaScript</Title>
        <List className="list-inside list-disc">
          <Text as="div" className="flex flex-col gap-2">
            <List.Row>
              매일 아침 10분씩 기본기에 해당하는 자바스크립트 학습을 꾸준히 합니다.
            </List.Row>
            <List.Row>
              Promise를 사용하여 데이터 요청, 코드 실행을 정해진 시간동안 잠시 미루는 등의 간단한
              비동기 작업들을 구현할 수 있습니다.
            </List.Row>
          </Text>
        </List>
      </section>
      <section className="flex flex-col gap-4">
        <Title as="h3">React</Title>
        <List className="list-inside list-disc">
          <Text as="div" className="flex flex-col gap-2">
            <List.Row>
              기본적인 훅 사용법과 함수형 컴포넌트 의 생명 주기에 대한 지식이 있습니다.
            </List.Row>
            <List.Row>간단한 기능은 커스텀 훅 으로 분리할 수 있습니다.</List.Row>
            <List.Row>
              Suspense와 ErrorBoundary를 이용해 예외 처리와 간단한 로딩 처리를 할 수 있습니다.
            </List.Row>
          </Text>
        </List>
      </section>
      <section className="flex flex-col gap-4">
        <Title as="h3">Next.js</Title>
        <List className="list-inside list-disc">
          <Text as="div" className="flex flex-col gap-2">
            <List.Row>
              middleware를 사용하여 로그인 상태에 따른 접근이 가능한, 불가능한 페이지의 대한
              리다이렉션 동작을 구현해본 경험이 있습니다.
            </List.Row>
            <List.Row>
              App Router의 각종 라우팅 기술들을 이용하여 components 폴더에 쌓아두던 모달을 라우팅
              폴더 안에서 관심사별로 관리할 수 있었습니다.
            </List.Row>
            <List.Row>
              직접 Suspense 로 감싸는 식으로만 관리하던 로딩을 loading.js 파일을 이용해 패러럴
              라우팅과 같은 특별한 경우에 한해서는 로딩 처리를 따로 관리하는 등, 보다 상황에 맞는
              유연한 로딩 처리를 할 수 있습니다.
            </List.Row>
          </Text>
        </List>
      </section>
      <section className="flex flex-col gap-4">
        <Title as="h3">Supabase</Title>
        <List className="list-inside list-disc">
          <Text as="div" className="flex flex-col gap-2">
            <List.Row>
              트리거 함수를 이용해 특정 테이블의 로우가 변하면 특정 함수의 값이 변하도록 db를
              구축해본 경험이 있습니다.
            </List.Row>
            <List.Row>
              supabase auth의 회원 정보를 참조하는 테이블을 만들어 추후 서비스의 변화에 대응할 수
              있는 테이블을 만들어본 경험이 있습니다.
            </List.Row>
          </Text>
        </List>
      </section>
      <section className="flex flex-col gap-4">
        <Title as="h3">ReactQuery</Title>
        <List className="list-inside list-disc">
          <Text as="div" className="flex flex-col gap-2">
            <List.Row>
              보일러 플레이트를 줄이기 위해 최상단 앱 컴포넌트에서 하이드레이션 바운더리로 감싸고
              queryOption 메소드를 이용해 SSR 함수에서의 코드 길이를 단축시키기 위해 공식 문서를
              자주 탐독한 경험이 있습니다.
            </List.Row>
            <List.Row>
              로그인시 불규칙적으로 일어나는 하이드레이션 에러를 바로잡기 위해 SSR 에서의 잘못된
              로직 (토큰이 있으면 사용자의 정보를 내려주고, 토큰이 없으면 캐싱되 있는 사용자의
              정보를 삭제하는 로직을 추가) 을 바로잡은 경험이 있습니다.
            </List.Row>
          </Text>
        </List>
      </section>
      <section className="flex flex-col gap-4">
        <Title as="h3">Web</Title>
        <List className="list-inside list-disc">
          <Text as="div" className="flex flex-col gap-2">
            <List.Row>
              LocalStorage를 통해 사용자 검색 기록을 관리하여 최근 검색 내역을 볼 수 있는 기능을
              구현 했었습니다.
            </List.Row>
            <List.Row>
              Cookie를 사용하여 서버에서 전달해주는 AccessToken을 이용해 로그인을 기능을 구현
              해보았습니다. Cookie에 존재하는 간단한 보안 옵션들을 사용한 경험이 있습니다.
            </List.Row>
            <List.Row>
              구글과 카카오 로그인 연동 기능을 Next의 api 라우터로 구현한 경험이 있습니다.
              RedirectURI를 api 라우터의 oauth페이지로 설정해 해당 페이지에서 인가코드로 엑세스
              토큰을 받는등의 과정을 구현하였습니다. 보다 확실히 학습하기 위해 라이브러리 없이 REST
              API만으로 구현해 보았습니다. (데이터 페칭에 axios는 사용하였습니다)
            </List.Row>
          </Text>
        </List>
      </section>

      <Line />
    </article>
  )
}
