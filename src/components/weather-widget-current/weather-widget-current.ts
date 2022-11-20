import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
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
  @property({type: String})
  location = "Groningen"

  @property({ type: String })
  color = "black"

  @property({ type: String, attribute: 'background-color'})
  backgroundColor = "green"


  @state()
  data?: WeatherData;

  connectedCallback() {
    super.connectedCallback();

    fetch(`http://192.168.178.20:3000/currentweather?location=${this.location}`)
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

  static styles = css`
  .container {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 600;
    font-size: 1.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: fit-content;
    border-radius: 15px;
    padding: 10px;
  }
`;

  render() {
    return html`<div class="container" style="background-color:${this.backgroundColor}; color:${this.color};">
      ${this.data?.weather?.icon && loadSVG(this.data?.weather?.icon, {color: this.color})}
      <div>${this.data?.temp &&Math.round(this.data.temp)}°</div>
    </div>`;
  }
}
