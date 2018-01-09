import React from 'react';
import * as d3 from "d3";
import uStatePaths from './assets/uStates';
import './map.css';

export class Map extends React.Component {

	componentDidMount(){
		function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
				return "<h4>"+n+"</h4>";
			}
			var sampleData ={};
			["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
			"ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH",
			"MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT",
			"CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN",
			"WI", "MO", "AR", "OK", "KS", "LS", "VA"]
				.forEach(function(d){
					var low=Math.round(100*Math.random());
					sampleData[d]={color:d3.interpolate("#66ff99", "#000099")(low/100)};
				});

			 //draw states on id #statesvg

			 var uStates= {};
			uStates.draw = function(id, data, toolTip){
		function mouseOver(d){
			d3.select("#tooltip").transition().duration(200).style("opacity", .9);

			d3.select("#tooltip").html(toolTip(d.n, data[d.id]))
				.style("left", (d3.event.pageX) + "px")
				.style("top", (d3.event.pageY - 28) + "px");
		}

		function mouseOut(){
			d3.select("#tooltip").transition().duration(500).style("opacity", 0);
		}

		function spRedirect(d){
			d3.select("#tooltip").html(toolTip(d.n, data[d.n]))
			localStorage.setItem("state", d.n)
			window.location = "/statepage"
		}

		d3.select(id).selectAll(".state")
			.data(uStatePaths).enter().append("path").attr("class","state").attr("d",function(d){ return d.d;})
			.style("fill",function(d){ /*console.log(data, data[d.id]);*/ return data[d.id].color; })
			.on("mouseover", mouseOver).on("mouseout", mouseOut).on("click", spRedirect);
	}
			uStates.draw("#statesvg", sampleData, tooltipHtml);

			d3.select("#statesvg").style("height", "600px");
	};
	render () {

		return(
			<div className="map">

			<div id="tooltip"></div>
			<svg width="960" height="600" id="statesvg"></svg>
			</div>
		);
	}
}

export default Map;
