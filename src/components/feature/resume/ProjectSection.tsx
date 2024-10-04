import { List } from "../../layout/List"
import { Line } from "../../shared/Line"
import { Text } from "../../shared/Text"
import { Title } from "../../shared/Title"

export const ProjectSection = () => {
  return (
    <article className="flex h-full flex-col gap-12">
      <Title variant="resume">프로젝트 경험.</Title>

      <section className="flex">
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
              부담되는 이들에게 하루 딱 한줄 만이라도 매일 쓰게 장려하고 추가적으로 간단한 할일 관리
              기능도 제공하는 자체 제작 서비스 입니다.
            </Text>
          </div>
          <div className="flex flex-col gap-2">
            <Title>주요 구현 기능</Title>
            <List className="list-inside list-disc">
              <Text as="div" className="flex flex-col gap-2">
                <List.Row>
                  어디서든 접근 가능한 하루 한줄 작성 기능 (모달 및 페이지 내 요소로 구현)
                </List.Row>
                <List.Row>1년치 기록을 한눈에 볼 수 있는 ‘잔디밭’ 형식의 시각화</List.Row>
                <List.Row>피드 형식의 타인의 글 열람, 좋아요 및 댓글 기능</List.Row>
                <List.Row>드래그 앤 드롭을 활용한 간단한 할일 관리 시스템</List.Row>
              </Text>
            </List>
          </div>
          <div className="flex flex-col gap-2">
            <Title>사용 기술</Title>
            <Text>TypeScript, Next.js (App Router), React, Tailwind, Supabase, ReactQuery</Text>
          </div>
        </div>
      </section>

      <section className="flex">
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
              정적 렌더링으로 블로그를 구축하려 했으나 CRUD에 대한 학습을 위해 동적 렌더링으로 구축
              하였습니다. 하지만 이후 개인 프로젝트를 추가로 개발하면서 기존의 계획대로 정적 형태의
              홈페이지로 수정하는게 올바른 방향이라 생각 되어 렌더링 방식을 수정할 계획입니다.
            </Text>
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
          <div className="flex flex-col gap-2">
            <Title>사용 기술</Title>
            <Text>TypeScript, Next.js (Page Router), React, Tailwind, Supabase, ReactQuery</Text>
          </div>
        </div>
      </section>

      <section className="flex">
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
            <Title>주요 구현 기능</Title>
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

      <section className="flex">
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
            <Title>주요 구현 기능</Title>
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
