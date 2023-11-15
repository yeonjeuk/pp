let mapBox = document.querySelector('#map'),
  mapOpt = {
    center: new kakao.maps.LatLng(36.634997, 127.4577953), // 지도의 중심좌표 - 이지스퍼블리싱
    level: 7 // 지도의 확대 레벨
  };

// 지도 생성 new kakao.maps.Map(지도표시할곳, mapOpt)
let stanMap = new kakao.maps.Map(mapBox, mapOpt);

if (navigator.geolocation) {

  // GeoLocation을 이용해서 접속 위치를 얻어옵니다
  navigator.geolocation.getCurrentPosition(function (position) {

    let lat = position.coords.latitude, // 위도
      lon = position.coords.longitude; // 경도

    let locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
      message = '<div>현재 위치입니다.</div>'; // 인포윈도우에 표시될 내용입니다

    // 마커와 인포윈도우를 표시합니다
    displayMarker(locPosition, message);

  });

} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

  let locPosition = new kakao.maps.LatLng(36.634997, 127.4577953),
    message = '현재 위치를 파악할 수 없습니다.';

  displayMarker(locPosition, message);
}
// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarker(locPosition, message) {

  // 마커를 생성합니다
  let markerPlus = new kakao.maps.Marker({
    map: stanMap,
    position: locPosition
  });

  let iwContent = message, // 인포윈도우에 표시할 내용
    iwRemoveable = true;

  // 인포윈도우를 생성합니다
  let infowindow = new kakao.maps.InfoWindow({
    content: iwContent,
    removable: iwRemoveable
  });

  // 인포윈도우를 마커위에 표시합니다 
  infowindow.open(stanMap, markerPlus);

  // 지도 중심좌표를 접속위치로 변경합니다
  stanMap.setCenter(locPosition);
}

// 클러스터러 객체만들기 new kakao.maps.MarkerClusterer(옵션)
let clustererOpt = {
  map: stanMap, // 클러스터 표시할 지도
  averageCenter: true, // 클러스터러에 포함된 markers의 평균 위도/경도 중심으로 클러스터러의 중심위치설정
  minLeverl: 9 // 클러스터링 할 최소 지도레벨
};
let clusterer = new kakao.maps.MarkerClusterer(clustererOpt);

