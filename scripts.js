window.onload = function () {
    let macarte = L.map('carte').setView([46, 2], 6)

    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        attribution: 'données OpenSreetMap France',
        minZoom: 1,
        maxZoom: 20
    }).addTo(macarte)
    var gpx = 'trace.gpx'; // URL to your GPX file or the GPX itself
    new L.GPX(gpx, {
        async: true
    }).on('loaded', function (e) {
        macarte.fitBounds(e.target.getBounds());
    }).addTo(macarte);
    var url = 'trace.gpx'; // URL to your GPX file
    new L.GPX(url, {
        async: true,
        marker_options: {
            startIconUrl: 'flag.png',
            endIconUrl: 'flag.png',
            shadowUrl: 'flag.png'
        }
    }).on('loaded', function (e) {
        macarte.fitBounds(e.target.getBounds());
    }).addTo(macarte);

}