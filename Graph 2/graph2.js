/*
d3.csv("2014-2018_Road_Crash.csv").get(function(data){
    var road_crash = d3.nest()
        .key(function(d) { return d.LGA_Name; })
        .key(function(d) { return d.Year; })
        .rollup(function(v) { return {
            crash_count: d3.sum(v, function(d) { return d.Crash_Count; }),
            cas_count: d3.sum(v, function(d) { return d.Total_Cas; })
        };})
        .entries(data);
    
    console.log(road_crash);
})
*/


var data = [{
  "LGA_name": "ADELAIDE",
  "years": [
    [2014, 2014],
    [2015, 2015],
    [2016, 2016],
    [2017, 2017],
    [2018, 2018]
  ],
  "crash_count": [
    [2014, 911],
    [2015, 829],
    [2016, 810],
    [2017, 693],
    [2018, 675]
  ],
  "cas_count": [
    [2014, 322],
    [2015, 304],
    [2016, 255],
    [2017, 296],
    [2018, 269]
  ]
}, {
  "LGA_name": "SALISBURY",
  "years": [
    [2014, 2014],
    [2015, 2015],
    [2016, 2016],
    [2017, 2017],
    [2018, 2018]
  ],
  "crash_count": [
    [2014, 1407],
    [2015, 1376],
    [2016, 1515],
    [2017, 1128],
    [2018, 1269]
  ],
  "cas_count": [
    [2014, 630],
    [2015, 588],
    [2016, 564],
    [2017, 546],
    [2018, 559]
  ]
},{
  "LGA_name": "PORT ADELAIDE ENFIELD",
  "years": [
    [2014, 2014],
    [2015, 2015],
    [2016, 2016],
    [2017, 2017],
    [2018, 2018]
  ],
  "crash_count": [
    [2014, 1332],
    [2015, 1347],
    [2016, 1486],
    [2017, 1220],
    [2018, 1318]
  ],
  "cas_count": [
    [2014, 520],
    [2015, 503],
    [2016, 470],
    [2017, 465],
    [2018, 500]
  ]
}
,{
  "LGA_name": "PROSPECT",
  "years": [
    [2014, 2014],
    [2015, 2015],
    [2016, 2016],
    [2017, 2017],
    [2018, 2018]
  ],
  "crash_count": [
    [2014, 345],
    [2015, 362],
    [2016, 345],
    [2017, 277],
    [2018, 288]
  ],
  "cas_count": [
    [2014, 141],
    [2015, 153],
    [2016, 96],
    [2017, 115],
    [2018, 133]
  ]
}
,{
  "LGA_name": "NORWOOD,PAYNEHAM & ST PETERS",
  "years": [
    [2014, 2014],
    [2015, 2015],
    [2016, 2016],
    [2017, 2017],
    [2018, 2018]
  ],
  "crash_count": [
    [2014, 710],
    [2015, 681],
    [2016, 753],
    [2017, 605],
    [2018, 569]
  ],
  "cas_count": [
    [2014, 265],
    [2015, 241],
    [2016, 259],
    [2017, 233],
    [2018, 221]
  ]
},{
  "LGA_name": "MT.GAMBIER.",
  "years": [
    [2014, 2014],
    [2015, 2015],
    [2016, 2016],
    [2017, 2017],
    [2018, 2018]
  ],
  "crash_count": [
    [2014, 142],
    [2015, 128],
    [2016, 163],
    [2017, 115],
    [2018, 113]
  ],
  "cas_count": [
    [2014, 40],
    [2015, 39],
    [2016, 34],
    [2017, 37],
    [2018, 55]
  ]
},{
  "LGA_name": "ONKAPARINGA",
  "years": [
    [2014, 2014],
    [2015, 2015],
    [2016, 2016],
    [2017, 2017],
    [2018, 2018]
  ],
  "crash_count": [
    [2014, 1092],
    [2015, 1018],
    [2016, 1080],
    [2017, 795],
    [2018, 878]
  ],
  "cas_count": [
    [2014, 505],
    [2015, 473],
    [2016, 508],
    [2017, 409],
    [2018, 391]
  ]
},{
  "LGA_name": "CHARLES STURT",
  "years": [
    [2014, 2014],
    [2015, 2015],
    [2016, 2016],
    [2017, 2017],
    [2018, 2018]
  ],
  "crash_count": [
    [2014, 1239],
    [2015, 1095],
    [2016, 1214],
    [2017, 950],
    [2018, 926]
  ],
  "cas_count": [
    [2014, 477],
    [2015, 442],
    [2016, 426],
    [2017, 392],
    [2018, 375]
  ]
},{
  "LGA_name": "UNLEY",
  "years": [
    [2014, 2014],
    [2015, 2015],
    [2016, 2016],
    [2017, 2017],
    [2018, 2018]
  ],
  "crash_count": [
    [2014, 475],
    [2015, 425],
    [2016, 432],
    [2017, 341],
    [2018, 339]
  ],
  "cas_count": [
    [2014, 175],
    [2015, 164],
    [2016, 145],
    [2017, 148],
    [2018, 129]
  ]
},{
  "LGA_name": "WEST TORRENS",
  "years": [
    [2014, 2014],
    [2015, 2015],
    [2016, 2016],
    [2017, 2017],
    [2018, 2018]
  ],
  "crash_count": [
    [2014, 893],
    [2015, 828],
    [2016, 902],
    [2017, 673],
    [2018, 684]
  ],
  "cas_count": [
    [2014, 320],
    [2015, 329],
    [2016, 271],
    [2017, 282],
    [2018, 273]
  ]
},{
  "LGA_name": "WALKERVILLE TOWN COUNCIL",
  "years": [
    [2014, 2014],
    [2015, 2015],
    [2016, 2016],
    [2017, 2017],
    [2018, 2018]
  ],
  "crash_count": [
    [2014, 235],
    [2015, 191],
    [2016, 175],
    [2017, 154],
    [2018, 158]
  ],
  "cas_count": [
    [2014, 120],
    [2015, 59],
    [2016, 57],
    [2017, 64],
    [2018, 56]
  ]
},{
  "LGA_name": "BURNSIDE",
  "years": [
    [2014, 2014],
    [2015, 2015],
    [2016, 2016],
    [2017, 2017],
    [2018, 2018]
  ],
  "crash_count": [
    [2014, 317],
    [2015, 349],
    [2016, 390],
    [2017, 333],
    [2018, 318]
  ],
  "cas_count": [
    [2014, 120],
    [2015, 130],
    [2016, 146],
    [2017, 170],
    [2018, 129]
  ]
}
];

