var D3Funnel;

require.config( {
	d3: "//cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.js"
} );

var dependencies = [
	"qlik", 
	"jquery", 
	"./lib/js/extensionUtils", 
	"text!./lib/css/main.css", 
	"d3", 
	"./lib/js/d3-funnel.min", 
	"./lib/js/palette", 
	"./lib/js/options"
];

define(dependencies, function(q, t, i, a) {
    "use strict";

    function p(e, l) {
		
		if(l.props.paletteColorR){
			var colors_ = palette(l.props.paletteColor, l.qHyperCube.qDimensionInfo[0].qCardinal).reverse();
		}else{
			var colors_ = palette(l.props.paletteColor, l.qHyperCube.qDimensionInfo[0].qCardinal);
		};
		
		var colors = colors_.map(function(e) {return '#' + e});		
		
		function s(t) {
			var i = l.qHyperCube.qDimensionInfo[0].qGroupFieldDefs[0],
                a = q.currApp();
			//console.log('Clicked Dimension: ',i);
			console.log('Clicked Field: ',[t.label.raw][0]);
			a.field(i).selectValues([t.label.raw], !0, !1);		
        };
		
        e.addClass("container"), e.empty();
        var n = t(document.createElement("div"));
        n.attr("id", "chart_" + l.qInfo.qId), n.addClass("chart"), e.append(n);
		
		var i = {
				chart: {
					width: $('#pipeFunnel').width()-60,
					height: e.height(),
					bottomWidth: 1 / 3,
					bottomPinch: l.props.chartBottomPinch,
					inverted: l.props.chartInverted,
					horizontal: false,
					animate: l.props.chartAnimation,
					curve: {
						enabled: l.props.chartCurved,
						height: l.props.chartCurveAmt
					},
					totalCount: null
				},
				block: {
					dynamicHeight: l.props.dynamicHeight,
					dynamicSlope: l.props.dynamicSlope,
					barOverlay: l.props.barOverlay,
					fill: {
						scale: colors,
						type: 'solid'
					},
					minHeight: l.props.blockHeight,
					highlight: true
				},
				label: {
					fontFamily: null,
					fontSize: l.props.labelFontSize+'px',
					fill: l.props.labelColor,
					format: l.props.labelFormat
				},
				events: {
					click: {
						block: s
					}
				}               
            };		
            a = new D3Funnel("#chart_" + l.qInfo.qId);
            var o = u(l);
        a.draw(o, i);
    }

    function u(l) {
        var t = null;
        if (l.qHyperCube && l.qHyperCube.qDataPages[0].qMatrix) {
            var t = [],
                r = 0,
                n = l.qHyperCube.qDataPages[0].qMatrix.length;
			l.qHyperCube.qDataPages[0].qMatrix.forEach(function(l) {
                var i = [];
                //i.push(e[0].qText), i.push([e[1].qNum, e[1].qText]), n >= 3 && i.push(o.Paired[n][r]), t.push(i), r++
				i.push(l[0].qText), i.push([l[1].qNum, l[1].qText]), t.push(i), r++
            });
        }
		//console.log(t);
        return t
    }
    return i.addStyleToHeader(a), {
        definition: {
			type: "items",
			component: "accordion",
			items: {
				dimensions: {
					uses: "dimensions",
					min: 1,
					max: 1				
				},
				measures: {
					uses: "measures",
					min: 1,
					max: 1				
				},
				sorting: {
					uses: "sorting"
				},
				appearance: {
					uses: "settings",
					items: {
						settings: {
							type: "items",
							label: "Presentation",
							items: {
								chartInverted: {
									ref: "props.chartInverted",
									type: "boolean",
									component: "switch",
									label: "Chart Inverted",
									options: [{
										value: true,
										label: "On"
									}, {
										value: false,
										label: "Off"
									}],
									defaultValue: false								
								},
								chartCurved: {
									ref: "props.chartCurved",
									type: "boolean",
									component: "switch",
									label: "Chart Curved",
									options: [{
										value: true,
										label: "On"
									}, {
										value: false,
										label: "Off"
									}],
									defaultValue: false								
								},
								chartCurvedAmt: {
									type: "integer",
									label: "Chart Curvature (px):",
									ref: "props.chartCurveAmt",
									expression: "optional",
									defaultValue: 20								
								},						
								animation: {
									type: "integer",
									label: "Chart Animation Time (ms):",
									ref: "props.chartAnimation",
									expression: "optional",
									defaultValue: 60								
								},						
								chartBottomPinch: {
									ref: "props.chartBottomPinch",
									type: "number",
									component: "slider",
									label: "Chart Bottom Pinch",
									min: 0,
									max: 10,
									step: 1,
									defaultValue: 0								
								},
								
								palette: {
									type: "string",
									component: "dropdown",
									label: "Block Color Palette:",
									ref: "props.paletteColor",
									defaultValue: "tol-dv",
									options: colorpalette								
								},
								paletteR: {
									ref: "props.paletteColorR",
									type: "boolean",
									component: "switch",
									label: "Block Reverse Colors?",
									options: [{
										value: true,
										label: "On"
									}, {
										value: false,
										label: "Off"
									}],
									defaultValue: true								
								},								
								dynamicHeight: {
									ref: "props.dynamicHeight",
									type: "boolean",
									component: "switch",
									label: "Block Dynamic Height",
									options: [{
										value: true,
										label: "On"
									}, {
										value: false,
										label: "Off"
									}],
									defaultValue: false								
								},
								dynamicSlope: {
									ref: "props.dynamicSlope",
									type: "boolean",
									component: "switch",
									label: "Block Dynamic Slope",
									options: [{
										value: true,
										label: "On"
									}, {
										value: false,
										label: "Off"
									}],
									defaultValue: false								
								},
								barOverlay: {
									ref: "props.barOverlay",
									type: "boolean",
									component: "switch",
									label: "Block Bar Overlay",
									options: [{
										value: true,
										label: "On"
									}, {
										value: false,
										label: "Off"
									}],
									defaultValue: false								
								},
								blockHeight: {
									type: "integer",
									label: "Block Min. Height (px):",
									ref: "props.blockHeight",
									expression: "optional",
									defaultValue: 50								
								},
								
								labelFontSize: {
									type: "integer",
									label: "Label Font Size (px):",
									ref: "props.labelFontSize",
									expression: "optional",
									defaultValue: 12								
								},
								labelColor: {
									type: "string",
									label: "Label Color:",
									ref: "props.labelColor",
									expression: "optional",
									defaultValue: '#000'								
								},
								labelFormat: {
									type: "string",
									label: "Label Format:",
									ref: "props.labelFormat",
									expression: "optional",
									defaultValue: '{l}: {f}'								
								}						
							}
						}
					}				
				}
			}			
		},
        initialProperties: {
			qHyperCubeDef: {
				qDimensions: [],
				qMeasures: [],
				qInitialDataFetch: [{
					qWidth: 2,
					qHeight: 100
				}]
			}			
		},
        snapshot: {
            canTakeSnapshot: true
        },
        resize: function(e, l) {
			p(e, l);
        },
        paint: function(e, l) {
			p(e, l);
        }
    }
});