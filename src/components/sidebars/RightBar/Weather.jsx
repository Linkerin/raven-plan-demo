import { useState, useEffect, useContext } from 'react';
import { LocalizationContext } from '../../../context/LocalizationContext';
import styles from '../../../styles/components/sidebars/RightBar/Weather.module.css';
import weatherIcons from '../../../utils/weather';

const defaultWeather = {
  name: 'Mexico City',
  main: {
    feels_like: 14.34,
    humidity: 61,
    temp: 15.17
  },
  weather: [{ main: 'Clouds' }]
};

function Weather() {
  const [forecast, setForecast] = useState();
  const { t } = useContext(LocalizationContext);

  useEffect(() => {
    const controller = new AbortController();
    const getForecast = async () => {
      try {
        const apiKey = import.meta.env.VITE_OPENWEATHER;
        const cityId = '3530597';
        const units = 'metric';
        const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=${units}&appid=${apiKey}`;

        const weatherRes = await fetch(url, {
          method: 'GET',
          signal: controller.signal
        });
        const weather = await weatherRes.json();
        if (!weather) {
          setForecast(defaultWeather);
          return;
        }

        setForecast(weather);
      } catch (err) {
        setForecast(defaultWeather);
        if (err.name === 'AbortError') {
          console.warn('Weather forecast fetching aborted');
          return;
        }
        console.error(
          `Error occured while fetching weather. Error message: ${err}`
        );
      }
    };

    getForecast();
    return () => {
      controller.abort();
    };
  }, []);
  return forecast && forecast?.main ? (
    <div className={styles.container}>
      <div className={styles.mainInfo}>
        <h3 className={styles.city}>{forecast?.name}</h3>
        <p className={styles.temp}>{Math.floor(forecast?.main?.temp)}° C</p>
        <p className={styles.weatherType}>{forecast?.weather[0]?.main}</p>
      </div>
      <div className={styles.otherInfo}>
        <p className={styles.feelsLike}>
          {t('weather.feelsLike')}&nbsp;
          <span className={styles.orange}>
            {Math.round(forecast?.main?.feels_like)}° C
          </span>
        </p>
        <p className={styles.humidity}>
          {t('weather.humidity')}&nbsp;
          <span className={styles.orange}>{forecast?.main?.humidity}%</span>
        </p>
        <div className={styles.icon}>
          {weatherIcons[forecast?.weather[0]?.main] || weatherIcons.Mist}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default Weather;
