// const getLocation = document.querySelector('#getLocation');

// getLocation.addEventListener('click', function(e) {
//   e.preventDefault(); // 버튼 클릭시 전송 후 새로고침 막기

//   if (navigator.geolocation) {
//     // window.navigator.geolocation 객체가 있으면
//     // .getCurrntPosition(성공시 콜백, 에러시 콜백, 옵션-기본값)연결, 1회성
//     navigator.geolocation.getCurrentPosition(showPosition, errorPosition);        
//   } else {
//     // window.navigator.geolocation 객체가 없으면 메시지 출력
//     alert('지오로케이션을 지원하지 않습니다.');
//   }
// });

// // 위치정보 탐색 허용시 콜링되는 함수
// function showPosition(position) {
//   document.querySelector("#map").innerHTML = `
//     <span id="latitude">${position.coords.latitude}</span>
//     <span id="longitude">${position.coords.longitude}</span>
//   `;
// };

// // 위치정보 탐색 거부시 콜링되는 함수
// function errorPosition(err) {
//   alert(err.message);
// }

// let latitude = document.querySelector("#latitude")
// let longitude = document.querySelector("#longitude")

// let mapBox = document.querySelector('#map'),
//     mapOpt = {
//         center: new kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표 - 이지스퍼블리싱
//         level: 6 // 지도의 확대 레벨
//     }

// // 이지디자인컴퓨터학원 기준

const lat = 36.634997,
      lon = 127.4577953;
      let mapBox = document.querySelector('#map'),
    mapOpt = {
        center: new kakao.maps.LatLng(lat, lon), // 지도의 중심좌표 - 이지스퍼블리싱
        level: 7 // 지도의 확대 레벨
    }

// 지도 생성 new kakao.maps.Map(지도표시할곳, mapOpt)
let stanMap = new kakao.maps.Map(mapBox, mapOpt);

// 클러스터러 객체만들기 new kakao.maps.MarkerClusterer(옵션)
let clustererOpt = {
  map: stanMap, // 클러스터 표시할 지도
  averageCenter: true, // 클러스터러에 포함된 markers의 평균 위도/경도 중심으로 클러스터러의 중심위치설정
  minLeverl: 9 // 클러스터링 할 최소 지도레벨
}
let clusterer = new kakao.maps.MarkerClusterer(clustererOpt);

// 각 매장 정보를 객체로 정리하여 배열에 저장
let shopList = [
    {
        name: `설빙 청주용암점`,
        place: new kakao.maps.LatLng(36.615781,127.517821)
    },
    {
        name: `설빙 청주금천점 `,
        place: new kakao.maps.LatLng(36.631864,127.505308)
    },
    {
        name: `설빙 충북청주오송점`,
        place: new kakao.maps.LatLng(36.630533,127.329621)
    },
    {
        name: `설빙 청주점`,
        place: new kakao.maps.LatLng(36.636113,127.487871)
    },
    {
        name: `설빙 청주가경터미널점`,
        place: new kakao.maps.LatLng(36.625266,127.429611)
    },
    {
        name: `설빙 충북청주오창점`,
        place: new kakao.maps.LatLng(36.716499,127.423279)
    },
    {
        name: `설빙 충북청주지웰시티점`,
        place: new kakao.maps.LatLng(36.641589,127.427567)
    },
    {
        name: `설빙 충북청주오창점`,
        place: new kakao.maps.LatLng(36.716499,127.423279)
    },
    {
        name: `설빙 충북청주분평점`,
        place: new kakao.maps.LatLng(36.611843,127.484778)
    },
    {
        name: `설빙 충북청주산남점`,
        place: new kakao.maps.LatLng(36.611426,127.468794)
    },
]
let markers = [] // 빈배열 선언
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
    markers.push(marker) // 매장정보를 이용해서 만든 마커를 markers 배열에 추가

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
clusterer.addMarkers(markers)
