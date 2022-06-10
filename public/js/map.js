const getCountries = () => {
    fetch ('/users/country').then((res)=>{
        return res.json()
    })
    .then((myJSON) => {
        // console.log(myJSON)
        const userCountry = myJSON
        
        google.charts.load('current', {
            'packages': ['geochart'],
        });
        google.charts.setOnLoadCallback(drawRegionsMap);
        
        function drawRegionsMap() {
            var data = google.visualization.arrayToDataTable(userCountry);
        
            var options = {};
        
            var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
        
            chart.draw(data, options);
        }
    })
}

// $(window).on('load', getCountries());
window.onload = getCountries();            
  