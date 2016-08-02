//http://google.github.io/palette.js/

/*
   * List all schemes that match given name and number of colours.
   *
   * name argument can be either a string or an array of strings.  In the
   * former case, the function acts as if the argument was an array with name
   * as a single argument (i.e. “palette.listSchemes('foo')” is exactly the same
   * as “palette.listSchemes(['foo'])”).
   *
   * Each name can be either name of a palette (e.g. 'tol-sq' for Paul Tol's
   * sequential palette), or a name of a group (e.g. 'sequential' for all
   * sequential palettes).  Name can therefore map to a single scheme or
   * several schemes.
   *
   * Furthermore, name can be suffixed with '-cbf' to indicate that only
   * schemes that are colourblind friendly should be returned.  For example,
   * 'rainbow' returns a HSV rainbow scheme, but because it is not colourblind
   * friendly, 'rainbow-cbf' returns no schemes.
   *
   * Some schemes may produce colourblind friendly palettes for some number of
   * colours.  For example ColorBrewer's Dark2 scheme is colourblind friendly
   * if no more than 3 colours are generated.  If opt_number is not specified,
   * 'qualitative-cbf' will include 'cb-Dark2' but if opt_number is given as,
   * say, 5 it won't.
   *
   * Name can also be 'all' which will return all registered schemes.
   * Naturally, 'all-cbf' will return all colourblind friendly schemes.
   *
   * Schemes are added to the library using palette.register.  Schemes are
   * created using palette.Scheme function.  By default, the following schemes
   * are available:
   *
   *     Name            Description
   *     --------------  -----------------------------------------------------
   *     tol             Paul Tol's qualitative scheme, cbf, max 12 colors.
   *     tol-dv          Paul Tol's diverging scheme, cbf.
   *     tol-seq         Paul Tol's sequential scheme, cbf.
   *     tol-rainbow     Paul Tol's qualitative scheme, cbf.
   *
   *     rainbow         A rainbow palette.
   *
   *     cb-YlGn         ColorBrewer sequential schemes.
   *     cb-YlGnBu
   *     cb-GnBu
   *     cb-BuGn
   *     cb-PuBuGn
   *     cb-PuBu
   *     cb-BuPu
   *     cb-RdPu
   *     cb-PuRd
   *     cb-OrRd
   *     cb-YlOrRd
   *     cb-YlOrBr
   *     cb-Purples
   *     cb-Blues
   *     cb-Greens
   *     cb-Oranges
   *     cb-Reds
   *     cb-Greys
   *
   *     cb-PuOr         ColorBrewer diverging schemes.
   *     cb-BrBG
   *     cb-PRGn
   *     cb-PiYG
   *     cb-RdBu
   *     cb-RdGy
   *     cb-RdYlBu
   *     cb-Spectral
   *     cb-RdYlGn
   *
   *     cb-Accent       ColorBrewer qualitative schemes.
   *     cb-Dark2
   *     cb-Paired
   *     cb-Pastel1
   *     cb-Pastel2
   *     cb-Set1
   *     cb-Set2
   *     cb-Set3
   *
   *     sol-base        Solarized base colours.
   *     sol-accent      Solarized accent colours.
   *
   * The following groups are also available by default:
   *
   *     Name            Description
   *     --------------  -----------------------------------------------------
   *     all             All registered schemes.
   *     sequential      All sequential schemes.
   *     diverging       All diverging schemes.
   *     qualitative     All qualitative schemes.
   *     cb-sequential   All ColorBrewer sequential schemes.
   *     cb-diverging    All ColorBrewer diverging schemes.
   *     cb-qualitative  All ColorBrewer qualitative schemes.
   *
   * You can read more about Paul Tol's palettes at http://www.sron.nl/~pault/.
   * You can read more about ColorBrewer at http://colorbrewer2.org.
   *
   * @param {string|!Array<string>} name A name of a colour scheme, of
   *     a group of colour schemes, or an array of any of those.
   * @param {number=} opt_number When requesting only colourblind friendly
   *     schemes, number of colours the scheme must provide generating such
   *     that the palette is still colourblind friendly.  2 by default.
   * @return {!Array<!palette.SchemeType>} An array of colour scheme objects
   *     matching the criteria.  Sorted by scheme name.
 */
   
