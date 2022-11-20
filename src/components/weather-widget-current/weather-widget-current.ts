import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import sampleSVG from '../../shared/svg/sample.svg';

@customElement('weather-widget-current')
export class WeatherWidgetCurrent extends LitElement {

  connectedCallback() {
    super.connectedCallback();


  }

  render() {
    return html`<div><p>Hello, weather-widget-current</p><svg id="play" xmlns="http://www.w3.org/2000/svg" height="90" width="90" viewBox="0 0 48 48">${sampleSVG("blue")}</svg></div>`;

  }
}
