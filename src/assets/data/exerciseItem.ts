const exerciseItems = [
  {
    name: "바벨 벤치 프레스",
    target: ["가슴"],
  },
  {
    name: "인클라인 바벨 벤치 프레스",
    target: ["가슴"],
  },
  {
    name: "디클라인 바벨 벤치 프레스",
    target: ["가슴"],
  },
  {
    name: "덤벨 벤치 프레스",
    target: ["가슴"],
  },
  {
    name: "인클라인 덤벨 벤치 프레스",
    target: ["가슴"],
  },
  {
    name: "디클라인 덤벨 벤치 프레스",
    target: ["가슴"],
  },
  {
    name: "체스트 프레스 머신",
    target: ["가슴"],
  },
  {
    name: "펙덱 플라이",
    target: ["가슴"],
  },
  {
    name: "케이블 크로스오버",
    target: ["가슴"],
  },
  {
    name: "푸쉬업",
    target: ["가슴"],
  },
  {
    name: "클로즈 그립 푸쉬업",
    target: ["가슴"],
  },
  {
    name: "와이드 그립 푸쉬업",
    target: ["가슴"],
  },
  {
    name: "딥스",
    target: ["가슴", "삼두"],
  },
  {
    name: "스미스 머신 벤치 프레스",
    target: ["가슴"],
  },
  {
    name: "머신 플라이",
    target: ["가슴"],
  },
  {
    name: "인클라인 머신 프레스",
    target: ["가슴"],
  },
  {
    name: "디클라인 머신 프레스",
    target: ["가슴"],
  },
  {
    name: "레지스턴스 밴드 푸쉬업",
    target: ["가슴"],
  },
  {
    name: "메디신 볼 푸쉬업",
    target: ["가슴"],
  },
  {
    name: "슬로우 템포 벤치 프레스",
    target: ["가슴"],
  },
  {
    name: "바벨 백 스쿼트",
    target: ["하체", "허벅지 앞쪽"],
  },
  {
    name: "프론트 스쿼트",
    target: ["하체", "허벅지 앞쪽"],
  },
  {
    name: "해크 스쿼트",
    target: ["하체", "허벅지 앞쪽"],
  },
  {
    name: "레그 프레스",
    target: ["하체", "허벅지 앞쪽"],
  },
  {
    name: "런지",
    target: ["하체", "엉덩이", "허벅지 앞쪽", "허벅지 뒤쪽"],
  },
  {
    name: "워킹 런지",
    target: ["하체", "허벅지 앞쪽"],
  },
  {
    name: "불가리안 스플릿 스쿼트",
    target: ["하체", "엉덩이", "허벅지 앞쪽", "허벅지 뒤쪽"],
  },
  {
    name: "스텝업",
    target: ["하체", "엉덩이", "허벅지 앞쪽", "허벅지 뒤쪽"],
  },
  {
    name: "레그 익스텐션",
    target: ["하체", "허벅지 앞쪽"],
  },
  {
    name: "레그 컬",
    target: ["하체", "허벅지 뒤쪽"],
  },
  {
    name: "스티프 레그 데드리프트",
    target: ["하체", "허벅지 뒤쪽"],
  },
  {
    name: "굿모닝",
    target: ["하체", "허벅지 뒤쪽", "등"],
  },
  {
    name: "스모 데드리프트",
    target: ["하체", "허벅지 뒤쪽"],
  },
  {
    name: "점프 스쿼트",
    target: ["하체", "유산소"],
  },
  {
    name: "스미스 머신 스쿼트",
    target: ["하체", "허벅지 앞쪽"],
  },
  {
    name: "케이블 킥백",
    target: ["하체", "엉덩이", "허벅지 뒤쪽"],
  },
  {
    name: "힙 쓰러스트",
    target: ["하체", "엉덩이", "허벅지 뒤쪽"],
  },
  {
    name: "글루트 브리지",
    target: ["하체", "엉덩이", "허벅지 뒤쪽"],
  },
  {
    name: "카프 레이즈",
    target: ["하체"],
  },
  {
    name: "시티드 카프 레이즈",
    target: ["하체", "종아리"],
  },
  {
    name: "스미스 머신 힙 쓰러스트",
    target: ["엉덩이"],
  },
  {
    name: "덤벨 스텝업",
    target: ["엉덩이"],
  },
  {
    name: "바벨 스텝업",
    target: ["엉덩이"],
  },
  {
    name: "힙 어브덕션 머신",
    target: ["엉덩이"],
  },
  {
    name: "스탠딩 카프 레이즈",
    target: ["종아리"],
  },
  {
    name: "레그 프레스 카프 레이즈",
    target: ["종아리"],
  },
  {
    name: "덤벨 카프 레이즈",
    target: ["종아리"],
  },
  {
    name: "바벨 카프 레이즈",
    target: ["종아리"],
  },
  {
    name: "스미스 머신 카프 레이즈",
    target: ["종아리"],
  },
  {
    name: "싱글 레그 카프 레이즈",
    target: ["종아리"],
  },
  {
    name: "점프 로프",
    target: ["종아리", "유산소"],
  },
  {
    name: "힐 레이즈",
    target: ["종아리"],
  },
  {
    name: "레지스턴스 밴드 카프 레이즈",
    target: ["종아리"],
  },
  {
    name: "데드리프트",
    target: ["등"],
  },
  {
    name: "바벨 로우",
    target: ["등"],
  },
  {
    name: "덤벨 로우",
    target: ["등"],
  },
  {
    name: "T바 로우",
    target: ["등"],
  },
  {
    name: "시티드 케이블 로우",
    target: ["등"],
  },
  {
    name: "랫 풀 다운",
    target: ["등"],
  },
  {
    name: "풀업",
    target: ["등"],
  },
  {
    name: "친업",
    target: ["등"],
  },
  {
    name: "스미스 머신 로우",
    target: ["등"],
  },
  {
    name: "인버티드 로우",
    target: ["등"],
  },
  {
    name: "원암 덤벨 로우",
    target: ["등"],
  },
  {
    name: "펜들레이 로우",
    target: ["등"],
  },
  {
    name: "머신 로우",
    target: ["등"],
  },
  {
    name: "스트레이트 암 풀 다운",
    target: ["등"],
  },
  {
    name: "케이블 로우",
    target: ["등"],
  },
  {
    name: "슈퍼맨 익스텐션",
    target: ["등"],
  },
  {
    name: "백 익스텐션",
    target: ["등"],
  },
  {
    name: "하이 풀",
    target: ["등"],
  },
  {
    name: "스노우 엔젤",
    target: ["등"],
  },
  {
    name: "바벨 오버헤드 프레스",
    target: ["어깨"]
  },
  {
    name: "덤벨 숄더 프레스",
    target: ["어깨"]
  },
  {
    name: "아놀드 프레스",
    target: ["어깨"]
  },
  {
    name: "밀리터리 프레스",
    target: ["어깨"]
  },
  {
    name: "레터럴 레이즈",
    target: ["어깨"]
  },
  {
    name: "프론트 레이즈",
    target: ["어깨"]
  },
  {
    name: "리어 델트 레이즈",
    target: ["어깨"]
  },
  {
    name: "업라이트 로우",
    target: ["어깨"]
  },
  {
    name: "페이스 풀",
    target: ["어깨"]
  },
  {
    name: "케이블 레터럴 레이즈",
    target: ["어깨"]
  },
  {
    name: "머신 숄더 프레스",
    target: ["어깨"]
  },
  {
    name: "스미스 머신 숄더 프레스",
    target: ["어깨"]
  },
  {
    name: "파이크 푸쉬업",
    target: ["어깨"]
  },
  {
    name: "핸드스탠드 푸쉬업",
    target: ["어깨"]
  },
  {
    name: "스탠딩 덤벨 프레스",
    target: ["어깨"]
  },
  {
    name: "시티드 덤벨 프레스",
    target: ["어깨"]
  },
  {
    name: "케이블 프론트 레이즈",
    target: ["어깨"]
  },
  {
    name: "인클라인 리어 델트 레이즈",
    target: ["어깨"]
  },
  {
    name: "밴드 레터럴 레이즈",
    target: ["어깨"]
  },
  {
    name: "덤벨 서킷 프레스",
    target: ["어깨"]
  },
  {
    name: "바벨 컬",
    target: ["이두"]
  },
  {
    name: "덤벨 컬",
    target: ["이두"]
  },
  {
    name: "해머 컬",
    target: ["이두"]
  },
  {
    name: "프리처 컬",
    target: ["이두"]
  },
  {
    name: "인클라인 덤벨 컬",
    target: ["이두"]
  },
  {
    name: "케이블 컬",
    target: ["이두"]
  },
  {
    name: "컨센트레이션 컬",
    target: ["이두"]
  },
  {
    name: "Z바 컬",
    target: ["이두"]
  },
  {
    name: "머신 이두 컬",
    target: ["이두"]
  },
  {
    name: "리버스 컬",
    target: ["이두"]
  },
  {
    name: "트라이셉스 푸쉬다운",
    target: ["삼두"]
  },
  {
    name: "오버헤드 트라이셉스 익스텐션",
    target: ["삼두"]
  },
  {
    name: "덤벨 킥백",
    target: ["삼두"]
  },
  {
    name: "클로즈 그립 벤치 프레스",
    target: ["삼두"]
  },
  {
    name: "스컬 크러셔",
    target: ["삼두"]
  },
  {
    name: "케이블 오버헤드 익스텐션",
    target: ["삼두"]
  },
  {
    name: "리버스 그립 푸쉬다운",
    target: ["삼두"]
  },
  {
    name: "머신 트라이셉스 익스텐션",
    target: ["삼두"]
  },
  {
    name: "싱글 암 푸쉬다운",
    target: ["삼두"]
  },
  {
    name: "크런치",
    target: ["복부"]
  },
  {
    name: "레그 레이즈",
    target: ["복부"]
  },
  {
    name: "플랭크",
    target: ["복부"]
  },
  {
    name: "사이드 플랭크",
    target: ["복부"]
  },
  {
    name: "바이시클 크런치",
    target: ["복부"]
  },
  {
    name: "행잉 레그 레이즈",
    target: ["복부"]
  },
  {
    name: "푸쉬업 투 마운틴 클라이머",
    target: ["복부"]
  },
  {
    name: "시티드 니업",
    target: ["복부"]
  },
  {
    name: "러시안 트위스트",
    target: ["복부"]
  },
  {
    name: "V업",
    target: ["복부"]
  },
  {
    name: "토 투 바",
    target: ["복부"]
  },
  {
    name: "롤아웃",
    target: ["복부"]
  },
  {
    name: "케이블 크런치",
    target: ["복부"]
  },
  {
    name: "메디신 볼 슬램",
    target: ["복부"]
  },
  {
    name: "윈드실드 와이퍼",
    target: ["복부"]
  },
  {
    name: "플러터 킥",
    target: ["복부"]
  },
  {
    name: "잭나이프",
    target: ["복부"]
  },
  {
    name: "힐 터치",
    target: ["복부"]
  },
  {
    name: "드래곤 플래그",
    target: ["복부"]
  },
  {
    name: "스탠딩 오블리크 크런치",
    target: ["복부"]
  },
  {
    name: "러닝",
    target: ["유산소"]
  },
  {
    name: "사이클링",
    target: ["유산소"]
  },
  {
    name: "로잉 머신",
    target: ["유산소"]
  },
  {
    name: "점핑 잭",
    target: ["유산소"]
  },
  {
    name: "버피",
    target: ["유산소"]
  },
  {
    name: "마운틴 클라이머",
    target: ["유산소"]
  },
  {
    name: "하이 니",
    target: ["유산소"]
  },
  {
    name: "스텝퍼",
    target: ["유산소"]
  },
  {
    name: "스피드 스케이터",
    target: ["유산소"]
  },
  {
    name: "배틀 로프",
    target: ["유산소"]
  },
  {
    name: "킥복싱",
    target: ["유산소"]
  },
  {
    name: "타바타",
    target: ["유산소"]
  },
  {
    name: "엘립티컬 머신",
    target: ["유산소"]
  },
  {
    name: "트레드밀 스프린트",
    target: ["유산소"]
  },
  {
    name: "스텝 에어로빅",
    target: ["유산소"]
  },
  {
    name: "스피닝",
    target: ["유산소"]
  },
  {
    name: "스위밍",
    target: ["유산소"]
  },
  {
    name: "파워 워킹",
    target: ["유산소"]
  },
  {
    name: "캣 카우 스트레치",
    target: ["스트레칭"]
  },
  {
    name: "다운워드 도그",
    target: ["스트레칭"]
  },
  {
    name: "코브라 스트레치",
    target: ["스트레칭"]
  },
  {
    name: "차일드 포즈",
    target: ["스트레칭"]
  },
  {
    name: "햄스트링 스트레치",
    target: ["스트레칭"]
  },
  {
    name: "힙 플렉서 스트레치",
    target: ["스트레칭"]
  },
  {
    name: "스파이널 트위스트",
    target: ["스트레칭"]
  },
  {
    name: "글루트 스트레치",
    target: ["스트레칭"]
  },
  {
    name: "쿼드 스트레치",
    target: ["스트레칭"]
  },
  {
    name: "숄더 스트레치",
    target: ["스트레칭"]
  },
  {
    name: "넥 스트레치",
    target: ["스트레칭"]
  },
  {
    name: "트라이셉스 스트레치",
    target: ["스트레칭"]
  },
  {
    name: "체스트 오프너",
    target: ["스트레칭"]
  },
  {
    name: "랫 스트레치",
    target: ["스트레칭"]
  },
  {
    name: "손목 스트레치",
    target: ["스트레칭"]
  },
];

export default exerciseItems;