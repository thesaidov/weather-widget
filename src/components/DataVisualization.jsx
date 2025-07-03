import { Line } from "react-chartjs-2";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  defaults
} from "chart.js"

Chartjs.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
)

const DataVisualization = ({ data }) => {
  if (!data || data.length === 0) return <div>No data available</div>;

 
    let labels = []
    data.map((data)=>{
      labels.push(data.day)
    })
    let dataset = []
    data.map((data)=>{
      dataset.push(data.temp)
    })
  
  
defaults.maintainAspectRatio = false;
defaults.responsive = true
defaults.onResize

Legend.display = true
defaults.plugins.legend.labels.boxHeight = 0

  return (
      <div className=" w-full">
        <Line 
          options={{
            elements: {
              line: {
                tension: 0.8
              }
            },
            plugins: {
              title:{
                display: true,
                text: "Weekly forecast",
                align: "start",
                font: {
                  weight: "bold",
                  size: 20
                },
                color: "black"
              }
            }
          }} 
          data={{
            labels: labels,
            datasets: [
              {
               label: 'Forecast',
               data: dataset,
               borderColor: "blue",
             }
            ],
          }}
          style={{
            lineHeight: 1
          }}
          />
      </div>
  );
};

export default DataVisualization;