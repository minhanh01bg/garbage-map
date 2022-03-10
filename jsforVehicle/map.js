var map = L.map('map', {
    center: [21.027, 105.852],
    zoom:12
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);

// icon======================================================================
var icon_test = L.icon({
    iconUrl: "image/truck.jpg",
    iconSize: [34, 34],
});

var icon_garbage_green = L.icon({
    iconUrl: "image/image-icon/green-garbage.png",
    iconSize: [25, 41],
});

var icon_garbage_red = L.icon({
    iconUrl: "image/image-icon/red-garbage.png",
    iconSize: [25, 41],
});

var icon_garbage_yellow = L.icon({
    iconUrl: "image/image-icon/yellow-garbage.png",
    iconSize: [25, 41],
});

var icon_truck = L.icon({
    iconUrl: "image/image-icon/garbage-truck.png",
    iconSize: [41, 41],
    iconAnchor:[20,20]
});
// ===============================end-icon
var rout;
var x = "21.004415542996057 105.81955772933267";
var y = "20.891548510901426 105.76313590532472";
// ================================ sleep mode ================================
function sleep(milliseconds) {
    var s = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - s) > milliseconds){
            break;
        }
    }
}
// ================================ sleep mode end ================================



var arr, durations;
var marker1;
var st_lat = x.split(" ")[0];
var st_lng = x.split(" ")[1];
var markerdefault = L.marker([st_lat, st_lng], { icon: icon_truck }).addTo(map);

map.on('click', function (e) {
    if (rout) {
        map.removeControl(rout);
    }

    if (marker1) {
        map.removeLayer(marker1);
    }
    rout = L.Routing.control({
        createMarker: function () { return null; },
        waypoints: [
            L.latLng(st_lat, st_lng),
            L.latLng(e.latlng)
        ],
        routeWhileDragging: true
    }).addTo(map);

    arr = new Array();
    durations = new Array();
    var Coordinates;
    rout.on("routeselected", function (e) {
        Coordinates = e.route.coordinates;
        for (let i = 0; i < Coordinates.length; i++) {
            arr.push([Coordinates[i].lat, Coordinates[i].lng]);
            st_lat = Coordinates[i].lat;
            st_lng = Coordinates[i].lng;
            durations.push(10);
        }

        for (let i = 0; i < arr.length; i++) {
            setTimeout(function () {
                markerdefault.setLatLng([arr[i][0], arr[i][1]]);
            },100*i);          
        }
        
    });
});
// btn submit ==============================


function excute() {
    var st_lat = $("#location-st").val().split(" ")[0];
    var st_lng = $("#location-st").val().split(" ")[1];
    var des_lat = $("#location-des").val().split(" ")[0];
    var des_lng = $("#location-des").val().split(" ")[1];
    if (st_lat == null || st_lng == null || st_lat == "" || st_lng == "") {
        alert("Please write latlng start");
        return;
    }
    if (des_lat == null || des_lng == null || des_lat == "" || des_lng == "") {
        alert("Please write latlng destination");
        return;
    }

    if (rout) {
        map.removeControl(rout);
    }
    if (marker1) {
        map.removeLayer(marker1);
    }
    rout = L.Routing.control({
        createMarker: function () { return null; },
        waypoints: [
            L.latLng(st_lat, st_lng),
            L.latLng(des_lat, des_lng)
        ],
        routeWhileDragging: true
    }).addTo(map);
    var Coordinates;
    arr = new Array();
    durations = new Array();
    rout.on("routeselected", function (e) {
        Coordinates = e.route.coordinates;
        for (let i = 0; i < Coordinates.length; i++) {
            arr.push([Coordinates[i].lat, Coordinates[i].lng]);
            durations.push(1000);
        }
    });
}


// btn start ==================================

function excuteStart() {
    if (marker1) {
        map.removeLayer(marker1);
    }
    map.fitBounds(arr);
    marker1 = L.Marker.movingMarker(arr, durations).addTo(map);
    // L.polyline(arr).addTo(map);
    marker1.start();
}


// ====================================getValue-garbage===========================

function excuteAddValueGarbage() {
    var latlong =$("#location-garbage-text").val();
    // console.log(latlong);
    var Lat = latlong.split(" ")[0];
    var Long = latlong.split(" ")[1];
    // var Type = latlong.split(" ")[2];
    // console.log(lat,lng);
    L.marker([Lat, Long], { icon: icon_garbage }).addTo(map);
    var latlong = document.getElementById("location-garbage-text");
    // console.log(latlong.value);
    $.ajax({
        url: "/app/run.php",
        method: 'POST',
        data:{
            LatLong: latlong.value,
            // type:Type
        },
        success: function (response) {
            console.log(response);
        }
    });
}

// ====================================end getValue-garbage================================================

// ====================================moving garbage addTo-=========================================
var icon_garbage = L.icon({
    iconUrl: "image/icon-garbage.png",
    iconSize: [20, 34],
});
function excuteStartMoving() {
    var latlong =$("#location-garbage-text").val();
    console.log(latlong);
    var Lat = latlong.split(" ")[0];
    var Long = latlong.split(" ")[1];
    // console.log(lat,lng);
    if (rout) {
        map.removeControl(rout);
    }
    if (marker1) {
        map.removeLayer(marker1);
    }
    rout = L.Routing.control({
        createMarker: function () { return null; },
        waypoints: [
            L.latLng(st_lat, st_lng),
            L.latLng(Lat, Long)
        ],
        routeWhileDragging: true
    }).addTo(map);
    var Coordinates;
    arr = new Array();
    durations = new Array();
    rout.on("routeselected", function (e) {
        Coordinates = e.route.coordinates;
        for (let i = 0; i < Coordinates.length; i++) {
            arr.push([Coordinates[i].lat, Coordinates[i].lng]);
            durations.push(100);
        }
        map.fitBounds(arr);
        marker1 = L.Marker.movingMarker(arr, durations, {icon:icon_truck,autostart:true}).addTo(map);
        marker1.start();
    });
}

// get-value-garbage===========================================================
function getValueActive() {
    // var latlong = document.getElementById("location-garbage-text");
    // var lng = $("#location-garbage-text").val().trim().split(" ")[1];
    // console.log(latlong.value);
    $.ajax({
        url: "/app/getdata.php",
        success: function (response) {
            console.log(response);
            // var record = response.split(["\n"]);
            // console.log(record);
            // var Lat,Long,Type;
            // for (let i = 0; i < record.length; i++) {
            //     console.log(record[i]);
            //     Lat = record[i].split(" ")[0];
            //     Long = record[i].split(" ")[1];
            //     Type = record[i].split(" ")[2];
            //     if (Type == "1") {
            //         L.marker([Lat, Long], { icon:icon_garbage_green}).addTo(map);
            //     } else if (Type == "2") {
            //         L.marker([Lat, Long], { icon:icon_garbage_red}).addTo(map);
            //     }
            //     else {
            //         L.marker([Lat, Long], { icon:icon_garbage_yellow}).addTo(map);
            //     }
            // }
        }
    });
}
// display truck list

window.addEventListener('load', function () {
    $.ajax({
        url: 'phpforVehicle/displaytruckondashboard.php',
        success: function (response) {
            // console.log(response);
            var records = response.split(["\n"]);
            for (var i = 0; i < records.length; i++) {
                if (records[i] === "") {
                    break;
                }
                var Lat = records[i].split(["\t"])[0];
                var Long = records[i].split(["\t"])[1];
                // console.log(Lat, Long);
                L.marker([Lat, Long], { icon:icon_truck}).addTo(map);
            }
        }
    })
})