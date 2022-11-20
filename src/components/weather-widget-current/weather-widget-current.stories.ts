import { html } from 'lit-html';
import './weather-widget-current';
    
export default {
  title: 'Weather Widgets/weather-widget-current'
};

export const WeatherWidgetCurrent = () => html`<weather-widget-current color="white" location="Amsterdam" background-color="blue"></weather-widget-current>`;
    
    