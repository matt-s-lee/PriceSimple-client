import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PriceChart = ({ product, dataset }) => {
  console.log(dataset);
  const labels = ["2022-08-04", "2022-08-11"];
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            return "$" + value.toFixed(2);
          },
        },
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: product,
        data: dataset,
        borderColor: "lightgrey",
        backgroundColor: "#828282",
      },
    ],
  };

  return (
    <Wrapper>
      <Line options={options} data={data} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 40vh;
  width: 80vw;
  position: fixed;
  top: 50%;
  align-self: center;
`;
export default PriceChart;
