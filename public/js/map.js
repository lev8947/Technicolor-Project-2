// fetch("/", {
//     method: "post",
//     body: JSON.stringify({
//         country = User.country_name
//     }),
//     headers: { "Content-Type": "application/json" }
//     .then(function () {
//         const name = country
//         console.log(name)
//     })
//     .catch(err => console.log(err))
// });

const getCountries = () => {
    fetch('users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        
    })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
        console.error(error);
    })
}

// window.onload(getCountries());
$(window).on('load', getCountries());
// window.alert('blah');
// console.log({{ userCountry }})
// const userCountry = fetch("")
// const userCountry = [
//     ['Country', 'EnviroHubbers'],
//     ['Russia', 12],
// ];
// google.charts.load('current', {
//     'packages': ['geochart'],
// });
// google.charts.setOnLoadCallback(drawRegionsMap);

// function drawRegionsMap() {
//     var data = google.visualization.arrayToDataTable(userCountry);

//     var options = {};

//     var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

//     chart.draw(data, options);
// }

