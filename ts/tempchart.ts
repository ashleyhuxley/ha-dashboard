import { fabric } from 'fabric'
import * as helpers from './helpers'

export class TempChart {

    chart: fabric.Chart;

    updateDtat(data): void {
        this.chart.data = data;
    }

    getTempChart(): fabric.Group {
        var box = helpers.getTitleBox("TEMPERATURE", 500, 180);

        var options = {
            type: 'line',
            options: {
              responsive: true,
              interaction: {
                mode: 'index',
                intersect: false,
              },
              stacked: false,
              scales: {
                y: {
                  type: 'linear',
                  display: true,
                  position: 'left',
                },
                y1: {
                  type: 'linear',
                  display: true,
                  position: 'right',
          
                  // grid line settings
                  grid: {
                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                  },
                },
              }
            },
          };

        this.chart = new fabric.Chart({
            width: 490,
            height: 140,
            top: 20,
            left: 10,
            chart: options
          });

        var group = new fabric.Group([box, this.chart], { top: 600, left: 640 });
		return group;
    }
}