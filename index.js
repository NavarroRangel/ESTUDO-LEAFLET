let map = L.map('map').setView([51.05,-0.09],13)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
let customIcon = L.icon({
    iconUrl: './imagem-marcador/icone-sem-fundo.png' ,
    iconSize: [30,30],
    iconAnchor: [35,20]

})
function closeToolTipsOnZoomOut(){
    map.on('zoomend', function(){
        if(map.getZoom() < 13){
            marker.closeTooltip()
            marker2.closeTooltip()
        } else {
            marker.openTooltip()
            marker2.openTooltip()
        }
    })
}

let marker = L.marker([51.5,-0.09],{icon: customIcon}).addTo(map)
let marker2 =L.marker([51.5,-0.08],{icon:customIcon}).addTo(map)

marker2.bindTooltip('cidade2',{
    permanent: true,
    direction: "right",
    className: 'custom-tooltip',
    offset: [-10, 0]
})

marker.bindTooltip("cidade1",{
    permanent: true,
    direction: "right",
    className: 'custom-tooltip',
    offset: [-10, 0]
}).openTooltip()
closeToolTipsOnZoomOut()

let circle = L.circle([51.508, -0.11],{
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map)

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map)

marker.bindPopup(" HEllo world!<br>teste").openPopup()


let popup1 = L.popup()





