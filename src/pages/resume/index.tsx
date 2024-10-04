import { Header } from "@/src/components/feature/nav"
import { AppLayout } from "@/src/components/layout/AppLayout"
import { Container } from "@/src/components/layout/Container"
import { Footer } from "@/src/components/layout/Footer"
import { List } from "@/src/components/layout/List"
import { Line } from "@/src/components/shared/Line"
import { Text } from "@/src/components/shared/Text"
import { Title } from "@/src/components/shared/Title"

const ResumePage = () => {
  return (
    <AppLayout Header={<Header />} Footer={<Footer />}>
      <Container variant="post" className="gap-16">
        <div className="flex flex-col gap-4">
          <Title variant="resume">
            안녕하세요, <br />
            저는 이진욱 입니다.
          </Title>
          <Text>
            머물러 있지 않고 성장하는 개발자가 되고 싶습니다. 빠르게 변화하는 프론트엔드 기술을 새로
            배워나가는 것을 좋아하며 그만큼 성장하는 것에 희열을 느낍니다. 작고 아기자기한, 그러나
            사용 경험에 자연스러움이 묻어나는 UI를 추구합니다.
          </Text>
        </div>

        <Line />

        <Title variant="resume">프로젝트 경험.</Title>
        <article className="flex">
          <section className="w-[300px]">
            <Title>하루 한줄</Title>
            <Text>개인 프로젝트</Text>
            <Text variant="caption">2024. 09 - 진행중</Text>
          </section>
          <section className="flex w-full flex-col gap-8">
            <div>
              <Title>설명</Title>
              <Text>
                매일 하루 하나의 글쓰기 루틴을 하고자 하는 사람에게, 글 이라는 매체가 너무 막연하여
                부담되는 이들에게 하루 딱 한줄 만이라도 매일 쓰게 장려하고 추가적으로 간단한 할일
                관리 기능도 제공하는 자체 제작 서비스 입니다.
              </Text>
            </div>
            <div>
              <Title>주요 구현 기능</Title>
              <Text>하루 한줄 주요 기능 구현 설명</Text>
            </div>
            <div>
              <Title>사용 기술</Title>
              <Text>TypeScript, Next.js (App Router), React, Tailwind, Supabase, ReactQuery</Text>
            </div>
          </section>
        </article>

        <article className="flex">
          <section className="w-[300px]">
            <Title>기술 블로그</Title>
            <Text>개인 프로젝트</Text>
            <Text variant="caption">2024. 08 - 진행중</Text>
          </section>
          <section className="flex w-full flex-col gap-8">
            <div>
              <Title>설명</Title>
              <Text>
                저의 기술적 고민을 기록하기 위해 직접 구축한 블로그 입니다. 마크 다운 뷰어를 이용한
                정적 렌더링으로 블로그를 구축하려 했으나 CRUD에 대한 학습을 위해 동적 렌더링으로
                구축 하였습니다. 하지만 이후 개인 프로젝트를 추가로 개발하면서 기존의 계획대로 정적
                형태의 홈페이지로 수정하는게 올바른 방향이라 생각 되어 렌더링 방식을 수정할
                계획입니다.
              </Text>
            </div>
            <div>
              <Title>주요 구현 기능</Title>
              <List className="list-disc">
                <List.Row>
                  <Text>마크 다운을 통해 게시물 게시 기능 구현</Text>
                </List.Row>
                <List.Row>
                  <Text>포스트에 기본적인 댓글 기능과 대댓글 기능 구현</Text>
                </List.Row>
                <List.Row>
                  <Text>supabase를 통한 간단한 CRUD 기능 구현</Text>
                </List.Row>
              </List>
            </div>
            <div>
              <Title>사용 기술</Title>
              <Text>TypeScript, Next.js (Page Router), React, Tailwind, Supabase, ReactQuery</Text>
            </div>
          </section>
        </article>

        <article className="flex">
          <section className="w-[300px]">
            <Title>Mogazoa</Title>
            <Text>코드잇 팀 프로젝트</Text>
            <Text variant="caption">2024. 07 - 2024. 08</Text>
          </section>
          <section className="flex w-full flex-col gap-8">
            <div>
              <Title>설명</Title>
              <Text>각종 상품에 대한 리뷰를 나누고 기록하는 플랫폼 입니다.</Text>
            </div>
            <div>
              <Title>주요 구현 기능</Title>
              <List className="list-disc">
                <List.Row>
                  <Text>
                    기관에서 제공한 엔드 포인트로 로그인 회원가입을 구현하고 소셜 로그인시 토큰
                    처리와 리다이렉트 동작을 직접 코드로 작성하여 구현
                  </Text>
                </List.Row>
                <List.Row>
                  <Text>공통 컴포넌트인 버튼 컴포넌트를 테일윈드를 사용하여 구현</Text>
                </List.Row>
              </List>
            </div>
            <div>
              <Title>사용 기술</Title>
              <Text>TypeScript, React, Tailwind, Next.js (Page Router), ReactQuery, ShadcnUi</Text>
            </div>
          </section>
        </article>

        <article className="flex">
          <section className="w-[300px]">
            <Title>Taskuit</Title>
            <Text>코드잇 팀 프로젝트</Text>
            <Text variant="caption">2024. 05 - 2024. 06</Text>
          </section>
          <section className="flex w-full flex-col gap-8">
            <div>
              <Title>설명</Title>
              <Text>일정 관리 서비스를 제공하는 플랫폼 입니다.</Text>
            </div>
            <div>
              <Title>주요 구현 기능</Title>
              <List className="list-disc">
                <List.Row>
                  <Text>
                    공통 컴포넌트인 Modal과 Toast의 기본 동작 로직과 등장 애니메이션을 직접 구현{" "}
                  </Text>
                </List.Row>
                <List.Row>
                  <Text>
                    프로젝트에 리덕스 툴킷을 도입하여 전역 관리가 필요하다 판단된 데이터를 전역으로
                    관리하도록 마이그레이션
                  </Text>
                </List.Row>
                <List.Row>
                  <Text>
                    기관에서 제공한 엔드 포인트에 없던 태그 색상 부분을 몽고DB의 API를 직접 구축하여
                    태그 색상을 바꾸는 기능을 추가
                  </Text>
                </List.Row>
              </List>
            </div>
            <div>
              <Title>사용 기술</Title>
              <Text>
                TypeScript, React, Tailwind, Redux Toolkit, Next.js (Page Router), Airbnb Lint
              </Text>
            </div>
          </section>
        </article>

        <Line />

        <Title variant="resume">기타 활동.</Title>
        <article>
          <Title as="h3">코드잇 스프린트 프론트엔드 과정</Title>
          <Text>프론트엔드 부트캠프 비대면 수업 과정으로 3번의 팀 프로젝트 경험</Text>
          <Text variant="caption">2024.02 - 2024.08</Text>
        </article>

        <Line />

        <Title variant="resume">자기 소개.</Title>
        <article className="flex flex-col gap-4">
          <Title as="h3">&ldquo;작은 문제에서 시작된 성장&rdquo;</Title>
          <Text>
            팀 프로젝트 중 백엔드에 있어야할 엔드포인트가 하나 빠져있다는 걸 알게됬을 때 대부분은
            그것을 우선순위에서 밀어냈습니다. db의 지식이 필요하기에 프론트 지식만 있던 우리 팀에겐
            역부족이였습니다. 하지만 이렇게 포기하기엔 아쉬워 관련 기술을 스스로 학습하기
            시작했습니다. 새로운 기술을 배우는 데 거리낌이 없었던 저는 문제 해결을 위해 프론트와
            백을 가리지 않고 학습하며 도전을 이어갔습니다.
          </Text>
          <Text as="h3">
            이 과정에서 저는 도파민의 긍정적인 작용을 이용해 의도적으로 성취감에 중독될 수
            있었습니다. 사소한 성과일지라도 매일 조금씩 문제를 해결하면서 자신에게 보상을 주었고,
            어려운 과제를 해결하여 폭포수처럼 도파민이 쏟아지는 순간만을 상상하며 끝까지 기능 구현에
            임했습니다. 결국 관련 기능을 추가할 수 있었고 프로젝트의 원할한 진행에 기여할 수
            있었습니다.
          </Text>

          <Title as="h3">&ldquo;문제 해결을 위한 도구&rdquo;</Title>
          <Text>
            저는 스스로를 문제 해결을 위한 도구라고 생각합니다. 어떤 집단이 특정 문제의 해결을
            원한다면, 그에 필요한 지식을 신속히 습득하고 활용하여 해결책을 제시할 수 있습니다.
            끊임없는 노력과 집요함은 제가 보유한 가장 강력한 기술 중 하나입니다.
          </Text>
        </article>

        <Line />
        <Title variant="resume">기술 역량.</Title>
        <article className="flex flex-col gap-8">
          <section className="flex flex-col gap-4">
            <Title as="h3">HTML & CSS</Title>
            <List className="list-disc">
              <List.Row>
                <Text>
                  시맨틱에 대한 지식을 꾸준히 학습하여 접근성에 관한 지식을 가지려 노력하고
                  있습니다.
                </Text>
              </List.Row>
              <List.Row>
                <Text>grid와 flex를 사용하여 반응형 작업을 모든 프로젝트에 적용하였습니다.</Text>
              </List.Row>
            </List>
          </section>
          <section className="flex flex-col gap-4">
            <Title as="h3">JavaScript</Title>
            <List className="list-disc">
              <List.Row>
                <Text>매일 아침 10분씩 기본기에 해당하는 자바스크립트 학습을 꾸준히 합니다.</Text>
              </List.Row>
              <List.Row>
                <Text>
                  Promise를 사용하여 데이터 요청, 코드 실행을 정해진 시간동안 잠시 미루는 등의
                  간단한 비동기 작업들을 구현할 수 있습니다.
                </Text>
              </List.Row>
              <List.Row>
                <Text>IntersectionObserver를 통해 무한 스크롤을 구현할 수 있습니다.</Text>
              </List.Row>
            </List>
          </section>
          <section className="flex flex-col gap-4">
            <Title as="h3">React</Title>
            <List className="list-disc">
              <List.Row>
                <Text>
                  기본적인 훅 사용법과 함수형 컴포넌트 의 생명 주기에 대한 지식이 있습니다.
                </Text>
              </List.Row>
              <List.Row>
                <Text>
                  간단한 기능은 커스텀 훅 으로 분리하고 필요하다면 함수를 메모이제이션 합니다.
                </Text>
              </List.Row>
              <List.Row>
                <Text>
                  Suspense와 ErrorBoundary를 이용해 예외 처리와 간단한 로딩 처리를 할 수 있습니다.
                </Text>
              </List.Row>
            </List>
          </section>
          <section className="flex flex-col gap-4">
            <Title as="h3">Next.js</Title>
            <List className="list-disc">
              <List.Row>
                <Text>
                  로그인후 새로고침시 마치 로그인 상태가 풀렸다 다시 되는듯한 모습을 SSR을 이용하여
                  일관되게 유지되도록 구현해본 경험이 있습니다.
                </Text>
              </List.Row>
              <List.Row>
                <Text>
                  middleware를 사용하여 로그인 상태에 따른 접근이 가능한, 불가능한 페이지의 대한
                  리다이렉션 동작을 구현해본 경험이 있습니다.
                </Text>
              </List.Row>
              <List.Row>
                <Text>
                  App Router의 각종 라우팅 기술들을 이용하여 components 폴더에 쌓아두던 모달을
                  라우팅 폴더 안에서 관심사별로 관리할 수 있었습니다.
                </Text>
              </List.Row>
              <List.Row>
                <Text>
                  직접 Suspense 로 감싸는 식으로만 관리하던 로딩을 loading.js 파일을 이용해 패러럴
                  라우팅과 같은 특별한 경우에 한해서는 로딩 처리를 따로 관리하는 등, 보다 상황에
                  맞는 유연한 로딩 처리를 할 수 있습니다.
                </Text>
              </List.Row>
            </List>
          </section>
          <section className="flex flex-col gap-4">
            <Title as="h3">Supabase</Title>
            <List className="list-disc">
              <List.Row>
                <Text>
                  트리거 함수를 이용해 특정 테이블의 로우가 변하면 특정 함수의 값이 변하도록 db를
                  구축해본 경험이 있습니다.
                </Text>
              </List.Row>
              <List.Row>
                <Text>
                  supabase auth의 회원 정보를 참조하는 테이블을 만들어 추후 서비스의 변화에 대응할
                  수 있는 테이블을 만들어본 경험이 있습니다.
                </Text>
              </List.Row>
            </List>
          </section>
          <section className="flex flex-col gap-4">
            <Title as="h3">ReactQuery</Title>
            <List className="list-disc">
              <List.Row>
                <Text>
                  보일러 플레이트를 줄이기 위해 최상단 앱 컴포넌트에서 하이드레이션 바운더리로
                  감싸고 queryOption 메소드를 이용해 SSR 함수에서의 코드 길이를 단축시키기 위해 공식
                  문서를 자주 탐독한 경험이 있습니다.
                </Text>
              </List.Row>
              <List.Row>
                <Text>
                  로그인시 불규칙적으로 일어나는 하이드레이션 에러를 바로잡기 위해 SSR 에서의 잘못된
                  로직 (토큰이 있으면 사용자의 정보를 내려주고, 토큰이 없으면 캐싱되 있는 사용자의
                  정보를 삭제하는 로직을 추가) 을 바로잡은 경험이 있습니다.
                </Text>
              </List.Row>
            </List>
          </section>
          <section className="flex flex-col gap-4">
            <Title as="h3">Axios</Title>
            <List className="list-disc">
              <List.Row>
                <Text>
                  Interceptor 기능을 이용해 AccessToken과 RefreshToken으로 사용자의 로그인 상태를
                  유지해본 경험이 있습니다.
                </Text>
              </List.Row>
            </List>
          </section>
          <section className="flex flex-col gap-4">
            <Title as="h3">Web</Title>
            <List className="list-disc">
              <List.Row>
                <Text>
                  LocalStorage를 통해 사용자 검색 기록을 관리하여 최근 검색 내역을 볼 수 있는 기능을
                  구현 했었습니다.
                </Text>
              </List.Row>
              <List.Row>
                <Text>
                  Cookie를 사용하여 서버에서 전달해주는 AccessToken을 이용해 로그인을 기능을 구현
                  해보았습니다. Cookie에 존재하는 간단한 보안 옵션들을 사용한 경험이 있습니다.
                </Text>
              </List.Row>
            </List>
          </section>
          <section className="flex flex-col gap-4">
            <Title as="h3">TypeScript</Title>
            <List className="list-disc">
              <List.Row>
                <Text>
                  유니온 타입과 인터섹션 타입과 같은 간단한 타입 연산자로 타입핑이 가능합니다.
                </Text>
              </List.Row>
              <List.Row>
                <Text>
                  유틸리티 타입(Omit, Pick, Record, Partial 등)을 이용하여 보다 유동성있게 타입핑이
                  가능합니다.
                </Text>
              </List.Row>
            </List>
          </section>
          <section className="flex flex-col gap-4">
            <Title as="h3">ETC</Title>
            <List className="list-disc">
              <List.Row>
                <Text>
                  ReduxToolkit을 사용할 수 있습니다. 기본 내장되 있는 ReduxThunk로 비동기 요청을
                  하여 데이터를 전역에서 관리해본 경험이 있습니다.
                </Text>
              </List.Row>
              <List.Row>
                <Text>
                  ReactHookForm과 zod를 사용할 수 있습니다. 회원가입,로그인 페이지 작업에 사용,
                  간단한 기본 메소드부터 setError를 이용한 커스텀 예외 처리까지 구현한 경험이
                  있습니다
                </Text>
              </List.Row>
              <List.Row>
                <Text>
                  구글과 카카오 로그인 연동 기능을 Next의 api 라우터로 구현한 경험이 있습니다.
                  RedirectURI를 api 라우터의 oauth페이지로 설정해 해당 페이지에서 인가코드로 엑세스
                  토큰을 받는등의 과정을 구현하였습니다. 보다 확실히 학습하기 위해 라이브러리 없이
                  REST API만으로 구현해 보았습니다. (데이터 페칭에 axios는 사용하였습니다)
                </Text>
              </List.Row>
            </List>
          </section>
        </article>

        <Line />

        <Title variant="resume">연락처.</Title>
        <article>
          <List className="list-disc">
            <List.Row>
              <Text>HP : 010-9383-4485</Text>
            </List.Row>
            <List.Row>
              <Text>e-mail : sleepnowinthefire66@gmail.com</Text>
            </List.Row>
            <List.Row>
              <Text>Github : https://github.com/kidboi666</Text>
            </List.Row>
          </List>
        </article>
      </Container>
    </AppLayout>
  )
}

export default ResumePage
