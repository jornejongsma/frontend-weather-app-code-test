import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import {loadSVG} from '../../shared/async-svg'
import styles from './styles'

type WeatherData = {
  temp: number,
  weather: {
    description: string,
    icon: string
  }
}

@customElement("weather-widget-current")
export class WeatherWidgetCurrent extends LitElement {
  @state()
  data?: WeatherData;

  connectedCallback() {
    super.connectedCallback();

    fetch('http://192.168.178.20:3000/currentweather')
      .then(res => res.json())
      .then(data => {
        this.data = {
          temp: data.main.temp,
          weather: {
            description: data.weather[0].description,
            icon: data.weather[0].icon
          } 
        }
        this.requestUpdate()
      })
  }

  static styles = styles;

  render() {
    return html`<div class="container">${this.data?.weather?.icon && loadSVG(this.data?.weather?.icon)}<div>${this?.data?.temp} ${this.data?.weather?.description}</div></div>`;
  }
}
