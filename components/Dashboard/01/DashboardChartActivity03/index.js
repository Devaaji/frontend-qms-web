import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Box } from '@chakra-ui/react';
import useRemotePoint03Pengukuran01 from '../../../hooks/remote/useRemotePoint03Pengukuran01';
import useStorePagination from '../../../../store/useStorePagination';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DashboardChartActivity03 = () => {
  const pagePoint03 = useStorePagination((state) => state.pagePoint03);
  const { data: dataPengkuranPoint03 } = useRemotePoint03Pengukuran01({
    limitIndex: 10,
    pageIndex: pagePoint03,
  });

  const labels = dataPengkuranPoint03?.data?.map(
    (product) => product.total_product
  );

  const dimension = dataPengkuranPoint03?.data?.map(
    (product) => product.p3_dimension
  );
  const minDimension = dataPengkuranPoint03?.data?.map(
    (product) => product.p3_dimension_min
  );
  const maxDimension = dataPengkuranPoint03?.data?.map(
    (product) => product.p3_dimension_max
  );
  const actual = dataPengkuranPoint03?.data?.map(
    (product) => product.p3_actual
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Line Chart Point Pengukuran 3',
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Dimensi',
        data: dimension,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Dimensi Minimum',
        data: minDimension,
        borderColor: 'RGB(243 150 35)',
        backgroundColor: 'RGB(231 144 36)',
      },
      {
        label: 'Dimensi Maximum',
        data: maxDimension,
        borderColor: 'RGB(150 152 154)',
        backgroundColor: 'RGB(128 129 130)',
      },
      {
        label: 'Actual',
        data: actual,
        borderColor: 'RGB(243 198 42)',
        backgroundColor: 'RGB(190 145 34)',
      },
    ],
  };

  return (
    <Box mt="10">
      <Line options={options} data={data} />
    </Box>
  );
};

export default DashboardChartActivity03;
