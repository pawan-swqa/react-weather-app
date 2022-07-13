import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [12, 9, 3, 5, 2, 3],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [12, 9, 3, 5, 2, 3],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
}; // ENDS HERE

const BarChart: React.FunctionComponent = (props: any) => {
  return (
    <div
      className="main-content"
      style={{ height: props?.style?.height, width: props?.style?.width }}
    >
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;
