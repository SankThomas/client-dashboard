import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const state = {
  labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  datasets: [
    {
      label: "",
      backgroundColor: "hsl(10, 79%, 65%)",
      hoverBackgroundColor: "hsl(186, 34%, 60%)",
      borderRadius: 8,
      data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
    },
  ],
};

export default function Chart() {
  return <Bar data={state} />;
}
