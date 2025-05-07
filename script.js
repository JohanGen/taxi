const cities = ["Istanbul", "Ankara", "Izmir", "Bursa", "Antalya", "Adana", "Konya"];

function autocomplete() {
  const input = document.getElementById("location").value.toLowerCase();
  const datalist = document.getElementById("suggestions");
  datalist.innerHTML = "";

  const matches = cities.filter(city => city.toLowerCase().includes(input));
  matches.forEach(city => {
    const option = document.createElement("option");
    option.value = city;
    datalist.appendChild(option);
  });
}