var colorpalette = [
	{
		value: 'tol',
		label: "(cbf) Paul Tol's qualitative scheme"	
	},
	{
		value: 'tol-dv',
		label: "(cbf) Paul Tol's diverging scheme"	
	},	
/* 	{
		value: 'tol-seq',
		label: "(cbf) Paul Tol's sequential scheme"	
	}, */
	{
		value: 'tol-rainbow',
		label: "(cbf) Paul Tol's qualitative scheme"	
	},
	{
		value: 'rainbow',
		label: "(cbf) A rainbow palette"	
	},
	{
		value: 'cb-YlGn',
		label: "(cbf) ColorBrewer sql: Yellow/Green"	
	},	
	{
		value: 'cb-YlGnBu',
		label: "(cbf) ColorBrewer sql: Yellow/Green/Blue"	
	},
	{
		value: 'cb-GnBu',
		label: "(cbf) ColorBrewer sql: Green/Blue"	
	},
	{
		value: 'cb-BuGn',
		label: "(cbf) ColorBrewer sql: Blue/Green"	
	},
	{
		value: 'cb-PuBuGn',
		label: "(cbf) ColorBrewer sql: Purple/Blue/Green"	
	},	
	{
		value: 'cb-PuBu',
		label: "(cbf) ColorBrewer sql: Purple/Blue"	
	},
	{
		value: 'cb-RdPu',
		label: "(cbf) ColorBrewer sql: Red/Purple"	
	},
	{
		value: 'cb-PuRd',
		label: "(cbf) ColorBrewer sql: Purple/Red"	
	},
	{
		value: 'cb-OrRd',
		label: "(cbf) ColorBrewer sql: Orange/Red"	
	},	
	{
		value: 'cb-YlOrRd',
		label: "(cbf) ColorBrewer sql: Yellow/Orange/Red"	
	},
	{
		value: 'cb-YlOrBr',
		label: "(cbf) ColorBrewer sql: Yellow/Orange/Brown"	
	},
	{
		value: 'cb-Purples',
		label: "(cbf) ColorBrewer sql: Purples"	
	},
	{
		value: 'cb-Blues',
		label: "(cbf) ColorBrewer sql: Blues"	
	},	
	{
		value: 'cb-Greens',
		label: "(cbf) ColorBrewer sql: Greens"	
	},
	{
		value: 'cb-Oranges',
		label: "(cbf) ColorBrewer sql: Oranges"	
	},
	{
		value: 'cb-Reds',
		label: "(cbf) ColorBrewer sql: Reds"	
	},	
	{
		value: 'cb-Greys',
		label: "(cbf) ColorBrewer sql: Greys"	
	},
	{
		value: 'cb-PuOr',
		label: "(cbf) ColorBrewer div: Purple/Orange"	
	},	
	{
		value: 'cb-BrBG',
		label: "(cbf) ColorBrewer div: Brown/Blue/Green"	
	},
	{
		value: 'cb-PRGn',
		label: "(cbf) ColorBrewer div: Purple/Green"	
	},
	{
		value: 'cb-PiYG',
		label: "(cbf) ColorBrewer div: Pink/Yellow/Green"	
	},	
	{
		value: 'cb-RdBu',
		label: "(cbf) ColorBrewer div: Red/Blue"	
	},
	{
		value: '(cb-RdGy',
		label: "cbf) ColorBrewer div: Red/Grey"	
	},	
	{
		value: 'cb-RdYlBu',
		label: "(cbf) ColorBrewer div: Red/Yellow/Blue"	
	},
	{
		value: 'cb-Spectral',
		label: "ColorBrewer div: Spectral"	
	},
	{
		value: 'cb-RdYlGn',
		label: "ColorBrewer div: Red/Yellow/Green"	
	},		
	{
		value: 'cb-Accent',
		label: "ColorBrewer qual: Accent"	
	},	
	{
		value: 'cb-Dark2',
		label: "ColorBrewer qual: Dark"	
	},
	{
		value: 'cb-Paired',
		label: "ColorBrewer qual: Paired"	
	},
	{
		value: 'cb-Pastel1',
		label: "ColorBrewer qual: Pastel 1"	
	},		
	{
		value: 'cb-Pastel2',
		label: "ColorBrewer qual: Pastel 2"	
	},
	{
		value: 'cb-Set1',
		label: "ColorBrewer qual: Set 1"	
	},
	{
		value: 'cb-Set2',
		label: "ColorBrewer qual: Set 2"	
	},
	{
		value: 'cb-Set3',
		label: "ColorBrewer qual: Set 3"	
	},
	{
		value: 'sol-base',
		label: "Solarized base"	
	},
	{
		value: 'sol-accent',
		label: "Solarized accent"	
	}		
];
