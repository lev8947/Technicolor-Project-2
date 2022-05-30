
// button click 
// const buttonHelpMe = document.getElementById("button-help-me-now");
const displayFacts = document.getElementById("display-facts");
// When the user clicks on the button


function myFunction() {
    console.log('b;ah');
    const factsList = [
        "Kiss The Ground is an amazing doco on Netflix about improving soil health 👨‍🌾 ", 
        "As of Jan of 2022 we are at about carbon 420 ppm, we are increasing by 3ppm each year.", 
        "Soils can also eat or release carbon depending upon their condition under heat variables. This is due to carbon deposits from plant life.",
        "The carbon-eating and oxygen-producing plankton in the oceans. If the oceans absorb too much carbon from global warming, they become acidic—specifically carbonic acid.", 
        "In 2019, global carbon emissions from fossil fuels and industry reached a high of 36.44 billion metric tons. In 2020, emissions fell by 5.8 percent due to COVID-19 and the resulting economic crisis. ", 
        "The last seven years have been the warmest seven years on record, typifying the ongoing and dramatic warming trend,"
    ];
    
    // cycles through array and randomly selects Facts
    const randomFacts = factsList[Math.floor(Math.random()*factsList.length)];
    // Facts is displayed on screen
    displayFacts.textContent = 'Climate Change Facts: ' + randomFacts;

};


// document.getElementById('button-help-me-now').addEventListener('click', myFunction);

window.onload = function() {            
    myFunction() 
    setInterval(myFunction, 15000);
}

// window.onload = function() {
//     alert('accocia');
// }