# sense-Funnel
d3 funnel chart for Qlik Sense. 

![Screenshot](https://raw.githubusercontent.com/balexbyrd/img/master/senseFunnel.png)
![Screenshot](https://raw.githubusercontent.com/balexbyrd/img/master/senseFunnel2.png)

## Installation

1. Move sense-Funnel to the default extension folder in Qlik Sense
2. Open Qlik Sense and add the 'Funnel Chart' extension to a sheet
3. Configure properties	
	
> **Google Color Palette Generator** <https://github.com/google/palette.js/tree/master>
	
## Usage

The demo modal is currently an example of how to make an AJAX post, you could also update the modal.html to show a visualization. Within the modal, there is limited form validation on the radio and text input. Check the developers console for the JSON string output and whether it was successfull or not.

## Limitations

1. Tested in Qlik Sense 3.0 in IE and Chrome (preferred).
2. This extension works best with < 10 distinct values for the dimension chosen. Some color palettes don't support a lot of distinct dimension values.
3. Depending on your block property selection(s), the visualization can look a little goofy. Use your best judgement... or fix it :) 

## License

MIT

## Credits

<https://github.com/jakezatecky/d3-funnel>