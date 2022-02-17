const getWeatherIcons = (id) => {
  const weatherImages = [
    {
      url: "../images/clear-sky.png",
      ids: [800],
    },
    {
      url: "../images/animated/day.svg",
      ids: [803, 804],
    },
    {
      url: "../images/animated/cloudy.svg",
      ids: [801],
    },
    {
      url: "../images/animated/weather_sagittarius.svg",
      ids: [701, 711, 721, 731, 741, 751, 761, 771, 781],
    },
    {
      url: "../images/animated/rainy-3.svg",
      ids: [501, 502, 503, 504],
    },
    {
      url: "../images/animated/cloudy-day-2.svg",
      ids: [802],
    },
    {
      url: "../images/animated/rainy-4.svg",
      ids: [520, 521, 522, 531, 300, 301, 302, 310, 311, 312, 313, 314, 321],
    },
    {
      url: "../images/animated/snowy-2.svg",
      ids: [600, 601, 602, 610, 611, 612, 613, 615, 616, 620, 621, 622, 6],
    },
    {
      url: "../images/animated/thunder.svg",
      ids: [200, 201, 202, 210, 211, 212, 221, 230, 231, 232],
    },
  ];
  return weatherImages;
};
getWeatherIcons();

export default getWeatherIcons;