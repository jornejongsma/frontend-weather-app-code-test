import { html } from 'lit-html';
import './weather-widget-current';
    
export default {
  title: 'Weather Widgets/weather-widget-current',
  argTypes: {
    Location: {
      options: ['Groningen', 'Amsterdam', "New York", "Paris", "CapeTown", "Melbourne", "Tokyo"],
      control: {type: 'select'},
    }
  }
};

interface args {
  color: string;
  Location: string;
  backgroundColor: string;
  isLocation: boolean;
}

const Template = (args: args) => {
  return html`<weather-widget-current color=${args.color} location=${args.Location} background-color=${args.backgroundColor} ?show-location=${args.isLocation}></weather-widget-current>`
}

export const WeatherWidgetCurrent: any = Template.bind({});

// export const WeatherWidgetCurrent = () => html`<weather-widget-current color="white" location="Amsterdam" background-color="blue"></weather-widget-current>`;
    
WeatherWidgetCurrent.storyName = "Weather Widget Current variants";
WeatherWidgetCurrent.args = {
  color: "white",
  Location: "Groningen",
  backgroundColor: "blue",
  isLocation: false
}