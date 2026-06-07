import os
import requests
from duckduckgo_search import DDGS
from time import sleep

products = [
    "라로슈포제 똘레리앙 더블 리페어 모이스처라이저",
    "키엘 울트라 훼이셜 크림",
    "더페이스샵 망고씨드 보습 버터",
    "빌리프 더 트루 크림 모이스춰라이징 밤",
    "하다라보 고쿠쥰 로션",
    "이니스프리 화산송이 모공 바하 클렌징 폼",
    "코스알엑스 바하 블랙헤드 파워 리퀴드",
    "폴라초이스 스킨 퍼펙팅 2% BHA 리퀴드",
    "바이오더마 세비엄 H2O",
    "닥터지 레드 블레미쉬 클리어 수딩 크림",
    "설화수 윤조에센스",
    "에스티 로더 어드밴스드 나이트 리페어",
    "마녀공장 퓨어 클렌징 오일",
    "숨37 시크릿 에센스",
    "아이오페 스템3 앰플",
    "크리니크 드라마티컬리 디퍼런트 모이스춰라이징 로션",
    "라네즈 워터뱅크 블루 히알루로닉 크림",
    "아모레퍼시픽 빈티지 싱글 익스트랙트 에센스",
    "스킨푸드 블랙슈가 퍼펙트 첫세럼",
    "미샤 타임 레볼루션 더 퍼스트 트리트먼트 에센스",
    "아벤느 시칼파트 플러스 크림",
    "피지오겔 데일리 모이스쳐 테라피 페이셜 크림",
    "제로이드 인텐시브 크림",
    "세타필 모이스춰라이징 로션",
    "일리윤 세라마이드 아토 집중 크림"
]

os.makedirs("assets/images/products", exist_ok=True)
ddgs = DDGS()

for prod in products:
    safe_name = prod.replace(" ", "_").replace("%", "")
    filepath = f"assets/images/products/{safe_name}.jpg"
    if os.path.exists(filepath): continue
    
    try:
        print(f"Downloading: {prod}")
        query = f"{prod} 화장품 공식"
        results = list(ddgs.images(query, max_results=1))
        if results:
            img_url = results[0]['image']
            headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
            res = requests.get(img_url, headers=headers, timeout=10)
            if res.status_code == 200:
                with open(filepath, 'wb') as f:
                    f.write(res.content)
    except Exception as e:
        print(f"Error downloading {prod}: {e}")
    sleep(1.5)
