// destructing with annotations

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = (forecast: {
  date: Date,
  weather: string
}): void => {
  console.log(forecast.date);
  console.log(forecast)
};

logWeather(todaysWeather);

// ES 2015
const logWeather2 = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
}
  
logWeather2(todaysWeather);