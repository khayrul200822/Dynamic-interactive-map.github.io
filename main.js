var map = L.map('map').setView([-16.97,-64.16], 3);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

coords = [[-34.850,-64.775],[-16.341,-63.940],[-10.14,-53.09],[-31.80,-70.84],[4.083,-72.905]]
img = ['img/argentina.jpg', 'img/Bolivia.jpg', 'img/brazil.jpg', 'img/chile.jpg', 'img/colombia.jpg']

let l =coords.length;

for (let i = 0; i < l; i++) {
    let marker = L.marker(coords[i]).addTo(map);

    // Using the custom image for the popup
    let popupContent = '<div class="popup"><img src="' + img[i] + '" alt="Country Image" "><br><div class="social_link">' +
        '<a href="#"><i class="fa-brands fa-facebook-f"></i></a>' +
        '<a href="#"><i class="fa-brands fa-x-twitter"></i></a>' +
        '<a href="#"><i class="fa-brands fa-linkedin-in"></i></a>' +
        '</div><h1>Hello</h1>'+
        '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> </div> ';
    
    marker.bindPopup(popupContent);
}