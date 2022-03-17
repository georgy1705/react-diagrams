const DiagramTheme = () => {

    const dodgerBlue = "#1E90FF";
    const darkTurquoise = "#00CED1";
    const blue = "#0000FF";
    const darkBlue = "#00008B";
    const steelBlue = "#4682B4";
    const colors = [
    darkTurquoise,
    dodgerBlue,
    blue,
    darkBlue,
    steelBlue
    ];
    const blueGrey50 = "#ECEFF1";
    const blueGrey300 = "#90A4AE";
    const blueGrey700 = "#455A64";
    const grey900 = "#212121";

    const sansSerif = "'Helvetica Neue', 'Helvetica', sans-serif";
    const letterSpacing = "normal";
    const fontSize = 12;

    const padding = 8;
    const baseProps = {
    width: 350,
    height: 350,
    padding: 50
    };

    const baseLabelStyles = {
    fontFamily: sansSerif,
    fontSize,
    letterSpacing,
    padding,
    fill: blueGrey700,
    stroke: "transparent",
    strokeWidth: 0
    };

    const centeredLabelStyles = {...{ textAnchor: "middle" }, baseLabelStyles}

    const strokeDasharray = "10, 5";
    const strokeLinecap = "round";
    const strokeLinejoin = "round";

    return {
    area: {
        ...{
        style: {
            data: {
            fill: grey900
            },
            labels: baseLabelStyles
        }
        },
        baseProps
        },
    axis: {
        ...{
        style: {
            axis: {
            fill: "transparent",
            stroke: blueGrey300,
            strokeWidth: 2,
            strokeLinecap,
            strokeLinejoin
            },
            axisLabel: {centeredLabelStyles, ...{
            padding,
            stroke: "transparent"
            }},
            grid: {
            fill: "none",
            stroke: blueGrey50,
            strokeDasharray,
            strokeLinecap,
            strokeLinejoin,
            pointerEvents: "painted"
            },
            ticks: {
            fill: "transparent",
            size: 5,
            stroke: blueGrey300,
            strokeWidth: 1,
            strokeLinecap,
            strokeLinejoin
            },
            tickLabels: {baseLabelStyles, ...{
            fill: blueGrey700
            }}
        }
        },
        baseProps
        },
    
    bar: {
        ...{
        style: {
            data: {
            fill: blueGrey700,
            padding,
            strokeWidth: 0
            },
            labels: baseLabelStyles
        }
        },
        baseProps
        },

    chart: baseProps,
    errorbar: {
        ...{
        borderWidth: 8,
        style: {
            data: {
            fill: "transparent",
            opacity: 1,
            stroke: blueGrey700,
            strokeWidth: 2
            },
            labels: baseLabelStyles
        }
        },
        baseProps
        },
    group: {
        ...{
        colorScale: colors
        },
        baseProps
        },

    legend: {
        colorScale: colors,
        gutter: 10,
        orientation: "vertical",
        titleOrientation: "top",
        style: {
        data: {
            type: "circle"
        },
        labels: baseLabelStyles,
        title: {baseLabelStyles, ...{ padding: 5 }}
        }
    },

    line: {
        ...{
        style: {
            data: {
            fill: "transparent",
            opacity: 1,
            stroke: blueGrey700,
            strokeWidth: 2
            },
            labels: baseLabelStyles
        }
        },
        baseProps
        },
    pie: {
        ...{
        colorScale: colors,
        style: {
            data: {
            padding,
            stroke: blueGrey50,
            strokeWidth: 1
            },
            labels: {baseLabelStyles, ...{ padding: 20 }}
        }
        },
        baseProps
        },

    stack: {
        ...{
        colorScale: colors
        },
        baseProps
        },
    }
}

export default DiagramTheme



