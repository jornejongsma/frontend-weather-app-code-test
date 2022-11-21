const customViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px'
    }
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px'
    }
  }
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // viewport: { viewports: { ...customViewports, ...INITIAL_VIEWPORTS } },
  options: {
    // This will sort our stories in alphabetical order!
    storySort: (a, b) => (a[1].kind === b[1].kind ? a[1].id.localeCompare(b[1].id, undefined, { numeric: true }) : 0)
  },
  // layout: 'fullscreen',
// For more information on a11y: https://storybook.js.org/addons/@storybook/addon-a11y
  // a11y: {
  //   element: '#root',
  //   config: {},
  //   options: {},
  //   manual: true
  // },
}