// 각 매장 정보를 객체로 정리하여 배열에 저장
let shopList = [
  {
    name: `설빙 청주용암점`,
    place: new kakao.maps.LatLng(36.615781, 127.517821)
  },
  {
    name: `설빙 청주금천점 `,
    place: new kakao.maps.LatLng(36.631864, 127.505308)
  },
  {
    name: `설빙 충북청주오송점`,
    place: new kakao.maps.LatLng(36.630533, 127.329621)
  },
  {
    name: `설빙 청주점`,
    place: new kakao.maps.LatLng(36.636113, 127.487871)
  },
  {
    name: `설빙 청주가경터미널점`,
    place: new kakao.maps.LatLng(36.625266, 127.429611)
  },
  {
    name: `설빙 충북청주오창점`,
    place: new kakao.maps.LatLng(36.716499, 127.423279)
  },
  {
    name: `설빙 충북청주지웰시티점`,
    place: new kakao.maps.LatLng(36.641589, 127.427567)
  },
  {
    name: `설빙 충북청주오창점`,
    place: new kakao.maps.LatLng(36.716499, 127.423279)
  },
  {
    name: `설빙 충북청주분평점`,
    place: new kakao.maps.LatLng(36.611843, 127.484778)
  },
  {
    name: `설빙 충북청주산남점`,
    place: new kakao.maps.LatLng(36.611426, 127.468794)
  },
  // 서울
  {
    name: `설빙 서울사가정역점`,
    place: new kakao.maps.LatLng(37.582534, 127.088112)
  },
  {
    name: `설빙 서울 망원점`,
    place: new kakao.maps.LatLng(37.556436, 126.909323)
  },
  {
    name: `설빙 서울 송파헬리오시티점`,
    place: new kakao.maps.LatLng(37.499743, 127.105158)
  },
  {
    name: `설빙 서울 중랑 망우점`,
    place: new kakao.maps.LatLng(37.600171, 127.100788)
  },
  {
    name: `설빙 서울 도봉 방학점`,
    place: new kakao.maps.LatLng(37.662203, 127.033809)
  },
  {
    name: `설빙 서울 영등포 당산점`,
    place: new kakao.maps.LatLng(37.534846, 126.899403)
  },
  {
    name: `설빙 마포상암점`,
    place: new kakao.maps.LatLng(37.579302, 126.889965)
  },
  {
    name: `설빙 강남세곡점`,
    place: new kakao.maps.LatLng(37.465714, 127.101171)
  },
  {
    name: `설빙 가로수길점`,
    place: new kakao.maps.LatLng(37.521234, 127.021971)
  },
  {
    name: `설빙 일원역점`,
    place: new kakao.maps.LatLng(37.483969, 127.084562)
  },
  {
    name: `설빙 서울거여역점`,
    place: new kakao.maps.LatLng(37.493203, 127.145178)
  },
  {
    name: `설빙 상일점`,
    place: new kakao.maps.LatLng(37.558219, 127.169303)
  },
  {
    name: `설빙 둔촌역점`,
    place: new kakao.maps.LatLng(37.525632, 127.134993)
  },
  {
    name: `설빙 상계역점`,
    place: new kakao.maps.LatLng(37.660811, 127.074503)
  },
  {
    name: `설빙 묵동점`,
    place: new kakao.maps.LatLng(37.614893, 127.075545)
  },
  {
    name: `설빙 천호로데오점`,
    place: new kakao.maps.LatLng(37.538339, 127.125952)
  },
  {
    name: `설빙 세종대점`,
    place: new kakao.maps.LatLng(37.547487, 127.072063)
  },
  {
    name: `설빙 서울서대문홍제역점`,
    place: new kakao.maps.LatLng(37.587899, 126.944606)
  },
  {
    name: `설빙 서울 오류동역점`,
    place: new kakao.maps.LatLng(37.495235, 126.843601)
  },
  {
    name: `설빙 서울과기대점`,
    place: new kakao.maps.LatLng(37.627326, 127.077573)
  },
  {
    name: `설빙 서울신천역점`,
    place: new kakao.maps.LatLng(37.510099, 127.084272)
  },
  {
    name: `설빙 광운대점`,
    place: new kakao.maps.LatLng(37.620048, 127.058163)
  },
  {
    name: `설빙 서울종로청하점`,
    place: new kakao.maps.LatLng(37.598646, 126.961666)
  },
  {
    name: `설빙 서초남부터미널점`,
    place: new kakao.maps.LatLng(37.484195, 127.013103)
  },
  {
    name: `설빙 롯데월드어드벤처점`,
    place: new kakao.maps.LatLng(37.511460, 127.098179)
  },
  {
    name: `설빙 양재역점`,
    place: new kakao.maps.LatLng(37.486010, 127.030455)
  },
  {
    name: `설빙 서울응암역점`,
    place: new kakao.maps.LatLng(37.598737, 126.914890)
  },
  {
    name: `설빙 서울대치점`,
    place: new kakao.maps.LatLng(37.497987, 127.055047)
  },
  {
    name: `설빙 서울종로청하점`,
    place: new kakao.maps.LatLng(37.598646, 126.961666)
  },
  {
    name: `설빙 서울종로청하점`,
    place: new kakao.maps.LatLng(37.598646, 126.961666)
  },
  {
    name: `설빙 서울종로청하점`,
    place: new kakao.maps.LatLng(37.598646, 126.961666)
  },
  {
    name: `설빙 서울종로청하점`,
    place: new kakao.maps.LatLng(37.598646, 126.961666)
  },
  {
    name: `설빙 서울종로청하점`,
    place: new kakao.maps.LatLng(37.598646, 126.961666)
  },
  {
    name: `설빙 서울종로청하점`,
    place: new kakao.maps.LatLng(37.598646, 126.961666)
  },
  {
    name: `설빙 서울종로청하점`,
    place: new kakao.maps.LatLng(37.598646, 126.961666)
  },
  {
    name: `설빙 서울종로청하점`,
    place: new kakao.maps.LatLng(37.598646, 126.961666)
  },
  {
    name: `설빙 서울종로청하점`,
    place: new kakao.maps.LatLng(37.598646, 126.961666)
  },
  {
    name: `설빙 서울종로청하점`,
    place: new kakao.maps.LatLng(37.598646, 126.961666)
  },
  {
    name: `설빙 서울종로청하점`,
    place: new kakao.maps.LatLng(37.598646, 126.961666)
  },
  {
    name: `설빙 서울종로청하점`,
    place: new kakao.maps.LatLng(37.598646, 126.961666)
  },
  {
    name: `설빙 서울종로청하점`,
    place: new kakao.maps.LatLng(37.598646, 126.961666)
  },
  {
    name: `설빙 서울종로청하점`,
    place: new kakao.maps.LatLng(37.598646, 126.961666)
  },
  {
    name: `설빙 서울종로청하점`,
    place: new kakao.maps.LatLng(37.598646, 126.961666)
  },
  {
    name: `설빙 서울종로청하점`,
    place: new kakao.maps.LatLng(37.598646, 126.961666)
  },
  {
    name: `설빙 서울종로청하점`,
    place: new kakao.maps.LatLng(37.598646, 126.961666)
  },
  {
    name: `설빙 서울종로청하점`,
    place: new kakao.maps.LatLng(37.598646, 126.961666)
  },
  {
    name: `설빙 서울종로청하점`,
    place: new kakao.maps.LatLng(37.598646, 126.961666)
  },
  {
    name: `설빙 서울종로청하점`,
    place: new kakao.maps.LatLng(37.598646, 126.961666)
  },
  {
    name: `설빙 서울종로청하점`,
    place: new kakao.maps.LatLng(37.598646, 126.961666)
  },
];
let markers = []; // 빈배열 선언
// 스벅객체 돌면서 각 값을 이용하여 마커 생성 후 markers에 삽입
for (const shop of shopList) {
  // 마커를 생성합니다
  let marker = new kakao.maps.Marker({
    map: stanMap,
    position: shop.place
  });
  // 인포윈도우에 표시할 내용
  let info = new kakao.maps.InfoWindow({
    content: `<div class="iw">${shop.name}</div>`
  });
  markers.push(marker); // 매장정보를 이용해서 만든 마커를 markers 배열에 추가

  // 마커에 이벤트를 등록
  // 마커에 마우스오버하면 makeOverListener() 실행
  kakao.maps.event.addListener(marker, 'mouseover', mouseOver(stanMap, marker, info));
  // 마커에서 마우스아웃하면 makeOutListener() 실행
  kakao.maps.event.addListener(marker, 'mouseout', mouseOut(info));
}

// 클로저: 함수의 리턴값이 익명함수인경우, 함수참조값을 익명함수가 땡겨쓰려할 때 사용한다.
// 이벤트 리스너로는 클로저를 만들어 등록, 클로저를 만들어 주지 않으면 마지막 마커에만 등록됨.

// 정보창을 표시하는 클로저를 만드는 함수입니다 
function mouseOver(stanMap, marker, info) {
  return function () {
    info.open(stanMap, marker);
  };
}
// 정보창을 닫는 클로저를 만드는 함수입니다 
function mouseOut(info) {
  return function () {
    info.close();
  };
}

// 클러스터러 생성하기
clusterer.addMarkers(markers);
