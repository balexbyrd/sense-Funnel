# sense-Funnel
d3 funnel chart for Qlik Sense. 

![Screenshot](https://raw.githubusercontent.com/balexbyrd/img/master/senseFunnel.PNG)
![Screenshot](https://raw.githubusercontent.com/balexbyrd/img/master/senseFunnel2.PNG)

## Installation

1. Move sense-Funnel to the default extension folder in Qlik Sense
2. Open Qlik Sense and add the 'Funnel Chart' extension to a sheet
3. Configure properties	
	
> **Google Color Palette Generator** <https://github.com/google/palette.js/tree/master>
	
## Usage

The d3 funnel chart is typically used in scenarios where there are different phases (ex. Lending, Pursuits). The funnel easily shows the magnitude in change between different phases or steps. Use the dropdown for the color palettes or dive into the js code and change the 'colors' array to any color under the sun. Selections in the UI are also enabled.

## Limitations

1. Tested in Qlik Sense 3.0 in IE and Chrome (preferred).
2. This extension works best with < 10 distinct values for the dimension chosen. Some color palettes don't support a lot of distinct dimension values.
3. Depending on your block property selection(s), the visualization can look a little goofy. Use your best judgement... or fix it :) 

## License

MIT

## Credits

<https://github.com/jakezatecky/d3-funnel>