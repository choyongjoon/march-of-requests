module.exports = {
  use: [
    '@neutrinojs/standardjs',
    [
      '@neutrinojs/react',
      {
        html: {
          googleAnalytics: {
            trackingId: 'UA-112518044-1',
            pageViewOnLoad: true
          },
          lang: 'ko',
          links: [
            'https://fonts.googleapis.com/css?family=Playfair+Display',
            'https://fonts.googleapis.com/earlyaccess/nanummyeongjo.css'
          ],
          meta: [
            {
              name: 'description',
              content: '줄리아 하트의 신청의 3월 투표 기록입니다. (비공식)'
            },
            {
              property: 'og:image',
              content: 'https://choyongjoon.github.io/march-of-requests/static/screenshot_1200x630.png'
            }
          ],
          title: '신청의 3월'
        }
      }
    ],
    '@neutrinojs/jest'
  ]
};
