module.exports = {
  use: [
    '@neutrinojs/standardjs',
    [
      '@neutrinojs/react',
      {
        html: {
          title: '신청의 3월 도우미',
          links: [
            'https://fonts.googleapis.com/css?family=Playfair+Display',
            'https://fonts.googleapis.com/earlyaccess/nanummyeongjo.css'
          ],
        }
      }
    ],
    '@neutrinojs/jest'
  ]
};
