const tracks = [
  {
    albumId: 13,
    title: '미래(未來)'
  },
  {
    albumId: 13,
    title: '서교역'
  },
  {
    albumId: 13,
    title: '남십자'
  },
  {
    albumId: 13,
    title: '꿈의 안테나'
  },
  {
    albumId: 13,
    title: 'GRANADA'
  },
  {
    albumId: 13,
    title: 'Comedienne'
  },
  {
    albumId: 13,
    title: '순환선'
  },
  {
    albumId: 13,
    title: '쿠키캣'
  },
  {
    albumId: 13,
    title: 'Air Hawaii'
  },
  {
    albumId: 13,
    title: '아침노을'
  },
  {
    albumId: 12,
    title: '인디 달링'
  },
  {
    albumId: 12,
    title: '옆집소년효과'
  },
  {
    albumId: 12,
    title: 'Ariel'
  },
  {
    albumId: 12,
    title: '차를 댈 곳'
  },
  {
    albumId: 12,
    title: '세러네이드'
  },
  {
    albumId: 12,
    title: '처형 직전의 도스토옙스키'
  },
  {
    albumId: 12,
    title: '벼락'
  },
  {
    albumId: 12,
    title: '정월의 루미나리에'
  },
  {
    albumId: 12,
    title: 'Kiss (세상의 모든 해변)'
  },
  {
    albumId: 12,
    title: '안경전쟁'
  },
  {
    albumId: 12,
    title: '둘'
  },
  {
    albumId: 10,
    title: '안아줘'
  },
  {
    albumId: 10,
    title: '영원의 단면'
  },
  {
    albumId: 10,
    title: '그랑프리 / 2110'
  },
  {
    albumId: 10,
    title: '가장 최근의 꿈'
  },
  {
    albumId: 10,
    title: '여름과 꿈과 밤의 모든 매력'
  },
  {
    albumId: 10,
    title: '눈사람들이 떠나고 나면'
  },
  {
    albumId: 10,
    title: '배드민턴'
  },
  {
    albumId: 10,
    title: '88년의 여름'
  },
  {
    albumId: 10,
    title: '회전목마의 밤'
  },
  {
    albumId: 10,
    title: '마지막 담배'
  },
  {
    albumId: 10,
    title: '빗방울보'
  },
  {
    albumId: 10,
    title: '너의 손글씨'
  },
  {
    albumId: 8,
    title: '하얀 마법 속삭임'
  },
  {
    albumId: 8,
    title: 'Favorite'
  },
  {
    albumId: 8,
    title: '돌아와'
  },
  {
    albumId: 8,
    title: 'Plan B'
  },
  {
    albumId: 8,
    title: '나의 목소리'
  },
  {
    albumId: 8,
    title: '시모네타'
  },
  {
    albumId: 8,
    title: '한국소녀의 겨울'
  },
  {
    albumId: 6,
    title: '소나기의 첫 번째 물방울'
  },
  {
    albumId: 6,
    title: 'Baby Baby Baby Baby Baby'
  },
  {
    albumId: 6,
    title: '펭귄을 기른다는 것'
  },
  {
    albumId: 6,
    title: 'JH Loves You'
  },
  {
    albumId: 6,
    title: '여자옷'
  },
  {
    albumId: 6,
    title: 'Disney Girl'
  },
  {
    albumId: 6,
    title: '모든 스텝을 아는 소녀'
  },
  {
    albumId: 6,
    title: '간접 키스'
  },
  {
    albumId: 6,
    title: '천사들의 오후'
  },
  {
    albumId: 6,
    title: '실용 스페인어'
  },
  {
    albumId: 6,
    title: '넘쳐나는 인생'
  },
  {
    albumId: 5,
    title: '봄의 첫 날'
  },
  {
    albumId: 5,
    title: '폭포'
  },
  {
    albumId: 5,
    title: '당신은 울기 위해 태어난 사람'
  },
  {
    albumId: 5,
    title: '이방인의 재'
  },
  {
    albumId: 5,
    title: '사계절이여 안녕'
  },
  {
    albumId: 5,
    title: '세상에 없는 마음'
  },
  {
    albumId: 5,
    title: '기도'
  },
  {
    albumId: 5,
    title: '낯선 사람'
  },
  {
    albumId: 5,
    title: '안녕, 미안, 안녕'
  },
  {
    albumId: 5,
    title: '잊혀지기 쉬운'
  },
  {
    albumId: 5,
    title: '빠른 구름'
  },
  {
    albumId: 5,
    title: '한겨울의 천둥처럼'
  },
  {
    albumId: 5,
    title: '기도'
  },
  {
    albumId: 4,
    title: '여자들의 이별'
  },
  {
    albumId: 4,
    title: '가끔 미치도록 네가 안고 싶어질 때가 있어'
  },
  {
    albumId: 2,
    title: 'Miss Chocolate'
  },
  {
    albumId: 2,
    title: '가벼운 숨결'
  },
  {
    albumId: 2,
    title: '체리 블라썸 / 활짝 핀 벚꽃나무 아래서'
  },
  {
    albumId: 1,
    title: '오르골'
  },
  {
    albumId: 1,
    title: '문학 선생님'
  },
  {
    albumId: 1,
    title: 'Corazon'
  },
  {
    albumId: 1,
    title: '꿈열흘밤'
  },
  {
    albumId: 1,
    title: '유성우'
  },
  {
    albumId: 1,
    title: 'Aishiteru'
  },
  {
    albumId: 1,
    title: '답장'
  },
  {
    albumId: 1,
    title: '동감'
  },
  {
    albumId: 1,
    title: 'Singalong'
  },
  {
    albumId: 1,
    title: 'Need A Woman, Not A Girl'
  },
  {
    albumId: 1,
    title: '카드세실'
  },
  {
    albumId: 1,
    title: '연날리던 손'
  }
]

export default tracks
