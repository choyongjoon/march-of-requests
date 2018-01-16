module.exports = {
  use: [
    '@neutrinojs/standardjs',
    [
      '@neutrinojs/react',
      {
        html: {
          googleAnalytics: {
            trackingId: 'UA-112518044-1'
          },
          lang: 'ko',
          links: [
            'https://fonts.googleapis.com/css?family=Playfair+Display',
            'https://fonts.googleapis.com/earlyaccess/nanummyeongjo.css'
          ],
          meta: [
            {
              name: 'description',
              content: '줄리아 하트의 노래를 고르고 점수 나누는 것을 도와줍니다.'
            },
            {
              property: 'og:image',
              content: '/static/screenshot_1200x630.png'
            }
          ]
          title: '신청의 3월 도우미'
        }
      }
    ],
    '@neutrinojs/jest'
  ]
};
