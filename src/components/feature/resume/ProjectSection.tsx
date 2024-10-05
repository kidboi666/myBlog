import { List } from "../../layout/List"
import { Line } from "../../shared/Line"
import { Text } from "../../shared/Text"
import { Title } from "../../shared/Title"

export const ProjectSection = () => {
  return (
    <article className="flex h-full flex-col gap-16">
      <Title variant="resume">프로젝트 경험.</Title>

      <section className="flex flex-col gap-12">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="w-[300px]">
            <Title>하루한줄</Title>
            <Text>개인 프로젝트</Text>
            <Text variant="caption">2024. 09 - 진행중</Text>
          </div>
          <div className="flex w-full flex-col gap-8">
            <div className="flex flex-col gap-2">
              <Title>설명</Title>
              <Text>
                매일 하루 하나의 글쓰기 루틴을 하고자 하는 사람에게, 글 이라는 매체가 너무 막연하여
                부담되는 이들에게 하루 딱 한줄 만이라도 매일 쓰게 장려하고 추가적으로 간단한 할일
                관리 기능도 제공하는 자체 제작 서비스 입니다.
              </Text>
            </div>
            <div className="flex flex-col gap-2">
              <Title>사용 기술</Title>
              <Text as="div">
                <List className="flex list-inside list-disc flex-col gap-4">
                  <List.Row>
                    TypeScript : 사용자의 다양한 상호작용이 필요한 서비스 이기에 상호 작용 안에서
                    오고갈 다양한 데이터의 자료형을 명확히 할 필요가 있기에 사용 하였습니다. (1인
                    개발이기에 과도한 린트는 지양 하였습니다.)
                  </List.Row>
                  <List.Row>
                    React : 컴포넌트라는 개념을 깊이 이해하고자, 다양한 방식의 컴포넌트 형식을
                    학습하고 또 적응하기 위해 사용하였습니다.
                  </List.Row>
                  <List.Row>
                    Next.js (App Router) : 서버 컴포넌트 라는 개념과 수많은 파일 컨벤션 등이
                    스피드와 효율이 중요한 1인 개발이라는 특성에 잘 맞는것 같아 사용하였습니다.
                  </List.Row>
                  <List.Row>
                    ReactQuery : App Router의 캐싱 시스템으로 대체해볼까 싶었지만, 적극적인 SSR 관련
                    기능 지원과 데이터 관리의 효율을 위해 사용하였습니다.
                  </List.Row>
                  <List.Row>
                    Tailwind : 1인 개발에서 중요한 스피드를 최대 강점으로 가지고 있다고 생각해
                    사용하였습니다.
                  </List.Row>
                  <List.Row>
                    supabase : 서비스에 필요한 서버 구축을 위해 DB와 File Storage 기능들을 자체 제공
                    되는 JavaScript 라이브러리를 통해 DB를 구축하였습니다.
                  </List.Row>
                </List>
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Title>주요 구현 기능</Title>
          <Text as="div">
            <List className="flex list-inside list-disc flex-col gap-4">
              <List.Row>작성한 하루 한줄의 기록을 1년 치 만큼 한눈에 볼 수 있습니다.</List.Row>
              <List className="ml-4 list-inside list-[circle]">
                <List.Row>잔디밭의 시작 위치 구현</List.Row>
              </List>
              <List className="ml-8 list-inside list-[square]">
                <List.Row>
                  1월 1일의 요일 값을 구하고, 일요일에서 떨어진 만큼 빈 블럭을 채움
                </List.Row>
              </List>
              <List className="ml-4 list-inside list-[circle]">
                <List.Row>각 월 단위의 정확한 위치 구현</List.Row>
              </List>
              <List className="ml-8 list-inside list-[square]">
                <List.Row>
                  각 월의 1일 위치에 단위를 렌더링 하고, 해당 날짜의 요일 * 블럭 크기 만큼 상단으로
                  올려줌
                </List.Row>
              </List>
              <List className="ml-4 list-inside list-[circle]">
                <List.Row>잔디밭의 시작 위치 구현</List.Row>
              </List>
              <List className="ml-8 list-inside list-[square]">
                <List.Row>
                  1월 1일의 요일 값을 구하고, 일요일에서 떨어진 만큼 빈 블럭을 채움
                </List.Row>
              </List>

              <List.Row className="mt-4">
                작성한 게시물 안에서 가장 많이 사용한 단어들을 모아서 볼 수 있습니다.
              </List.Row>
              <List className="ml-4 list-inside list-[circle]">
                <List.Row>단어 구분 로직 구현</List.Row>
              </List>
              <List className="ml-8 list-inside list-[square]">
                <List.Row>
                  db에 단어 사전과 같은 테이블을 만들고, 해당 db 정보를 통해 사용 횟수 2회를 넘긴
                  단어들만 순서대로 화면에 출력하는 식으로 구현
                </List.Row>
              </List>

              <List.Row className="mt-4">ui 조작에 부드러운 애니메이션을 추가 하였습니다.</List.Row>
              <List className="ml-4 list-inside list-[circle]">
                <List.Row>언마운트 애니메이션 로직 개선</List.Row>
              </List>
              <List className="ml-8 list-inside list-[square]">
                <List.Row>
                  setTimeout으로 언마운트 타이밍을 수동으로 일일이 지정해 코드가 지저분해 지는 문제
                  → onTransitionEnd 속성을 이용해 요소가 사라지는 애니메이션이 끝나는 순간을
                  감지하여 언마운트 하도록 개선
                </List.Row>
              </List>
              <List className="ml-4 list-inside list-[circle]">
                <List.Row>리렌더링 없는 애니메이션 로직 개선</List.Row>
              </List>
              <List className="ml-8 list-inside list-[square]">
                <List.Row>
                  기존의 방식은 상태를 변경하여 언마운트 시키는 방식이라 불필요한 리렌더링이 발생 →
                  비표준 속성을 이용해 리렌더링이 필요없는 로직으로 개선
                </List.Row>
              </List>
            </List>
          </Text>
        </div>

        <div className="flex flex-col gap-4">
          <Title>그외 마주한 문제</Title>
          <Text as="div">
            <List className="flex list-inside list-disc flex-col gap-4">
              <List.Row>
                특정 Link를 클릭할 경우 페이지 이동이 개발 환경에선 정상 작동하나 프로덕션 환경에선
                페이지를 찾지 못하는 에러.
              </List.Row>
              <List.Row className="ml-4 list-inside list-[circle]">
                평행 라우팅으로 라우트 되던 페이지에 중복되는 Layout 파일이 있어 해당 파일과 라우팅
                충돌이 있던걸로 추측, 해당 Layout 파일을 삭제하여 문제를 해결할 수 있었습니다.
              </List.Row>
            </List>
          </Text>
        </div>
      </section>

      <Line dot />

      <section className="flex flex-col gap-12">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="w-[300px]">
            <Title>기술 블로그</Title>
            <Text>개인 프로젝트</Text>
            <Text variant="caption">2024. 08 - 진행중</Text>
          </div>
          <div className="flex w-full flex-col gap-8">
            <div className="flex flex-col gap-2">
              <Title>설명</Title>
              <Text>
                저의 기술적 고민을 기록하기 위해 직접 구축한 블로그 입니다. 마크 다운 뷰어를 이용한
                정적 렌더링으로 블로그를 구축하려 했으나 CRUD에 대한 학습을 위해 동적 렌더링으로
                구축 하였습니다. 하지만 이후 개인 프로젝트를 추가로 개발하면서 기존의 계획대로 정적
                형태의 홈페이지로 수정하는게 올바른 방향이라 생각 되어 렌더링 방식을 수정할
                계획입니다.
              </Text>
            </div>
            <div className="flex flex-col gap-2">
              <Title>사용 기술</Title>
              <Text as="div">
                <List className="flex list-inside list-disc flex-col gap-4">
                  <List.Row>
                    TypeScript : 다양한 타입 에러를 미연에 방지하고자 사용 하였습니다.
                  </List.Row>
                  <List.Row>
                    React : 컴포넌트라는 개념을 깊이 이해하고자, 다양한 방식의 컴포넌트 형식을
                    학습하고 또 적응하기 위해 사용하였습니다.
                  </List.Row>
                  <List.Row>
                    Next.js (Page Router) : 정적 페이지를 많이 가지게 될 블로그 특성상 자동으로 정적
                    페이지의 최적화를 구현해주는 Next를 사용하게 되었습니다.
                  </List.Row>
                  <List.Row>
                    ReactQuery : 데이터의 캐시 처리를 보다 쉽게 구현하고자 선택 하였습니다.
                  </List.Row>
                  <List.Row>
                    Tailwind : 1인 개발에서 중요한 스피드를 최대 강점으로 가지고 있다고 생각해
                    사용하였습니다.
                  </List.Row>
                  <List.Row>
                    supabase : 서비스에 필요한 서버 구축을 위해 DB와 File Storage 기능들을 자체 제공
                    되는 JavaScript 라이브러리를 통해 DB를 구축하였습니다.
                  </List.Row>
                </List>
              </Text>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Title>주요 구현 기능</Title>
          <List className="list-inside list-disc">
            <Text as="div" className="flex flex-col gap-2">
              <List.Row>마크 다운을 통해 게시물 게시 기능 구현</List.Row>
              <List.Row>포스트에 기본적인 댓글 기능과 대댓글 기능 구현</List.Row>
              <List.Row>supabase를 통한 간단한 CRUD 기능 구현</List.Row>
            </Text>
          </List>
        </div>
      </section>

      <Line dot />

      <section className="flex flex-col gap-12 md:flex-row">
        <div className="w-[300px]">
          <Title>Mogazoa</Title>
          <Text>코드잇 팀 프로젝트</Text>
          <Text variant="caption">2024. 07 - 2024. 08</Text>
        </div>
        <div className="flex w-full flex-col gap-8">
          <div className="flex flex-col gap-2">
            <Title>설명</Title>
            <Text>각종 상품에 대한 리뷰를 나누고 기록하는 플랫폼 입니다.</Text>
          </div>
          <div className="flex flex-col gap-2">
            <Title>내가 한 일</Title>
            <List className="list-inside list-disc">
              <Text as="div" className="flex flex-col gap-2">
                <List.Row>
                  기관에서 제공한 엔드 포인트로 로그인 회원가입을 구현하고 소셜 로그인시 토큰 처리와
                  리다이렉트 동작을 직접 코드로 작성하여 구현
                </List.Row>
                <List.Row>공통 컴포넌트인 버튼 컴포넌트를 테일윈드를 사용하여 구현</List.Row>
              </Text>
            </List>
          </div>
          <div className="flex flex-col gap-2">
            <Title>사용 기술</Title>
            <Text>TypeScript, React, Tailwind, Next.js (Page Router), ReactQuery, ShadcnUi</Text>
          </div>
        </div>
      </section>

      <Line dot />

      <section className="flex flex-col gap-12 md:flex-row">
        <div className="w-[300px]">
          <Title>Taskuit</Title>
          <Text>코드잇 팀 프로젝트</Text>
          <Text variant="caption">2024. 05 - 2024. 06</Text>
        </div>
        <div className="flex w-full flex-col gap-8">
          <div className="flex flex-col gap-2">
            <Title>설명</Title>
            <Text>일정 관리 서비스를 제공하는 플랫폼 입니다.</Text>
          </div>
          <div className="flex flex-col gap-2">
            <Title>내가 한 일</Title>
            <List className="list-inside list-disc">
              <Text as="div" className="flex flex-col gap-2">
                <List.Row>
                  공통 컴포넌트인 Modal과 Toast의 기본 동작 로직과 등장 애니메이션을 직접 구현{" "}
                </List.Row>
                <List.Row>
                  프로젝트에 리덕스 툴킷을 도입하여 전역 관리가 필요하다 판단된 데이터를 전역으로
                  관리하도록 마이그레이션
                </List.Row>
                <List.Row>
                  기관에서 제공한 엔드 포인트에 없던 태그 색상 부분을 몽고DB의 API를 직접 구축하여
                  태그 색상을 바꾸는 기능을 추가
                </List.Row>
              </Text>
            </List>
          </div>
          <div className="flex flex-col gap-2">
            <Title>사용 기술</Title>
            <Text>
              TypeScript, React, Tailwind, Redux Toolkit, Next.js (Page Router), Airbnb Lint
            </Text>
          </div>
        </div>
      </section>
      <Line />
    </article>
  )
}