function x(d) {
    return d.cas_count;
  }
  
function y(d) {
    return d.crash_count;
}

function radius(d) {
    return d.crash_count;
}

function color(d) {
    return d.LGA_name;
}

function key(d) {
    return d.LGA_name;
}

var currentLGA = "";

// Chart dimensions.
var margin = {
    top: 19.5,
    right: 19.5,
    bottom: 19.5,
    left: 39.5
  },
  width = 960 - margin.right,
  height = 500 - margin.top - margin.bottom,
  yearMargin = 10;

  var xScale = d3.scaleLinear().domain([0, 800]).range([0, width]),
  yScale = d3.scaleLinear().domain([0, 1800]).range([height, 0]),
  radiusScale = d3.scaleLinear().domain([0, 2000]).range([0, 40]),
  colorScale = d3.scaleOrdinal(d3.schemeCategory10);

// The x & y axes.
formatter = d3.format(".0%");
var xAxis = d3.axisBottom()
    .scale(xScale);

var yAxis = d3.axisLeft()
    .scale(yScale);

var svg = d3.select("#chart").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Add the x-axis.
svg.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis);

// Add the y-axis.
svg.append("g")
  .attr("class", "y axis")
  .call(yAxis);

// Add an x-axis label.
svg.append("text")
  .attr("class", "x label")
  .attr("text-anchor", "end")
  .attr("x", width)
  .attr("y", height - 6)
  .text("Number of Casualty");

// Add a y-axis label.
svg.append("text")
  .attr("class", "y label")
  .attr("text-anchor", "end")
  .attr("y", 6)
  .attr("dy", ".75em")
  .attr("transform", "rotate(-90)")
  .text("Number of Road Crashes");

// Add the year label; the value is set on transition.
var label = svg.append("text")
  .attr("class", "year label")
  .attr("text-anchor", "end")
  .attr("font", "150px")
  .attr("y", height - 24)
  .attr("x", width)
  .text(2014);

console.log(height,width)

var country = svg.append("text")
  .attr("class", "country")
  .attr("y", height - margin.bottom)
  .attr("x", margin.left)
  .text("");

drawMotionChart(data);

