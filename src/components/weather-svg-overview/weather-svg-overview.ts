import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import {until} from 'lit/directives/until.js';



import {loadSVG} from '../../shared/async-svg'

@customElement('weather-svg-overview')
export class WeatherSvgOverview extends LitElement {

  render() {
    return html`<div>
      ${loadSVG("01d")}
      ${loadSVG("01n")}
      ${loadSVG("02d")}
      ${loadSVG("02n")}
      ${loadSVG("03d")}
      ${loadSVG("03n")}
      ${loadSVG("04d")}
      ${loadSVG("04n")}
      ${loadSVG("09d")}
      ${loadSVG("11d")}
      ${loadSVG("13d")}
      ${loadSVG("50d")}
      </div>`;
    }
  }
  // A util to suspend loading stage
  // ${until(loadSVG("01d"), html`<span>Loading...</span>`)}
  // ${loadSVG("01d", {size: 45, color: "green"})}
  