$('document').ready(() => {
  let currentWeather;
  let currentPos;
  let currentUnit;
  let curTempinF;
  let curTempinC;

  // const testConfigutation = {
  //   timezone: 'CUSTOM',
  //   currently: {
  //     temperature: '50',
  //     summary: 'SUMMARY',
  //     icon: 'clear-night',
  //   },
  //   flags: 'si',
  // };

  function analyzeData() {
    $('.location').html(currentPos.results[2].formatted_address);
    $('.temp').html(Math.round(currentWeather.currently.temperature));
    $('.sum').html(currentWeather.currently.summary);
    const icon = currentWeather.currently.icon;
    switch (icon) {
      case 'partly-cloudy-day':
        $('.weather-icon').attr('class', 'wi wi-day-cloudy');
        break;
      case 'clear-day':
        $('.weather-icon').attr('class', 'wi wi-day-sunny');
        break;
      case 'clear-night':
        $('.weather-icon').attr('class', 'wi wi-night-clear');
        break;
      case 'partly-cloudy-night':
        $('.weather-icon').attr('class', 'wi wi-night-alt-cloudy');
        break;
      case 'cloudy':
        $('.weather-icon').attr('class', 'wi wi-cloudy');
        break;
      case 'rain':
        $('.weather-icon').attr('class', 'wi wi-rain');
        break;
      case 'sleet':
        $('.weather-icon').attr('class', 'wi wi-sleet');
        break;
      case 'snow':
        $('.weather-icon').attr('class', 'wi wi-snow');
        break;
      case 'wind':
        $('.weather-icon').attr('class', 'wi wi-windy');
        break;
      case 'fog':
        $('.weather-icon').attr('class', 'wi wi-fog');
        break;
      default:
        console.log('No programmed icon found');
    }
  }
  // forecast.io Dark Sky API
  function callDarkAPI(latitude, longtitude) {
    const url = `https://api.forecast.io/forecast/3bbb8bcb3a99739572ef134b9a2b1bb9/${latitude},${longtitude}?units=auto`;
    $.ajax({
      url,
      dataType: 'jsonp',
      success: (results) => {
        currentWeather = results;
        currentUnit = results.flags.units;
        if (currentUnit === 'si') {
          curTempinC = results.currently.temperature;
        }
        if (currentUnit === 'us') {
          curTempinF = results.currently.temperature;
        }
        $.getJSON({
          url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longtitude}`,
          success: (result) => {
            currentPos = result;
            analyzeData();
          },
        });
      },
    });
  }

  function getWeather() {
    navigator.geolocation.getCurrentPosition((pos) => {
      callDarkAPI(pos.coords.latitude, pos.coords.longitude);
    });
  }

  function convertTemp() {
    switch (currentUnit) {
      case 'si':
        {
          curTempinF = Math.round((curTempinC * (9 / 5)) + 32);
          currentUnit = 'us';
          $('#unitPicker').html('&deg;F');
          return curTempinF;
        }
      case 'us':
        {
          curTempinC = Math.round((curTempinF - 32) * (5 / 9));
          currentUnit = 'si';
          $('#unitPicker').html('&deg;C');
          return curTempinC;
        }
      default:
        {
          console.log(`No prorgammed units found("si","us") - unit found: ${currentUnit}`);
          return -99;
        }
    }
  }

  function setUnitButtons() {
    $('#unitPicker').click(() => {
      $('.temp').html(convertTemp());
    });
  }

  getWeather();
  setUnitButtons();
});
