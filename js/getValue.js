// function getValueActive() {
//     // var latlong = document.getElementById("location-garbage-text");
//     // var lng = $("#location-garbage-text").val().trim().split(" ")[1];
//     // console.log(latlong.value);
//     $.ajax({
//         url: "/app/getdata.php",
//         success: function (response) {
//             var record = response.split(["\n"]);
//             console.log(record);
//             var Lat,Long,Type;
//             for (let i = 0; i < record.length; i++) {
//                 console.log(record[i]);
//                 Lat = record[i].split(" ")[0];
//                 Long = record[i].split(" ")[1];
//                 Type = record[i].split(" ")[2];
//                 L.marker([Lat, Long], { icon:}).addTo(map);
//             }
//         }
//     });
// }