function drawMotionChart(nations) {

  var currentLGA = "";

  // A bisector since many nation's data is sparsely-defined.
  var bisect = d3.bisector(function(d) {
    return d[0];
  });

  // Add a dot per nation. Initialize the data at 2013, and set the colors.
  var tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .text("a simple tooltip");

  tooltip.text("my tooltip text");

  var dots = svg.append("g")
    .attr("class", "dots");

  var dot = dots.selectAll(".dot")
    .data(interpolateData(2018))
    .enter().append("circle")
    .attr("class", "dot")
    .style("fill", function(d) {
      return colorScale(color(d));
    })
    .on("mouseover", function(d) {
      tooltip.html("<strong>LGA:</strong> " + d.LGA_name + "<br><strong>Crash Number:</strong>"
      + Math.round(d.crash_count) + "<br><strong>Casualty:</strong>"+ Math.round(d.cas_count));
      tooltip.attr('class', 'd3-tip');
      return tooltip.style("visibility", "visible");
    })
    .on("mousemove", function(d) {
      tooltip.html("<strong>LGA:</strong> " + d.LGA_name + "<br><strong>Crash Number:</strong>"
      + Math.round(d.crash_count) + "<br><strong>Casualty:</strong>"+ Math.round(d.cas_count));
      return tooltip.style("top", (d3.event.pageY - 10) + "px").style("left", (d3.event.pageX + 10) + "px");
    })
    .on("mouseout", function(d) {
      return tooltip.style("visibility", "hidden");
    })
    .call(position)
    .sort(order);

  // Add a title.
  dot.append("text")
    .text(function(d) {
      return d.LGA_name;
    });

  // Add an overlay for the year label.
  var box = label.node().getBBox();
  console.log(box)

  var overlay = svg.append("rect")
    .attr("class", "overlay")
    .attr("x", box.x)
    .attr("y", box.y)
    .attr("width", box.width)
    .attr("height", box.height)
    .on("mouseover", enableInteraction);

    

  // Start a transition that interpolates the data based on year.
  svg.transition()
    .duration(30000)
    .ease(d3.easeLinear)
    .tween("year", tweenYear)
    .on("end", enableInteraction);

  // Positions the dots based on data.
  function position(dot) {
    dot.attr("cx", function(d) {
        return xScale(x(d));
      })
      .attr("cy", function(d) {
        return yScale(y(d));
      })
      .attr("r", function(d) {
        return radiusScale(radius(d));
      });
  }

  // Defines a sort order so that the smallest dots are drawn on top.
  function order(a, b) {
    return radius(b) - radius(a);
  }

  // After the transition finishes, you can mouseover to change the year.
  function enableInteraction() {
    var yearScale = d3.scaleLinear()
      .domain([2014, 2018])
      .range([box.x - 10, box.x + box.width - 10])
      .clamp(true);

    // Cancel the current transition, if any.
    svg.transition().duration(0);
    

    overlay.on("mouseover", mouseover)
      .on("mouseout", mouseout)
      .on("mousemove", mousemove)
      .on("touchmove", mousemove);

    function mouseover() {
      label.classed("active", true);
    }

    function mouseout() {
      label.classed("active", false);
    }

    function mousemove() {
      displayYear(yearScale.invert(d3.mouse(this)[0]));
    }
  }

  // Tweens the entire chart by first tweening the year, and then the data.
  // For the interpolated data, the dots and label are redrawn.
  function tweenYear() {
    var year = d3.interpolateNumber(2014, 2018);
    return function(t) { displayYear(year(t)); };
  }

  // Updates the display to show the specified year.
  function displayYear(year) {
    dot.data(interpolateData(year), key).call(position).sort(order);
    label.text(Math.round(year));
  }

  // Interpolates the dataset for the given (fractional) year.
  function interpolateData(year) {
    return nations.map(function(d) {
      return {
        LGA_name: d.LGA_name,
        years: interpolateValues(d.years, year),
        crash_count: interpolateValues(d.crash_count, year),
        cas_count: interpolateValues(d.cas_count, year)
      };
    });
  }

  // Finds (and possibly interpolates) the value for the specified year.
  function interpolateValues(values, year) {
    var i = bisect.left(values, year, 0, values.length - 1),
      a = values[i];
    if (i > 0) {
      var b = values[i - 1],
        t = (year - a[0]) / (b[0] - a[0]);
      return a[1] * (1 - t) + b[1] * t;
    }
    return a[1];
  }
}
