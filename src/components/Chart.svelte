<script lang="ts">
    import type { QuestionScores } from "$models/Models";
    import Chart from "chart.js/auto";
	
    const { chartData } : { chartData: QuestionScores } = $props();
	let chartObject: Chart;

    function setupChart(element) {
        chartObject = new Chart(element, {
            type: "pie",
            data: {
                labels: chartData.question_options,
                datasets: [
                    {
                        label: "Број одговора",
                        data: chartData.option_scores,
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        display: false,
                        beginAtZero: true,
                    },
                },
            },
        });
    }
	
	function drawChart(node) {
		setupChart(node);

		return {
			update() {
				chartObject.destroy();
				setupChart(node);
			},
			destroy() {
				chartObject.destroy();
			}
		}
	}
</script>

<canvas class="chart" use:drawChart></canvas>