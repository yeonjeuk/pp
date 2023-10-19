// // 이지디자인컴퓨터학원 기준

const lat = 36.634997,
      lon = 127.4577953;
      let mapBox = document.querySelector('#map'),
    mapOpt = {
        center: new kakao.maps.LatLng(lat, lon),
        level: 7 
    }
    
let stanMap = new kakao.maps.Map(mapBox, mapOpt);

let clustererOpt = {
  map: stanMap, 
  averageCenter: true, 
  minLeverl: 9 
}
let clusterer = new kakao.maps.MarkerClusterer(clustererOpt);

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
let markers = [] 

for (const shop of shopList) {
    let marker = new kakao.maps.Marker({    
        map: stanMap,
        position: shop.place
    });
    let info = new kakao.maps.InfoWindow({
        content: `<div class="iw">${shop.name}</div>`
    });
    markers.push(marker)
    kakao.maps.event.addListener(marker, 'mouseover', mouseOver(stanMap, marker, info));
    kakao.maps.event.addListener(marker, 'mouseout', mouseOut(info));
}

function mouseOver(stanMap, marker, info) {
    return function () {
        info.open(stanMap, marker);
    };
}
function mouseOut(info) {
    return function () {
        info.close();
    };
}

clusterer.addMarkers(markers)
