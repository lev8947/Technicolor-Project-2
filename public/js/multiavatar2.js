// Demo avatars for home page
    demoAvatars = [
      'Clementine',
      'Morty',
      'Rodion Raskolnikov',
      'Sam Solo',
      'Starcrasher',
      'Shack',
      'Desmond',
      'Snake Harrison',
      'Pandemonium',
      'Broomhilda',
      'Cosmo Blue',
      'Blue Meal Shake',
      'Cryptonaut',
      'Lancaster',
      'Maggot',
      'Matrix',
      'Hiro',
      'Mavericat',
      'Huxley',
      'Elton David-Black',
      'Katerina Zoo',
      'Bloomdalf',
      'Emma',
      'The Elephant\'s Cat',
      'Nigel Ziemssen',
      'Sir Henchard',
      'Philip Klaus',
      'Daniel Marlowe',
      'Joachim Molesworth',
      'Molly Deronda',
      'Protagonist',
      'Lancelot',
      'Pechorin Bloom',
      'Kim',
      'Kim Patel',
      'Lorelei',
      'Battle Wooster',
      'Horatius',
      'Rhett James',
      'Moby Dick',
      'James Bolling',
      'Binx Bond',
      'Patrick Gatsby',
      'Inigo Argo',
      'Jay Bateman',
      'Victor Montoya',
      'Angela Flagg',
      'Randall Zone',
      'Major Salt',
      'Milo Minderbender',
      'Major Machine',
      'Skeleto',
      'Heep Starr',
      '11th Monster',
      'Wunderlick',
      'Big Brother',
      'Gonlithli',
      'Ebenezer Dimmsdale',
      'Hester Vega',
      'Honey Bunny',
      'Vincent Plant',
      'Butch Wallace',
      'Marsellus Coolidge',
      'Tuco',
      'Angel Boy',
      'Pablo Grimes',
      'Bounty Hunter',
      'Agent Smith',
      'Oracle',
      'Apoc State',
      'Switch',
      'Choi',
      'Angel Eyes',
      'Spoon Eyes',
      'Papillon',
      'Snooze 11',
      'Projectionist',
      'Landlady',
      'Ned Ramirez',
      'Michael Shimada',
      'Sonny Zen',
      'Bruno Fox',
      'Joker',
      'Lucius Tattaglia',
      'Scareblow',
      'Sugar Crash',
      'Neurostatic',
      'Kambei Corleone',
      'Shichiroji Karatoza',
      'Kuninori Bun Lord',
      'Bun Pusher',
      'Etno',
      'Wiggly Corleone',
      'Magnetofon',
      'Hitpagadee',
      'Doge',
      'Doge Panda',
      'Doge Locamotiv',
      'Doge Bulls',
      'Doge Lavrinovich',
      'Weeberblitz',
      'Arkadion',
      'Ninesouls',
      'Psycat',
      'Indoqueen',
      'DoubleDanceDragon',
      'Kinestetic Moves',
      'Zen Flash',
      'Orbit Escape',
      'Sin Azucar',
      'Particle Machine',
      'Spanglinga',
      'Pandalion',
      'Music Razor',
      'Bugzilla',
      'Bugz Bunuel',
      'Satoshi',
      'Nakamoto',
      'МЦ ДРУИД',
      'Jekaterina',
      'Quito',
      'Buenos Aires',
      'Ouarzazate',
      'Bogota',
      'Essaouira',
      'Extremadura',
      'Guadalajara',
      'Aphex',
      'Squarepusher',
      'Orbital',
      'Mozart',
      'Tesla',
      'Linux',
      'Ki',
      'Eshkoshka',
      'Aphex Maiden',
      'Iron Twin',
    ]

    var randomDemo = demoAvatars[Math.floor(Math.random() * demoAvatars.length)];
    demoAvatars.splice(demoAvatars.indexOf(randomDemo), 1);


    // Individual page

    var customUrl = window.location.href.split("/").pop();
    customUrl = customUrl.replace(/%20/g, ' ');

    if (customUrl == 'index.html' || customUrl == 'demo.html') {
      customUrl = '';
    }
    if (customUrl.indexOf('?') >= 0) {
      customUrl = customUrl.substring(0, customUrl.indexOf('?'));
    }
    if (customUrl.length > 0) {
      randomDemo = customUrl;
    }

    var uniqueString = getById('identicon-input');
    uniqueString.innerHTML = customUrl;


    // Generate initial avatar
    getById('identicon-input').value = randomDemo;
    var iSVG = multiavatar(randomDemo);
    getById('identicon').innerHTML = iSVG;


    // Update links
    var links = document.getElementsByClassName('link-back');
    for (var i = 0, len = links.length | 0; i < len; i = i + 1 | 0) {
      links[i].setAttribute('href', 'https://multiavatar.com');
    }

    function updateLinks(link) {
      var links = document.getElementsByClassName('identicon-link');
      for (var i = 0, len = links.length | 0; i < len; i = i + 1 | 0) {
        links[i].setAttribute('href', 'https://multiavatar.com/' + link);
      }
    }
    updateLinks(randomDemo);


    // Default demo to generate random avatars

    var liAddress = randomDemo;

    function identiconDemo() {
      if (liAddress.length > 0) {
        setTimeout(function () {
          liAddress = liAddress.substring(0, liAddress.length - 1);
          getById('identicon-input').value = liAddress;
          var iSVG = multiavatar(liAddress);

          getById('identicon').innerHTML = iSVG;

          updateLinks(liAddress);

          identiconDemo();
        }, 30)
      }
      else {
        createNew();
      }
    }


    liNewAddress = "";
    newA = ""

    function createNew() {

      if (newA.length != liNewAddressLength) {
        setTimeout(function () {
          newA += liNewAddress.substring(1, 0);
          liNewAddress = liNewAddress.substring(1);
          getById('identicon-input').value = newA;
          var iSVG = multiavatar(newA);

          getById('identicon').innerHTML = iSVG;

          updateLinks(liNewAddress);

          createNew();
        }, 30)
      }
      else {
        liAddress = newA;
        newA = "";
        runDemo();
        // console.log('end');

        updateLinks(liAddress);
      }
    }


    function getNewIdenticon(string) {
      if (string == '') {
        var loaderHtml = '<div class="ma-spinner"><div></div><div></div></div>';
        getById('identicon').innerHTML = loaderHtml;
      }
      else {
        var iSVG = multiavatar(string);
        liAddress = string;
        getById('identicon').innerHTML = iSVG;

        updateLinks(string);
      }
    }


    stopDemo = false;

    function stopDemoNow() {
      stopDemo = true;
    }


    function runDemo() {
      if (stopDemo) { return; }
      setTimeout(function () {
        if (stopDemo) { return; }
        if (demoAvatars.length != 0) {
          liNewAddress = demoAvatars[Math.floor(Math.random() * demoAvatars.length)];
          liNewAddressLength = liNewAddress.length;
          identiconDemo();
          demoAvatars.splice(demoAvatars.indexOf(liNewAddress), 1);
        }
      }, 3000)
    }

    if (customUrl.length == 0) {
      runDemo();
    }


    // "New" button press
    function newIdenticon() {
      // document.body.style.backgroundColor = '#fff';
      stopDemoNow();

      var randomHash = CryptoJS.SHA256('' + Math.random()).toString().substring(0, 20);
      var randomHashConstructed = '';

      function runIt() {
        setTimeout(function () {
          if (randomHashConstructed.length < 20) {
            var lastChar = randomHash.substring(randomHash.length - 1);
            randomHash = randomHash.slice(0, -1);
            // console.log(randomHash);

            randomHashConstructed += lastChar;
            // console.log(randomHashConstructed)

            getNewIdenticon(randomHashConstructed);
            getById('identicon-input').value = randomHashConstructed;
            runIt();
          }
        }, 3)
      }
      runIt();
    }


    // New on N key press
    document.onkeydown = function (evt) {
      if (evt.srcElement.nodeName != "INPUT") {
        evt = evt || window.event;
        var isN = false;
        if ("key" in evt) {
          isN = (evt.key === "n" || evt.key === "N");
        } else {
          isN = (evt.keyCode === 78);
        }
        if (isN) {
          newIdenticon();
        }
      }
    };


    // Download PNG

    function downloadPng() {
      stopDemoNow();
      saveSvgAsPng((document.getElementsByTagName('svg'))[0], "Multiavatar-" + liAddress + ".png", { scale: 3.465 })
    }


    // Helper functions

    function getById(id) {
      return document.getElementById(id);
    }

    function divHide(id) {
      document.getElementById(id).style.display = 'none';
    }

    function divShow(id) {
      document.getElementById(id).style.display = "block";
    }