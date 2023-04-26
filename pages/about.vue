<template>
  <div class="flex flex-col lg:flex-row md:items-start items-center p-6 md:p-8">
    <div class="flex-shrink-0 mb-6 lg:mb-0 mr-0 lg:mr-8">
      <img
        class="object-cover md:w-[300px] w-[200px] aspect-square rounded-full"
        :src="'/image/profile/pinichi.png'"
      />
    </div>
    <div class="flex flex-col">
      <div class="mb-6 md:text-start text-center">
        <div class="md:text-5xl text-3xl font-bold mb-4">안녕하세요! 👋</div>
        <div class="md:text-5xl text-3xl font-bold mb-4">조은별입니다.</div>
      </div>
      <div class="mb-6">
        <div class="md:text-3xl text-xl font-bold text-lime-800 border-b mb-3">
          Contact Information
        </div>
        <div>
          <div class="mb-0.5">
            <Icon name="grommet-icons:mail-option" size="16px" />
            <nuxt-link
              class="ml-1"
              to="mailto:﻿superman@test.com"
              target="_blank"
              rel="noopener"
              >pinichi@hanmail.net</nuxt-link
            >
          </div>
          <div>
            <Icon name="grommet-icons:github" size="16px" />
            <nuxt-link
              class="ml-1"
              to="https://github.com/pinichi"
              target="_blank"
              rel="noopener"
              >github.com/pinichi</nuxt-link
            >
          </div>
        </div>
      </div>
      <div>
        <div class="md:text-3xl text-xl font-bold text-lime-800 border-b mb-3">
          Professional Summary
        </div>
        <div class="mb-6">
          <p>
            7년차 개발자로 웹/앱 서비스를 위한 서버와 웹 프론트엔드 개발 경력을
            보유하고 있습니다.
          </p>
          <p>
            <span class="font-bold"
              >Python, Django, Django Rest Framework,
              Typescript, Node.js, Vue.js, Nuxt.js</span
            >
            의 기술을 이용하여 프로덕션 서비스를 출시 및 운영한 경험이 있습니다.
          </p>
          <p class="pt-2">
            비즈니스 가치 실현을 중요하게 생각하기 때문에 빠른 생산성 가져가면서
            완결성 있는 제품을 만들어 내는 것을 주요하게 여기며 이러한 완성도
            있는 제품은 높은 코드 퀄리티에서 기인한다고 봅니다.
          </p>
          <p>
            이를 위해 주어진 기한 내에 꼼꼼한 코드 리뷰를 진행하려 노력하고
            이러한 토론 과정이 개인의 성장에 도움이 되고 동료들에게 신뢰감,
            안정감을 줄 수 있다고 믿습니다.
          </p>
          <p class="pt-2">
            문제해결을 위해서는 구성원들과 원활한 의사소통이 중요하다 생각하며
            이를 위해 다양한 업무 채널을 활용하여 의견을 적극적으로 개진하고
            아이디어 및 피드백을 활발하게 공유하고자 합니다.
          </p>
        </div>
      </div>
      <div>
        <div class="md:text-3xl text-xl font-bold text-lime-800 border-b mb-3">
          Work Experience
        </div>
        <div class="flex flex-col md:flex-row mb-6">
          <div class="mr-0 md:mr-6 mb-2 md:mb-0">
            <div class="md:text-2xl text-xl font-bold mb-2">홀릭스팩토리</div>
            <div class="italic text-gray-500 mb-1">2016.6 - 2022.9</div>
            <div
              class="flex items-center w-max rounded text-white px-1 py-0.25 text-xs bg-lime-800"
            >
              6년 4개월
            </div>
          </div>
          <div class="flex-grow">
            <div class="md:text-xl text-lg border-b mb-2">
              온라인 커뮤니티 서비스
              <nuxt-link
                class="underline decoration-solid"
                to="https://holix.com"
                target="_blank"
                rel="noopener"
              >
                홀릭스
              </nuxt-link>
              개발
            </div>
            <div>
              <div>
                2021.10 - 2022.9:
                <span class="font-bold">홀릭스 Frontend Developer</span>
              </div>
              <ul class="list-none list-inside">
                <li>- 홀릭스 Web Application 개발</li>
                <li>- 홀릭스 Desktop Design System 개발</li>
              </ul>
              <div class="mt-1">
                2016.6 - 2021.6:
                <span class="font-bold">에듀캐스트 Web Developer</span>
              </div>
              <ul class="list-none list-inside">
                <li>- 에듀캐스트 API 서버 개발</li>
                <li>- 에듀캐스트 Web Application 개발</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-6">
        <div class="md:text-3xl text-xl font-bold text-lime-800 border-b mb-3">
          Interest
        </div>
        <ul class="list-disc list-inside">
          <li>
            최신 웹 기술에 대한 관심이 높고, 사용성과 접근성에 영향을 미치는 웹
            표준 준수에 관심이 많습니다.
          </li>
          <li>k-pop을 좋아합니다.</li>
        </ul>
      </div>

      <div>
        <div class="md:text-3xl text-xl font-bold text-lime-800 border-b mb-3">
          Resume
        </div>
        <div>자세한 경력사항이 궁금하신분은 이메일로 연락주세요.</div>
        <div>이력서를 송부하겠습니다.</div>
      </div>
    </div>
  </div>
</template>
