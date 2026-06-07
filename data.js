// ============================================================
// 피부타입별 데이터 — 성분, 제품 추천, 스킨케어 루틴
// ============================================================

const SKIN_DATA = {

  // ─── 건성 ──────────────────────────────────────────────────
  dry: {
    id: 'dry',
    name: '건성',
    emoji: '💧',
    color: '#6EA8D9',
    gradient: 'linear-gradient(135deg, #a8d4f5 0%, #d0eaff 100%)',
    description: '수분과 유분이 모두 부족해 당김, 각질, 건조함이 자주 나타나는 피부 타입',
    characteristics: ['수분 부족', '유분 부족', '각질 잦음', '피부 당김', '탄력 저하'],
    productImage: 'assets/images/products_dry.png',

    ingredients: [
      {
        id: 'hyaluronic-acid',
        name: '히알루론산',
        englishName: 'Hyaluronic Acid',
        category: '보습',
        formula: 'C₁₄H₂₂NO₁₁',
        role: '강력한 수분 보유 성분으로, 자기 무게의 1,000배에 달하는 수분을 흡수·보유합니다.',
        chemicalStructure: '히알루론산은 N-아세틸글루코사민(GlcNAc)과 D-글루쿠론산(GlcUA)이 교대로 연결된 선형 다당류입니다. β-1,4 및 β-1,3 글리코시드 결합으로 구성된 반복 이당류 단위로 이루어져 있으며, 분자량은 수천에서 수백만 Da에 달합니다.',
        mechanism: '피부 세포 사이 공간(진피층)에서 수분 분자를 포획하고 팽윤(swelling)을 통해 피부 볼륨을 유지합니다. CD44 등의 수용체에 결합해 세포 증식, 이동, 상처 치유 등을 촉진합니다. 저분자량 HA는 진피 깊숙이 침투하고, 고분자량 HA는 표피 장벽을 강화합니다.',
        caution: '공기 중 습도가 낮은 환경에서는 오히려 피부의 수분을 빼앗을 수 있어, 반드시 보습제(크림)로 마무리해야 합니다.',
        tag: '#수분충전'
      },
      {
        id: 'ceramide',
        name: '세라마이드',
        englishName: 'Ceramide',
        category: '장벽 강화',
        formula: 'C₃₄H₆₆NO₃ (Ceramide 1 기준)',
        role: '피부 각질층의 주요 지질 성분으로, 피부 장벽을 복구하고 수분 손실을 막습니다.',
        chemicalStructure: '세라마이드는 스핑고신(sphingosine) 혹은 스핑가닌 백본에 지방산이 아마이드 결합으로 연결된 스핑고지질입니다. 각질층 지질의 약 40~50%를 차지하며, Ceramide 1~12까지 다양한 아형이 존재합니다.',
        mechanism: '각질층에서 콜레스테롤, 지방산과 함께 "벽돌-시멘트(Brick-and-mortar)" 구조를 이루어 경피수분손실(TEWL)을 억제합니다. 외부 자극, 알레르겐, 미생물의 침투를 차단하는 물리적 장벽 기능을 수행합니다.',
        caution: '일반적으로 안전하며 자극이 적습니다. 아토피, 건선 등 장벽 손상 피부에 특히 권장됩니다.',
        tag: '#장벽복구'
      },
      {
        id: 'glycerin',
        name: '글리세린',
        englishName: 'Glycerin (Glycerol)',
        category: '보습',
        formula: 'C₃H₈O₃',
        role: '공기 중 수분을 피부로 끌어당기는 대표적인 수분 공급 성분입니다.',
        chemicalStructure: '글리세린은 3개의 수산기(-OH)를 가진 단순 폴리올(polyol)입니다. 무색·무취의 점성 액체로, 분자량은 92.09 g/mol입니다.',
        mechanism: '흡습성(humectant) 성질로 대기 중의 수분을 피부 각질층으로 끌어당겨 수화(hydration)를 증진합니다. 각질층 내 자연보습인자(NMF, Natural Moisturizing Factor)와 유사한 역할을 하며, 피부 장벽 기능을 지원합니다.',
        caution: '고농도 사용 시 오히려 건조함을 유발할 수 있으므로 적정 농도(5~10%)로 사용합니다.',
        tag: '#흡습성'
      },
      {
        id: 'panthenol',
        name: '판테놀',
        englishName: 'Panthenol (Pro-Vitamin B5)',
        category: '재생',
        formula: 'C₉H₁₉NO₄',
        role: '피부 재생을 촉진하고 보습력을 높이는 프로-비타민 B5 유도체입니다.',
        chemicalStructure: '판테놀은 판토텐산(비타민 B5)의 알코올 유도체(프로비타민)로, 피부에서 판토텐산으로 산화됩니다. D-판테놀이 생물학적 활성을 가집니다.',
        mechanism: '피부 내에서 판토텐산(Pantothenic acid)으로 전환된 후 코엔자임 A(CoA) 합성에 관여합니다. 세포 증식과 상처 치유를 촉진하며, 피부 장벽의 지질 합성을 도와 수분 유지 능력을 향상시킵니다.',
        caution: '매우 안전한 성분으로 영·유아, 민감성 피부도 사용 가능합니다.',
        tag: '#피부재생'
      },
      {
        id: 'squalane',
        name: '스쿠알란',
        englishName: 'Squalane',
        category: '유분 보충',
        formula: 'C₃₀H₆₂',
        role: '인체 피지와 유사한 구조로 흡수가 뛰어나며, 유분막을 형성해 수분 증발을 차단합니다.',
        chemicalStructure: '스쿠알란은 스쿠알렌(Squalene, C₃₀H₅₀)의 수소화(hydrogenation) 형태로, 6개의 이소프렌 단위가 결합된 트리테르페노이드 탄화수소입니다. 스쿠알렌보다 산화에 안정적입니다.',
        mechanism: '피부 피지층과 유사한 구조를 가져 피부 친화성이 높고 빠르게 흡수됩니다. 에모리엔트(emollient) 역할로 피부 표면에 보호막을 형성하여 수분 증발(TEWL)을 억제합니다. 인체 내 스쿠알렌은 피지선에서 생성되어 표피의 항산화 역할도 합니다.',
        caution: '피부 친화성이 높아 모공을 막지 않습니다. 올리브 오일 유래 제품이 일반적입니다.',
        tag: '#에모리엔트'
      },
      {
        id: 'shea-butter',
        name: '시어버터',
        englishName: 'Shea Butter',
        category: '유분 보충',
        formula: '복합 지질 혼합물',
        role: '지방산이 풍부한 식물성 버터로, 피부에 집중 영양을 공급하고 유연성을 높입니다.',
        chemicalStructure: '시어버터는 스테아르산(stearic acid, C18:0)과 올레산(oleic acid, C18:1)을 주요 성분으로 하는 트리글리세라이드 혼합물입니다. 비비나무(Vitellaria paradoxa) 열매 씨앗에서 추출됩니다.',
        mechanism: '에모리엔트 및 오클루시브(occlusive) 작용으로 피부 표면에 유분막을 형성합니다. 불검화물(unsaponifiable fraction)에 포함된 루페올, 신나믹산 에스테르 등이 항염 작용을 합니다.',
        caution: '나무 견과류 알레르기가 있는 경우 주의가 필요합니다.',
        tag: '#집중영양'
      }
    ],

    products: [
      {
        name: '아토베리어 365 크림',
        brand: '에스트라 (AESTURA)',
        keyIngredients: ['세라마이드', '콜레스테롤', '지방산'],
        price: '약 31,000원',
        description: '무너진 피부 장벽을 튼튼하게 강화해주는 고보습 장벽 크림',
        type: '수분크림'
      },
      {
        name: '그린티 씨드 히알루론산 세럼',
        brand: '이니스프리 (Innisfree)',
        keyIngredients: ['히알루론산', '녹차씨드오일', '판테놀'],
        price: '약 22,000원',
        description: '히알루론산과 녹차씨드 오일로 수분과 영양을 동시 공급하는 세럼',
        type: '세럼'
      },
      {
        name: '어드벤스드 스네일 96 뮤신 파워 에센스',
        brand: 'COSRX',
        keyIngredients: ['달팽이 뮤신', '히알루론산', '알란토인'],
        price: '약 22,000원',
        description: '달팽이 뮤신 96%로 피부 재생과 집중 보습을 제공하는 에센스',
        type: '에센스'
      },
      {
        name: '에센스 토너',
        brand: '편강율 (Pyunkang Yul)',
        keyIngredients: ['황기뿌리추출물', '아르기닌', '글리세린'],
        price: '약 19,000원',
        description: '정제수 대신 황기뿌리 추출물을 사용하여 깊고 진한 보습감을 주는 에센스 제형의 토너',
        type: '토너/스킨'
      },
      {
        name: '타임 레볼루션 나이트 리페어 앰플 5X (보랏빛 앰플)',
        brand: '미샤 (MISSHA)',
        keyIngredients: ['비피다발효용해물', '스쿠알란', '프로바이오틱스'],
        price: '약 39,000원',
        description: '수면 중 피부 재생을 돕고 보습과 탄력을 극대화하는 고농축 안티에이징 앰플',
        type: '앰플'
      }
    ],

    routine: {
      am: [
        { step: 1, icon: '🫧', name: '폼 클렌징', description: '순한 저자극 클렌저로 세안합니다.', tip: '건성 피부는 이중 세안을 피하고, 아침에는 물 세안만 해도 좋습니다.', time: '1–2분' },
        { step: 2, icon: '💦', name: '수분 토너', description: '히알루론산 또는 글리세린이 풍부한 보습 토너를 충분히 레이어링합니다.', tip: '토너를 3~7번 레이어링하는 "3-7 스킨법"으로 수분을 집중 공급하세요.', time: '2–3분' },
        { step: 3, icon: '✨', name: '에센스/세럼', description: '히알루론산 세럼으로 피부 깊숙이 수분을 공급합니다.', tip: '세럼은 얼굴이 아직 촉촉할 때 발라야 흡수가 잘 됩니다.', time: '1–2분' },
        { step: 4, icon: '🌿', name: '아이크림', description: '눈가는 피부가 얇고 건조해지기 쉬우므로 아이크림으로 보호합니다.', tip: '손가락 끝으로 가볍게 두드려 흡수시키세요.', time: '30초' },
        { step: 5, icon: '🧴', name: '수분 크림', description: '세라마이드 함유 크림으로 수분을 가두어 줍니다.', tip: '건성은 크림을 아끼지 말고 넉넉하게 발라주세요.', time: '1분' },
        { step: 6, icon: '☀️', name: '선크림', description: 'SPF 30 이상의 보습형 선크림으로 마무리합니다.', tip: '건성 피부는 크림 타입 선크림이 보습에도 도움됩니다.', time: '1분' }
      ],
      pm: [
        { step: 1, icon: '🌸', name: '오일/밤 클렌징', description: '클렌징 오일이나 밤으로 메이크업과 노폐물을 1차 제거합니다.', tip: '건성 피부에는 오일 클렌저가 세정력도 좋고 피부 유분도 지켜줍니다.', time: '1–2분' },
        { step: 2, icon: '🫧', name: '순한 폼 클렌징', description: '저자극 포밍 클렌저로 부드럽게 2차 세안합니다.', tip: '미지근한 물(35~37°C)로 세안하고, 차가운 물로 마무리하면 모공 수축에 도움됩니다.', time: '1분' },
        { step: 3, icon: '💦', name: '보습 토너', description: '수분 토너로 피부 정돈 및 보습 준비를 합니다.', tip: '화장솜보다 손으로 바르면 흡수율이 높습니다.', time: '1–2분' },
        { step: 4, icon: '✨', name: '앰플/세럼', description: '히알루론산 + 판테놀 세럼으로 집중 보습합니다.', tip: '야간에는 세럼을 2가지 레이어링해도 좋습니다.', time: '1–2분' },
        { step: 5, icon: '🌙', name: '나이트 크림/오일', description: '스쿠알란 오일 또는 리치한 나이트 크림으로 마무리합니다.', tip: '수면 중 피부 재생이 활발해지므로 영양 크림을 아끼지 마세요.', time: '1–2분' },
        { step: 6, icon: '💎', name: '슬리핑 마스크 (주 2~3회)', description: '수면 마스크팩으로 집중 수분 케어를 주 2~3회 추가합니다.', tip: '보습 성분이 풍부한 슬리핑 마스크를 얇게 도포해 주세요.', time: '30초' }
      ]
    }
  },

  // ─── 지성 ──────────────────────────────────────────────────
  oily: {
    id: 'oily',
    name: '지성',
    emoji: '🍃',
    color: '#5BA98B',
    gradient: 'linear-gradient(135deg, #a8d5b5 0%, #d4edd6 100%)',
    description: '피지 분비가 과도하여 번들거림, 모공 확장, 블랙헤드가 쉽게 생기는 피부 타입',
    characteristics: ['과잉 피지 분비', '번들거림', '모공 확대', '블랙헤드', '여드름 경향'],
    productImage: 'assets/images/products_oily.png',

    ingredients: [
      {
        id: 'niacinamide',
        name: '나이아신아마이드',
        englishName: 'Niacinamide (Vitamin B3)',
        category: '모공/피지',
        formula: 'C₆H₆N₂O',
        role: '피지 분비를 조절하고 모공을 축소하며, 피부 톤을 균일하게 개선합니다.',
        chemicalStructure: '나이아신아마이드는 피리딘-3-카복스아마이드(pyridine-3-carboxamide) 구조를 가진 수용성 비타민 B3의 아미드 형태입니다. 니코틴아미드(Nicotinamide)라고도 합니다.',
        mechanism: 'NADH, NADPH의 전구체로서 세포 에너지 대사에 핵심적입니다. 피부에서는 피지선의 피지 합성을 억제하고, 케라틴 합성을 정상화하여 모공을 조이는 역할을 합니다. 멜라닌이 각질세포로 전달되는 것을 억제해 미백 효과도 있습니다.',
        caution: '10% 이상 고농도 사용 시 홍조나 자극이 생길 수 있습니다. 2~5% 농도가 가장 적합합니다.',
        tag: '#모공축소'
      },
      {
        id: 'salicylic-acid',
        name: '살리실산 (BHA)',
        englishName: 'Salicylic Acid (BHA)',
        category: '각질 제거',
        formula: 'C₇H₆O₃',
        role: '모공 깊숙이 침투하여 과잉 피지와 막힌 모공을 효과적으로 정돈합니다.',
        chemicalStructure: '살리실산은 β-하이드록시산(BHA)으로, 벤젠 고리에 하이드록실기(-OH)와 카복실기(-COOH)가 각각 결합된 방향족 유기산입니다. 지용성(lipophilic) 성질을 가집니다.',
        mechanism: '지용성 성질로 인해 피지가 많은 모공 내부까지 침투 가능합니다. 각질세포 사이의 데스모좀(desmosome) 결합을 분해하여 불필요한 각질을 제거(각질 용해)합니다. 항균 작용으로 여드름균(C. acnes) 증식을 억제하는 효과도 있습니다.',
        caution: '임산부는 사용을 피해야 합니다. 고농도 사용 시 피부 건조, 자극이 생길 수 있으므로 처음에는 낮은 농도(0.5~1%)부터 시작합니다.',
        tag: '#블랙헤드제거'
      },
      {
        id: 'zinc-pca',
        name: '아연 PCA (Zinc PCA)',
        englishName: 'Zinc PCA',
        category: '피지 조절',
        formula: 'C₅H₈NO₄Zn',
        role: '과도한 피지 생성을 억제하고 항균 효과로 여드름 예방에 도움을 줍니다.',
        chemicalStructure: '아연 PCA는 아연 이온(Zn²⁺)과 피롤리돈카복실산(Pyrrolidone Carboxylic Acid, PCA)의 킬레이트 화합물입니다. 피부 자연보습인자(NMF)의 구성 성분인 PCA에 아연을 결합시킨 형태입니다.',
        mechanism: '아연 이온이 피지선(sebaceous gland)의 5α-리덕타제(5α-reductase) 효소 활성을 억제하여 피지 전구체인 디하이드로테스토스테론(DHT) 생성을 감소시킵니다. 또한 항균 효과로 여드름균을 억제합니다.',
        caution: '일반적으로 안전하며 자극이 적습니다.',
        tag: '#피지억제'
      },
      {
        id: 'green-tea',
        name: '녹차 추출물',
        englishName: 'Green Tea Extract (EGCG)',
        category: '항산화/진정',
        formula: 'C₂₂H₁₈O₁₁ (EGCG 기준)',
        role: '강력한 항산화 성분으로 피지 산화를 억제하고 피부 염증을 완화합니다.',
        chemicalStructure: '녹차 추출물의 주요 활성 성분은 에피갈로카테킨 갈레이트(EGCG)입니다. EGCG는 카테킨 골격에 갈로일기(galloyl group)가 결합된 폴리페놀 화합물입니다.',
        mechanism: 'EGCG의 페놀성 수산기(-OH)가 활성산소(ROS)를 중화하여 피지 산화로 인한 코메도(면포) 형성을 억제합니다. 5α-리덕타제 활성 억제로 피지 분비를 조절하고, NF-κB 경로를 통한 항염 작용도 합니다.',
        caution: '카페인 함유 성분이므로 카페인 민감자는 주의가 필요합니다.',
        tag: '#항산화'
      },
      {
        id: 'kaolin',
        name: '카올린 (Kaolin Clay)',
        englishName: 'Kaolin',
        category: '피지 흡착',
        formula: 'Al₂Si₂O₅(OH)₄',
        role: '피지와 노폐물을 흡착하여 모공을 깨끗하게 정돈하는 천연 점토 성분입니다.',
        chemicalStructure: '카올린은 알루미노규산염(aluminosilicate) 광물로, 알루미늄 팔면체층과 규소 사면체층이 1:1로 결합된 층상 구조(kaolinite)를 가집니다.',
        mechanism: '음전하를 띠는 카올린 입자가 양전하를 띠는 피지와 노폐물에 정전기적으로 결합(흡착)하여 피부 표면의 과잉 피지를 제거합니다. 다공성 구조로 피지 흡수력이 우수합니다.',
        caution: '건성 피부나 민감성 피부에 과도하게 사용하면 피부가 당길 수 있습니다.',
        tag: '#피지흡착'
      },
      {
        id: 'aha-glycolic',
        name: '글리콜산 (AHA)',
        englishName: 'Glycolic Acid (AHA)',
        category: '각질 제거',
        formula: 'C₂H₄O₃',
        role: '수용성 각질 제거제로 피부 표면 각질을 효과적으로 제거하고 피부결을 개선합니다.',
        chemicalStructure: '글리콜산은 가장 작은 α-하이드록시산(AHA)으로, 분자량이 76.05 g/mol로 매우 작아 피부 침투력이 뛰어납니다.',
        mechanism: '칼슘 이온을 킬레이트하여 각질세포 사이의 데스모좀 결합을 약화시켜 노화 각질의 탈락을 촉진합니다. 콜라겐 합성을 자극하는 효과도 있어 장기간 사용 시 피부 탄력 개선에 도움됩니다.',
        caution: '광과민성을 증가시키므로 반드시 자외선차단제를 함께 사용해야 합니다. 처음에는 저농도(5% 미만)부터 사용합니다.',
        tag: '#각질케어'
      }
    ],

    products: [
      {
        name: '클리어 스킨 바하 토너',
        brand: '이즈앤트리 (Isntree)',
        keyIngredients: ['베타인살리실레이트', '해조추출물', '히알루론산'],
        price: '약 18,000원',
        description: '모공 속 각질과 피지를 자극 없이 효과적으로 제거하는 BHA 토너',
        type: 'BHA 토너'
      },
      {
        name: '화산송이 모공 클렌징 폼',
        brand: '이니스프리 (Innisfree)',
        keyIngredients: ['제주화산송이', '나이아신아마이드', '아연PCA'],
        price: '약 11,000원',
        description: '제주 화산송이로 과잉 피지와 모공 속 노폐물을 깔끔하게 제거',
        type: '클렌저'
      },
      {
        name: '컨트롤에이 카밍 에센스',
        brand: '닥터자르트 (Dr.Jart+)',
        keyIngredients: ['녹차추출물', '나이아신아마이드', '히알루론산'],
        price: '약 45,000원',
        description: '지성 피부의 피지와 각질을 케어하면서 수분을 공급하는 에센스',
        type: '에센스'
      },
      {
        name: '마다가스카르 센텔라 톤 브라이트닝 캡슐 앰플',
        brand: '스킨1004 (Skin1004)',
        keyIngredients: ['병풀추출물', '나이아신아마이드', '아스코빈산'],
        price: '약 23,000원',
        description: '피지 조절과 피부 톤 개선을 동시에 하는 앰플',
        type: '앰플'
      },
      {
        name: '아크네 클리어 토너',
        brand: 'SOME BY MI',
        keyIngredients: ['살리실산', 'AHA', 'BHA', 'PHA'],
        price: '약 14,000원',
        description: 'AHA, BHA, PHA 삼중 산 성분으로 모공과 각질을 집중 케어',
        type: '토너'
      }
    ],

    routine: {
      am: [
        { step: 1, icon: '🫧', name: '이중 세안', description: '오일 클렌저로 1차 후 폼 클렌저로 2차 세안합니다.', tip: '지성 피부라도 자극적인 강한 세안제는 피하세요. 오히려 피지 분비가 늘 수 있습니다.', time: '2–3분' },
        { step: 2, icon: '💧', name: '토너 (수렴)', description: '모공을 조여주는 수렴 토너 또는 BHA 토너로 피부를 정돈합니다.', tip: '지성 피부에도 토너의 수분 공급은 필수입니다. 너무 건조하면 피지가 더 나올 수 있습니다.', time: '1분' },
        { step: 3, icon: '✨', name: '나이아신아마이드 세럼', description: '나이아신아마이드 또는 아연 PCA 세럼으로 피지 조절을 합니다.', tip: '세럼을 얇게 레이어링하세요. 지성 피부는 에센스와 세럼 한 종류면 충분합니다.', time: '1분' },
        { step: 4, icon: '🧴', name: '가벼운 젤 크림', description: '가볍고 수분감 있는 워터젤 타입 보습제를 사용합니다.', tip: '오일프리(Oil-free), 논코메도제닉(Non-comedogenic) 제품을 선택하세요.', time: '1분' },
        { step: 5, icon: '☀️', name: '선크림 (필수!)', description: 'SPF 50 이상의 가볍고 매트한 선크림으로 마무리합니다.', tip: '수분감 있는 선크림은 지성 피부에 번들거림을 유발할 수 있어 매트 제형을 선택하세요.', time: '1분' }
      ],
      pm: [
        { step: 1, icon: '🌸', name: '1차: 오일/밤 클렌징', description: '메이크업과 자외선차단제를 오일이나 밤으로 가볍게 녹여줍니다.', tip: '지성 피부도 오일 클렌저로 1차 세안을 하면 이후 2차 세안이 쉬워집니다.', time: '1–2분' },
        { step: 2, icon: '🫧', name: '2차: 폼 클렌징', description: '저자극 폼 클렌저로 피지와 노폐물을 깨끗하게 제거합니다.', tip: '세안 후 피부가 당기는 느낌이 든다면 세안제가 너무 강한 것입니다.', time: '1분' },
        { step: 3, icon: '🧪', name: 'BHA 토너 (주 2~3회)', description: '살리실산 BHA 토너로 모공 속 각질을 주기적으로 제거합니다.', tip: '매일 사용하면 자극이 될 수 있으므로 주 2~3회가 적당합니다.', time: '1분' },
        { step: 4, icon: '✨', name: '세럼', description: '나이아신아마이드 또는 레티놀 세럼으로 피지 조절 및 피부 재생을 합니다.', tip: '레티놀은 밤에만 사용하고, 저농도(0.01%)부터 시작하세요.', time: '1분' },
        { step: 5, icon: '🌙', name: '가벼운 수분 크림', description: '오일프리 젤 타입 크림으로 가볍게 수분을 공급합니다.', tip: '나이트 크림이 무거운 경우 토너를 한 번 더 발라 수분을 공급해도 됩니다.', time: '1분' },
        { step: 6, icon: '🌿', name: '클레이 팩 (주 1~2회)', description: '카올린 또는 벤토나이트 클레이 팩으로 주기적으로 모공을 정돈합니다.', tip: '팩 후 반드시 수분 크림을 발라 건조해진 피부를 달래주세요.', time: '10–15분' }
      ]
    }
  },

  // ─── 중성 ──────────────────────────────────────────────────
  normal: {
    id: 'normal',
    name: '중성',
    emoji: '🌸',
    color: '#C9847A',
    gradient: 'linear-gradient(135deg, #f5c6c0 0%, #fde8e5 100%)',
    description: '수분과 유분의 균형이 잘 맞아 트러블이 적고 피부 상태가 양호한 피부 타입',
    characteristics: ['수분/유분 균형', '트러블 적음', '모공 보통', '피부결 균일', '관리 용이'],
    productImage: 'assets/images/products_normal.png',

    ingredients: [
      {
        id: 'vitamin-c',
        name: '비타민 C (아스코빈산)',
        englishName: 'Ascorbic Acid (Vitamin C)',
        category: '항산화/미백',
        formula: 'C₆H₈O₆',
        role: '강력한 항산화 성분으로 피부 미백, 콜라겐 합성 촉진, 안티에이징 효과를 제공합니다.',
        chemicalStructure: '아스코빈산은 L-구조의 γ-락톤 형태로, 엔디올(enediol) 그룹이 항산화 활성의 핵심입니다. 수용성이며 산성 조건(pH 3.5 이하)에서 가장 안정적입니다.',
        mechanism: '활성산소(ROS) 소거로 산화 스트레스를 억제합니다. 티로시나제(tyrosinase) 효소를 억제하여 멜라닌 합성을 감소시켜 미백 효과를 냅니다. 프롤릴 하이드록실라제(prolyl hydroxylase) 효소를 보조하여 콜라겐 합성을 촉진합니다.',
        caution: '불안정한 성분이므로 어두운 용기에 보관하고, 변색(황갈색)되면 효과가 감소합니다. 고농도(20% 이상)는 자극이 될 수 있습니다.',
        tag: '#미백/항산화'
      },
      {
        id: 'retinol',
        name: '레티놀 (저농도)',
        englishName: 'Retinol (Low Concentration)',
        category: '안티에이징',
        formula: 'C₂₀H₃₀O',
        role: '세포 재생을 촉진하고 콜라겐 합성을 늘려 주름 개선과 피부 탄력 향상에 도움을 줍니다.',
        chemicalStructure: '레티놀은 비타민 A의 알코올 형태(레티닐기)로, 4개의 이소프렌 단위와 말단 사이클로헥세닐 고리를 가진 테르페노이드입니다. 피부 내에서 레티날(retinal)을 거쳐 레티노산(retinoic acid, ATRA)으로 산화됩니다.',
        mechanism: '레티노산이 핵 수용체(RAR, RXR)에 결합해 유전자 발현을 조절합니다. 콜라게나제(MMP) 생성을 억제하고 프로콜라겐(procollagen) 합성을 촉진합니다. 표피 세포 증식을 촉진하고 각질층을 정상화합니다.',
        caution: '임산부 사용 금지. 처음에는 0.01~0.025% 저농도부터 시작하고, 반드시 PM에만 사용하며, 사용 후 자외선차단제는 필수입니다.',
        tag: '#안티에이징'
      },
      {
        id: 'peptide',
        name: '펩타이드',
        englishName: 'Peptide (Signal Peptide)',
        category: '탄력/콜라겐',
        formula: '아미노산 2~50개 결합체',
        role: '콜라겐과 엘라스틴 합성을 자극하는 신호 분자로, 피부 탄력과 주름을 개선합니다.',
        chemicalStructure: '펩타이드는 아미노산이 펩타이드 결합(-CO-NH-)으로 연결된 올리고펩타이드입니다. 시그널 펩타이드(Palmitoyl Pentapeptide-4 등), 캐리어 펩타이드, 뉴로펩타이드 등 종류가 다양합니다.',
        mechanism: '콜라겐 분해 산물(matrikines)을 모방하여 피부 세포에 콜라겐 재생 신호를 보냅니다. 섬유아세포(fibroblast)를 자극하여 프로콜라겐 1형 합성을 증가시킵니다.',
        caution: '일반적으로 안전하며 자극이 적습니다. 비타민 C 등 산성 성분과 혼합 시 효능이 감소할 수 있습니다.',
        tag: '#탄력개선'
      },
      {
        id: 'aloe-vera-normal',
        name: '알로에베라',
        englishName: 'Aloe Vera Extract',
        category: '진정/보습',
        formula: '복합 다당류 혼합물 (Acemannan 중심)',
        role: '피부를 진정시키고 수분을 공급하며, 자연스러운 보습 유지를 돕습니다.',
        chemicalStructure: '알로에베라의 핵심 성분인 아세만난(acemannan)은 β-1,4 결합된 만노오스 단위로 구성된 폴리만노즈 다당류입니다. 이 외에도 안트라퀴논, 사포닌, 비타민, 미네랄 등이 포함됩니다.',
        mechanism: '아세만난이 면역 세포를 활성화하고 사이토카인 분비를 조절하여 항염 효과를 냅니다. 피부 세포 성장 인자를 자극하여 상처 치유와 보습을 촉진합니다.',
        caution: '알로에 성분에 알레르기가 있는 경우 패치 테스트 후 사용하세요.',
        tag: '#진정보습'
      },
      {
        id: 'niacinamide-normal',
        name: '나이아신아마이드 (저농도)',
        englishName: 'Niacinamide 2~5%',
        category: '톤 개선',
        formula: 'C₆H₆N₂O',
        role: '중성 피부의 피부 톤을 균일하게 하고 장기적인 피부 건강을 유지합니다.',
        chemicalStructure: '피리딘-3-카복스아마이드 구조. 피부에서 NAD⁺의 전구체 역할을 하며, 세포 에너지 생산과 DNA 복구에 관여합니다.',
        mechanism: '멜라닌 소체(melanosome)의 각질세포로의 전달을 억제하여 색소 침착을 개선합니다. 피부 장벽 지질(세라마이드, 지방산) 생성을 자극하여 피부 보호 기능을 향상시킵니다.',
        caution: '2~5% 농도가 중성 피부에 적합합니다.',
        tag: '#톤보정'
      }
    ],

    products: [
      {
        name: '청귤 비타C 잡티 케어 세럼',
        brand: '구달 (goodal)',
        keyIngredients: ['청귤추출물', '비타민C', '나이아신아마이드'],
        price: '약 24,000원',
        description: '피부 광채를 높이고 균일한 톤으로 가꾸어주는 잡티 케어 세럼',
        type: '세럼'
      },
      {
        name: '셀 에센스 바이옴 플러스',
        brand: '헤라 (HERA)',
        keyIngredients: ['프로바이오틱스', '아미노산', '히알루론산'],
        price: '약 60,000원',
        description: '피부 자생력을 높이고 맑고 투명한 피부 바탕을 만들어주는 워터 에센스',
        type: '에센스'
      },
      {
        name: '비타민 C 10% 트리플 브라이트닝 세럼',
        brand: '닥터지 (Dr.G)',
        keyIngredients: ['비타민C(아스코빈산)', 'niacinamide', '알부틴'],
        price: '약 35,000원',
        description: '비타민 C 10%로 미백과 항산화를 동시에 케어하는 브라이트닝 세럼',
        type: '세럼'
      },
      {
        name: '타임 레스폰스 스킨 리뉴얼 크림',
        brand: '아모레퍼시픽 (Amorepacific)',
        keyIngredients: ['녹차씨앗오일', '펩타이드', '자몽씨추출물'],
        price: '약 150,000원',
        description: '한국 녹차에서 영감받은 프리미엄 리뉴얼 크림',
        type: '크림'
      },
      {
        name: '자음생크림',
        brand: '설화수 (Sulwhasoo)',
        keyIngredients: ['한방 성분 복합체', '인삼추출물', '히알루론산'],
        price: '약 85,000원',
        description: '한방 성분으로 피부 활력과 탄력을 높이는 크림',
        type: '크림'
      }
    ],

    routine: {
      am: [
        { step: 1, icon: '🫧', name: '순한 폼 클렌징', description: '중성 피부는 피부 타입에 맞는 순한 세안제를 사용합니다.', tip: '아침 세안은 마일드한 젤 타입이나 폼 타입 모두 좋습니다.', time: '1–2분' },
        { step: 2, icon: '💦', name: '토너', description: '피부 pH를 정돈하고 이후 제품의 흡수를 돕는 토너를 바릅니다.', tip: '화장솜으로 부드럽게 닦아내며 잔여 노폐물도 제거할 수 있습니다.', time: '1분' },
        { step: 3, icon: '✨', name: '비타민 C 세럼', description: '아침에 비타민 C 세럼을 발라 항산화 보호막을 형성합니다.', tip: '선크림 전에 비타민 C를 바르면 자외선 차단 시너지 효과가 납니다.', time: '1분' },
        { step: 4, icon: '🌿', name: '아이크림', description: '눈가 전용 아이크림으로 잔주름과 탄력을 관리합니다.', tip: '중성 피부도 눈가 주름은 일찍부터 예방이 중요합니다.', time: '30초' },
        { step: 5, icon: '🧴', name: '데이 크림', description: '적당한 보습의 데이 크림으로 수분을 잠가 줍니다.', tip: '중성 피부는 가볍거나 무거운 크림 모두 잘 맞습니다. 계절에 따라 조절하세요.', time: '1분' },
        { step: 6, icon: '☀️', name: '선크림', description: 'SPF 30~50 선크림으로 자외선으로부터 피부를 보호합니다.', tip: '자외선차단제는 중성 피부에게도 안티에이징 필수템입니다.', time: '1분' }
      ],
      pm: [
        { step: 1, icon: '🌸', name: '1차 클렌징', description: '오일 또는 밤 클렌저로 메이크업을 제거합니다.', tip: '중성 피부는 어떤 클렌저도 잘 맞으므로 취향에 맞게 선택하세요.', time: '1–2분' },
        { step: 2, icon: '🫧', name: '2차 클렌징', description: '순한 폼 클렌저로 나머지 잔여물을 제거합니다.', tip: '미온수로 충분히 헹궈주세요.', time: '1분' },
        { step: 3, icon: '💦', name: '토너', description: '보습 토너를 손으로 가볍게 눌러 흡수시킵니다.', tip: '수분 토너 후 흡수될 때까지 잠깐 기다려주세요.', time: '1분' },
        { step: 4, icon: '✨', name: '레티놀/펩타이드 세럼', description: 'PM에는 레티놀(저농도) 또는 펩타이드 세럼으로 안티에이징을 케어합니다.', tip: '레티놀은 주 2~3회로 시작하여 피부가 적응하면 빈도를 높이세요.', time: '1–2분' },
        { step: 5, icon: '🧴', name: '나이트 크림', description: '보통 이상의 영양 나이트 크림으로 수면 중 재생을 돕습니다.', tip: '중성 피부는 다양한 제형을 탐색해 계절과 상태에 따라 바꿔가며 사용하세요.', time: '1분' }
      ]
    }
  },

  // ─── 복합성 ─────────────────────────────────────────────────
  combination: {
    id: 'combination',
    name: '복합성',
    emoji: '🌗',
    color: '#8A7FC2',
    gradient: 'linear-gradient(135deg, #c5bdf5 0%, #e8e5ff 100%)',
    description: 'T존(이마, 코, 턱)은 지성, U존(볼, 눈가)은 건성으로 피부 부위마다 다른 특성을 가진 타입',
    characteristics: ['T존 과잉 피지', 'U존 건조', '모공 크기 상이', '계절 변화에 민감', '부위별 케어 필요'],
    productImage: 'assets/images/products_combination.png',

    ingredients: [
      {
        id: 'niacinamide-comb',
        name: '나이아신아마이드',
        englishName: 'Niacinamide',
        category: '밸런싱',
        formula: 'C₆H₆N₂O',
        role: 'T존의 과잉 피지는 조절하면서 U존에는 장벽 강화와 보습을 동시에 제공합니다.',
        chemicalStructure: '피리딘-3-카복스아마이드 구조의 수용성 비타민 B3 유도체입니다.',
        mechanism: '피지선의 피지 합성을 선택적으로 조절하고, 세라마이드 합성을 촉진하여 건조한 부위의 피부 장벽을 강화합니다. 복합성 피부의 두 가지 문제를 동시에 해결하는 데 이상적입니다.',
        caution: '5% 농도가 복합성 피부에 가장 균형적입니다.',
        tag: '#피부밸런싱'
      },
      {
        id: 'hyaluronic-comb',
        name: '히알루론산',
        englishName: 'Hyaluronic Acid',
        category: '보습',
        formula: 'C₁₄H₂₂NO₁₁',
        role: '가볍게 흡수되며 T존과 U존 모두에 균형 있는 수분을 공급합니다.',
        chemicalStructure: '글루쿠론산과 N-아세틸글루코사민의 β-1,4/β-1,3 결합 다당류입니다.',
        mechanism: '수분만 공급하고 유분을 추가하지 않아 T존의 번들거림을 악화시키지 않으면서 U존에 필요한 수분을 공급합니다. 분자량에 따라 표피층과 진피층 모두에서 작용합니다.',
        caution: '오일프리 제형으로 사용하면 복합성 피부에 가장 적합합니다.',
        tag: '#가벼운보습'
      },
      {
        id: 'aha-bha-comb',
        name: 'AHA/BHA 복합산',
        englishName: 'AHA/BHA Complex',
        category: '각질 제거',
        formula: 'AHA: C₂H₄O₃ / BHA: C₇H₆O₃',
        role: 'T존의 모공 각질과 U존의 건성 각질을 동시에 효과적으로 제거합니다.',
        chemicalStructure: 'AHA(글리콜산, 젖산)는 수용성 α-하이드록시산, BHA(살리실산)는 지용성 β-하이드록시산입니다. 두 성분의 복합 작용으로 표피와 모공 내부 각질을 모두 케어합니다.',
        mechanism: 'BHA가 지용성으로 T존 모공에 침투하고, AHA가 U존 표피의 건성 각질을 제거합니다. 복합산 토너는 복합성 피부의 부위별 문제를 한 번에 케어하는 데 효과적입니다.',
        caution: '광과민성 증가. 사용 후 자외선차단제 필수. 주 2~3회 사용 권장.',
        tag: '#듀얼각질케어'
      },
      {
        id: 'green-tea-comb',
        name: '녹차 추출물',
        englishName: 'Green Tea Extract',
        category: '항산화/밸런싱',
        formula: 'C₂₂H₁₈O₁₁ (EGCG)',
        role: 'T존 피지를 항산화로 제어하면서 U존의 건조에 의한 자극도 동시에 완화합니다.',
        chemicalStructure: 'EGCG를 중심으로 한 카테킨 폴리페놀 복합체입니다.',
        mechanism: '항산화, 항염 작용으로 T존 여드름을 예방하고, 항염 성분이 U존의 자극 반응도 완화합니다. 5α-리덕타제 억제로 T존 피지를 조절하면서 가벼운 보습도 제공합니다.',
        caution: '카페인 함유로 카페인 민감자 주의.',
        tag: '#부위별완화'
      },
      {
        id: 'ceramide-comb',
        name: '세라마이드',
        englishName: 'Ceramide',
        category: '장벽 강화',
        formula: 'C₃₄H₆₆NO₃',
        role: 'U존 건조 부위의 피부 장벽을 복구하고 수분 손실을 막습니다.',
        chemicalStructure: '스핑고지질 계열의 지질 성분으로 각질층의 주요 지질입니다.',
        mechanism: '건조한 U존의 지질 구조(brick-and-mortar)를 복원하여 경피수분손실(TEWL)을 억제합니다. 비유분성(non-greasy)으로 T존에 발라도 과잉 피지를 유발하지 않아 복합성 피부에 적합합니다.',
        caution: '가벼운 세라마이드 에멀션 제형을 선택하면 T존에도 무리없이 사용 가능합니다.',
        tag: '#U존장벽'
      }
    ],

    products: [
      {
        name: '아하/바하 클래리파잉 트리트먼트 토너',
        brand: 'COSRX',
        keyIngredients: ['AHA (글리콜산)', 'BHA (살리실산)', '나이아신아마이드'],
        price: '약 18,000원',
        description: 'T존 각질과 모공을 정리하며 U존 각질도 함께 케어하는 복합산 토너',
        type: '토너'
      },
      {
        name: '티트리 시카 수딩 크림',
        brand: '브링그린 (BRING GREEN)',
        keyIngredients: ['티트리추출물', '병풀추출물', '나이아신아마이드'],
        price: '약 19,000원',
        description: 'T존의 피지는 산뜻하게 잡고 U존은 촉촉하게 채워주는 수분 진정 크림',
        type: '수분 젤크림'
      },
      {
        name: '갈락 나이아신 2.0 에센스',
        brand: '마녀공장 (ma:nyo)',
        keyIngredients: ['갈락토마이세스발효여과물', '나이아신아마이드', '판테놀'],
        price: '약 29,000원',
        description: '피지 조절과 미백을 동시에 케어하여 맑고 투명한 피부로 가꾸어주는 에센스',
        type: '에센스'
      },
      {
        name: '비자 시카 크림',
        brand: '이니스프리 (Innisfree)',
        keyIngredients: ['비자나무오일', '병풀추출물', '히알루론산'],
        price: '약 22,000원',
        description: 'T존 진정, U존 보습을 동시에 케어하는 밸런싱 크림',
        type: '크림'
      },
      {
        name: '프로폴리스 에너지 앰플',
        brand: '차앤박 (CNP)',
        keyIngredients: ['프로폴리스추출물', '히알루론산', '베타글루칸'],
        price: '약 28,000원',
        description: '건조한 U존에 꿀광 보습을 채워주고 전체 피부 활력을 높여주는 앰플',
        type: '앰플'
      }
    ],

    routine: {
      am: [
        { step: 1, icon: '🫧', name: '마일드 클렌징', description: '순한 젤 클렌저로 T존 피지만 제거하고 U존 유분은 지켜줍니다.', tip: 'T존에 집중하여 세안하고, U존은 물로만 가볍게 헹굴 수도 있습니다.', time: '1–2분' },
        { step: 2, icon: '💦', name: '밸런싱 토너', description: '피지 조절과 보습을 동시에 하는 밸런싱 토너를 전체적으로 바릅니다.', tip: 'T존은 가볍게, U존은 충분히 토너를 흡수시켜 주세요.', time: '1분' },
        { step: 3, icon: '✨', name: '나이아신아마이드 세럼', description: '피지 조절과 보습 이중 효과의 나이아신아마이드 세럼을 전체 도포합니다.', tip: '복합성 피부의 핵심 성분! 매일 아침 꾸준히 사용하세요.', time: '1분' },
        { step: 4, icon: '🧴', name: '부위별 보습', description: '건조한 U존에는 세라마이드 크림, T존에는 가벼운 수분젤을 바릅니다.', tip: '두 종류의 보습제를 준비해 부위에 따라 다르게 적용하는 것이 포인트입니다.', time: '1–2분' },
        { step: 5, icon: '☀️', name: '선크림', description: 'SPF 40 이상의 선크림으로 마무리합니다.', tip: '복합성 피부는 가볍고 수분감 있는 선크림이 적합합니다.', time: '1분' }
      ],
      pm: [
        { step: 1, icon: '🌸', name: '1차 클렌징', description: '오일 클렌저로 전체적인 메이크업을 제거합니다.', tip: 'T존에 클렌저를 충분히 마사지해 모공 피지를 용해시켜 주세요.', time: '1–2분' },
        { step: 2, icon: '🫧', name: '2차 클렌징', description: '마일드 폼 클렌저로 전체를 마무리합니다.', tip: 'U존은 거품으로 가볍게만 닦아내세요.', time: '1분' },
        { step: 3, icon: '🧪', name: 'AHA/BHA 토너 (주 2~3회)', description: '복합산 토너로 T존 모공 각질과 U존 건성 각질을 동시 케어합니다.', tip: '사용 후 수분 크림을 꼭 발라 건조함을 방지하세요.', time: '1분' },
        { step: 4, icon: '✨', name: '세럼', description: '나이아신아마이드 세럼으로 PM 루틴도 마찬가지로 피지를 조절합니다.', tip: '격주로 레티놀 세럼을 추가하면 안티에이징 케어도 됩니다.', time: '1–2분' },
        { step: 5, icon: '🌙', name: '부위별 나이트 크림', description: 'T존에는 가벼운 젤, U존에는 영양 크림을 각각 바릅니다.', tip: '복합성 피부의 PM 루틴 핵심은 부위별 맞춤 케어입니다.', time: '1–2분' }
      ]
    }
  },

  // ─── 민감성 ─────────────────────────────────────────────────
  sensitive: {
    id: 'sensitive',
    name: '민감성',
    emoji: '🌿',
    color: '#8DB87A',
    gradient: 'linear-gradient(135deg, #c5e8b5 0%, #e5f5de 100%)',
    description: '외부 자극에 쉽게 반응하여 홍조, 가려움, 따가움, 붉음증이 자주 나타나는 피부 타입',
    characteristics: ['홍조/붉음증', '자극 민감', '가려움', '따가움', '장벽 약함'],
    productImage: 'assets/images/products_sensitive.png',

    ingredients: [
      {
        id: 'centella',
        name: '센텔라 아시아티카 (병풀)',
        englishName: 'Centella Asiatica (CICA)',
        category: '진정/재생',
        formula: '마데카소사이드 C₄₈H₇₈O₂₀ 중심',
        role: '피부 염증을 강력하게 진정시키고 손상된 피부 장벽을 빠르게 재생시킵니다.',
        chemicalStructure: '센텔라의 핵심 활성 성분은 트리테르페노이드 사포닌계인 마데카소사이드(madecassoside), 아시아티코사이드(asiaticoside), 마데카스산(madecassic acid), 아시아트산(asiatic acid)으로 구성됩니다.',
        mechanism: '마데카소사이드가 콜라겐 합성을 촉진하고 TNF-α, IL-1β 등 염증성 사이토카인의 생성을 억제합니다. 아시아트산은 TGF-β 신호 전달을 통해 상처 치유와 피부 재생을 가속합니다. 피부 장벽 단백질(필라그린) 발현을 증가시킵니다.',
        caution: '천연 성분이지만 드물게 알레르기 반응이 있을 수 있습니다. 처음 사용 시 패치 테스트를 권장합니다.',
        tag: '#CICA진정'
      },
      {
        id: 'madecassoside',
        name: '마데카소사이드',
        englishName: 'Madecassoside',
        category: '항염/재생',
        formula: 'C₄₈H₇₈O₂₀',
        role: '병풀의 핵심 활성 성분으로 강력한 항염 및 피부 재생 효과를 발휘합니다.',
        chemicalStructure: '마데카소사이드는 마데카스산(triterpenoid)에 당류(glucose, rhamnose, arabinose)가 결합된 배당체(glycoside) 구조입니다.',
        mechanism: 'NF-κB 신호 경로를 억제하여 염증성 사이토카인 생성을 차단합니다. 콜라게나제(MMP-1)의 활성을 억제하고 콜라겐 I형 합성을 자극하여 피부 재생을 촉진합니다.',
        caution: '매우 안전한 성분으로 아토피, 주사(rosacea) 피부에도 권장됩니다.',
        tag: '#항염재생'
      },
      {
        id: 'panthenol-sensitive',
        name: '판테놀 (Pro-Vitamin B5)',
        englishName: 'Panthenol',
        category: '진정/보습',
        formula: 'C₉H₁₉NO₄',
        role: '자극받은 피부를 진정시키고 수분을 공급하며 피부 재생을 돕는 성분입니다.',
        chemicalStructure: '판토텐산의 알코올 유도체로, 피부에서 판토텐산(비타민 B5)으로 산화됩니다.',
        mechanism: '세포 증식과 이동을 촉진하여 손상된 피부 조직 재생을 가속합니다. 항소양(anti-pruritic) 작용으로 가려움을 완화하고, 수분 보유 능력으로 보습 효과도 제공합니다.',
        caution: '영·유아, 아토피, 민감성 피부에 가장 안전하게 사용할 수 있는 성분 중 하나입니다.',
        tag: '#가려움완화'
      },
      {
        id: 'aloe-vera-sensitive',
        name: '알로에베라',
        englishName: 'Aloe Vera',
        category: '진정/보습',
        formula: '아세만난 중심 다당류',
        role: '피부 홍조와 자극을 즉각적으로 완화하고, 가벼운 보습을 제공합니다.',
        chemicalStructure: '아세만난(acemannan) 다당류가 핵심 성분이며, 항염 활성의 안트라퀴논과 다수의 비타민, 미네랄이 포함됩니다.',
        mechanism: '아세만난이 면역 조절을 통해 항염 반응을 유도하고, 피부 냉각 효과로 즉각적인 진정을 제공합니다. 고함량 수분(물의 99%)으로 자극 없는 보습을 제공합니다.',
        caution: '알로에 알레르기 시 주의. 방부제 없는 알로에 젤 제품을 선택하세요.',
        tag: '#즉각진정'
      },
      {
        id: 'oat-extract',
        name: '귀리 추출물 (콜로이달 오트밀)',
        englishName: 'Colloidal Oatmeal',
        category: '진정/항소양',
        formula: '아베난트라마이드(Avenanthramide) 중심',
        role: '극도로 예민한 피부의 가려움을 완화하고 피부 방어막을 강화하는 FDA 인증 성분입니다.',
        chemicalStructure: '콜로이달 오트밀의 핵심 성분인 아베난트라마이드(avenanthramide)는 안트라닐산과 히드록시신나민산이 결합된 폴리페놀 알칼로이드입니다.',
        mechanism: '아베난트라마이드가 히스타민에 의한 가려움 신호 전달을 억제하고, NF-κB 억제로 항염 효과를 나타냅니다. β-글루칸(β-glucan)은 피부 장벽 강화와 면역 조절에 관여합니다.',
        caution: 'FDA OTC 성분으로 인정받은 안전한 성분입니다. 극민감성, 아토피에도 사용 가능합니다.',
        tag: '#FDA인증진정'
      },
      {
        id: 'azulene',
        name: '아줄렌',
        englishName: 'Azulene',
        category: '항염/진정',
        formula: 'C₁₀H₈',
        role: '카모마일에서 유래한 푸른색 성분으로 강력한 항염 및 피부 진정 효과를 제공합니다.',
        chemicalStructure: '아줄렌은 카모마일 추출 과정에서 카마줄렌(chamazulene)이 열분해되어 생성되는 바이사이클릭 방향족 탄화수소입니다. 독특한 청색은 π 전자 공명에서 기인합니다.',
        mechanism: '아줄렌은 COX-2 효소를 억제하여 프로스타글란딘 생성을 감소시킴으로써 염증을 완화합니다. 자유 라디칼 소거 능력으로 산화 스트레스로 인한 피부 자극도 줄여줍니다.',
        caution: '국화과 알레르기가 있는 경우 사용에 주의가 필요합니다.',
        tag: '#항염청정'
      }
    ],

    products: [
      {
        name: '세라마이드 아토 집중 크림',
        brand: '일리윤 (ILLIYOON)',
        keyIngredients: ['세라마이드스킨콤플렉스', '콩발효추출물', '인삼추출물'],
        price: '약 15,000원',
        description: '민감하고 건조한 피부 장벽을 튼튼하게 가꿔주는 무향 고보습 크림',
        type: '크림'
      },
      {
        name: '인텐시브 크림',
        brand: '제로이드 (ZEROID)',
        keyIngredients: ['세라마이드', '스쿠알란', '디펜사마이드'],
        price: '약 32,000원',
        description: '악건성 및 문제성 피부의 장벽 보호와 보습을 돕는 병원 화장품 대표 크림',
        type: '크림'
      },
      {
        name: '다이브인 저분자 히알루론산 세럼',
        brand: '토리든 (Torriden)',
        keyIngredients: ['히알루론산(5분자)', '판테놀', '알로에베라'],
        price: '약 20,000원',
        description: '자극 없이 깊은 수분을 공급하는 저분자 히알루론산 5중 세럼',
        type: '세럼'
      },
      {
        name: '마다가스카르 센텔라 앰플',
        brand: '스킨1004 (Skin1004)',
        keyIngredients: ['마다가스카르 병풀추출물 100%', '마데카소사이드'],
        price: '약 20,000원',
        description: '마다가스카르 원산지 병풀 100%로 진정력을 극대화한 앰플',
        type: '앰플'
      },
      {
        name: '시카페어 타이거 그래스 컬러 코렉팅 트리트먼트',
        brand: '닥터자르트 (Dr.Jart+)',
        keyIngredients: ['병풀추출물', '판테놀', '녹차추출물'],
        price: '약 50,000원',
        description: '홍조를 커버하면서 동시에 진정 케어까지 하는 CICA 색보정 트리트먼트',
        type: 'BB / 색보정'
      }
    ],

    routine: {
      am: [
        { step: 1, icon: '💧', name: '물 세안 또는 저자극 클렌저', description: '자극이 적은 무향, 무파라벤 클렌저나 맹물로만 세안합니다.', tip: '민감성 피부는 과도한 세안이 장벽을 손상합니다. 아침에는 물 세안을 추천합니다.', time: '1분' },
        { step: 2, icon: '🌸', name: '진정 토너 (무알코올)', description: '알코올이 없는 진정 토너로 피부를 부드럽게 정돈합니다.', tip: '화장솜 대신 손바닥으로 눌러 흡수시키면 마찰 자극을 줄일 수 있습니다.', time: '1분' },
        { step: 3, icon: '🌿', name: 'CICA/판테놀 세럼', description: '병풀 또는 판테놀 세럼으로 진정과 장벽 강화를 합니다.', tip: '성분이 단순하고 향료가 없는 제품을 선택하세요.', time: '1분' },
        { step: 4, icon: '🧴', name: '저자극 보습 크림', description: '향, 색소, 에탄올이 없는 순한 보습 크림을 바릅니다.', tip: '새 제품을 시작할 때는 항상 귀 뒤나 팔 안쪽에서 패치 테스트를 먼저 하세요.', time: '1분' },
        { step: 5, icon: '☀️', name: '미네랄 선크림', description: '산화아연(ZnO) 또는 이산화티타늄(TiO₂) 성분의 미네랄 선크림을 사용합니다.', tip: '화학적 자외선차단제(avobenzone 등)는 민감성 피부에 자극이 될 수 있으므로 미네랄 제형을 선택합니다.', time: '1분' }
      ],
      pm: [
        { step: 1, icon: '🌸', name: '순한 밤/젤 클렌저', description: '향료 없는 순한 클렌징 밤이나 젤 클렌저를 사용합니다.', tip: '마찰 없이 가볍게 녹여내는 방식으로 세안합니다. 문지르지 마세요.', time: '1–2분' },
        { step: 2, icon: '💧', name: '미온수 세안', description: '따뜻하지 않은 미지근한 물(34~36°C)로 충분히 헹굽니다.', tip: '차가운 물이나 뜨거운 물은 피부 자극을 유발할 수 있습니다.', time: '1분' },
        { step: 3, icon: '🌿', name: '진정 에센스/세럼', description: '알로에베라, 귀리 추출물, 아줄렌 함유 진정 에센스를 바릅니다.', tip: '향료, 에탄올, 인공색소가 없는 성분표를 확인하는 습관을 들이세요.', time: '1분' },
        { step: 4, icon: '🧴', name: '장벽 강화 크림', description: '세라마이드, 판테놀이 풍부한 리페어 크림으로 장벽을 복구합니다.', tip: '피부 자극이 심한 날에는 CICA 크림을 두껍게 도포하는 "스킨 슬러깅"도 효과적입니다.', time: '1–2분' },
        { step: 5, icon: '🌙', name: '슬리핑 마스크 (필요 시)', description: '진정 성분의 슬리핑 마스크를 수면 중 집중 재생에 활용합니다.', tip: '격일 또는 주 2~3회 사용을 권장합니다. 매일 사용하면 피부에 부담이 될 수 있습니다.', time: '30초' }
      ]
    }
  }
};
