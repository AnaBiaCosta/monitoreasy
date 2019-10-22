//import Chart from '../TotemInfo/Charts.min.js'
import {Line} from 'react-chartsjs-2'

		

		var config = {
			type: 'doughnut',
			data: {
				datasets: [{
					data: [
						randomScalingFactor(),
						randomScalingFactor(),
					],
					backgroundColor: [
						"#D3D3D3",
						"#00C853",
					],
					label: 'Memória'
				}],
				labels: [
					'Em uso',
					'Disponível'
				]
			},
			options: {
				responsive: true,
				legend: {
					position: 'top',
				},
				title: {
					display: true,
                    text: 'Memória',
                    
				},
				animation: {
					animateScale: true,
					animateRotate: true
				}
			}
		};

		window.onload = function() {
			var ctx = document.getElementById('chart-area').getContext('2d');
			window.myDoughnut = new Chart(ctx, config);
		};

		
	