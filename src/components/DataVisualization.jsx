import { Line } from "react-chartjs-2";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
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
  // console.log(data);
  

  
  // const width = 600;
  // const height = 200;
  // const padding = 40;

  // const temps = data.map(d => d.temp);
  // // const days = data.map(d => d.day);
  // const maxTemp = Math.max(...temps);
  // const minTemp = Math.min(...temps);

  // const getX = (i) => padding + (i * (width - 2 * padding)) / (data.length - 1);
  // const getY = (temp) => height - padding - ((temp - minTemp) / (maxTemp - minTemp)) * (height - 2 * padding);

  // const points = data.map((d, i) => `${getX(i)},${getY(d.temp)}`).join(" ");

 
    let labels = []
    data.map((data)=>{
      labels.push(data.day)
    })
    let dataset = []
    data.map((data)=>{
      dataset.push(data.temp)
    })
  
  

  return (
      // <svg height={height} style={{width: "100%"}} className="temperature-chart">
      //   <polyline
      //     fill="none"
      //     stroke="#0d6efd"
      //     strokeWidth="2"
      //     points={points}
          
      //   />
      //   {data.map((d, i) => (
      //     <g key={i}>
      //       <circle cx={getX(i)} cy={getY(d.temp)} r="4" fill="#0d6efd" />
      //       <text x={getX(i)} y={height - 10} textAnchor="middle" fontSize="12">{d.day}</text>
      //     </g>
      //   ))}
      // </svg>
      <div className="animate-fadeIn w-full">
        <Line 
          options={{}} 
          data={{
            labels: labels,
            datasets: [
              {
               label: '',
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