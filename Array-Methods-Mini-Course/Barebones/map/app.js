const citiesDiv = document.querySelector("#cities");

let cityReports = [
  {
    id: 2208791,
    name: "Yafran",
    coord: {
      lon: 12.52859,
      lat: 32.06329
    },
    main: {
      temp: 98,
      pressure: 961.02,
      humidity: 85
    }
  },
  {
    id: 2208425,
    name: "Zuwarah",
    coord: {
      lon: 12.08199,
      lat: 32.931198
    },
    main: {
      temp: 62,
      pressure: 937.07,
      humidity: 81
    }
  }
];

// simplify the raw data
cityReports = cityReports.map(cityRepo => {
  return {
    name: cityRepo.name,
    temp: cityRepo.main.temp
  };
});

let template = "";
cityReports.forEach(cityRepo => {
  template += `<div>The temp in ${cityRepo.name} is ${cityRepo.temp} degrees</div>`;
});
citiesDiv.innerHTML = template;