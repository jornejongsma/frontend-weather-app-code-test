import { html } from 'lit-html';
import './weather-widget-current';
    
export default {
  title: 'Weather Widgets/weather-widget-current',
  argTypes: {
    location: {
      options: ['Groningen', 'Amsterdam', "New York", "Paris", "CapeTown", "Melbourne", "Tokyo"],
      control: {type: 'select'},
    }
  }
};

interface args {
  color: string;
  location: string;
  backgroundColor: string;
}

const Template = ({color, location, backgroundColor}: args) => {
  return html`<weather-widget-current color=${color} location=${location} background-color=${backgroundColor}></weather-widget-current>`
}

export const WeatherWidgetCurrent: any = Template.bind({});

// export const WeatherWidgetCurrent = () => html`<weather-widget-current color="white" location="Amsterdam" background-color="blue"></weather-widget-current>`;
    
WeatherWidgetCurrent.storyName = "Weather Widget Current variants";
WeatherWidgetCurrent.args = {
  color: "white",
  location: "Groningen",
  backgroundColor: "blue"
}