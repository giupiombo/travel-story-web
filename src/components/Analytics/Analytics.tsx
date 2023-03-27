import Head from 'next/head';
import classes from './Analytics.module.css';
import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';
import { useMediaQuery } from 'react-responsive';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Analytics: React.FC<{ posts: any }> = (props) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 1000px)',
  });

  let datasetCountry: { label: string[]; data: number[] } = {
    label: [],
    data: [],
  };
  let datasetMonth: { label: string[]; data: number[] } = {
    label: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  };

  props.posts.map((post: { country: string }): any => {
    if (Object.values(datasetCountry.label).includes(post.country)) {
      let index = datasetCountry.label.indexOf(post.country);
      datasetCountry.data[index] += 1;
    } else {
      datasetCountry.label.push(post.country);
      datasetCountry.data.push(1);
    }
  });

  props.posts.map((post: { date: string }): any => {
    let month = post.date.split(' ')[0];
    let index = datasetMonth.label.indexOf(month);
    datasetMonth.data[index] += 1;
  });

  const dataCountry = {
    labels: datasetCountry.label,
    datasets: [
      {
        label: '# of Posts',
        data: datasetCountry.data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const dataMonth = {
    labels: datasetMonth.label,
    datasets: [
      {
        label: '# of Posts',
        data: datasetMonth.data,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <>
      <Head>
        <title>Analytics</title>
      </Head>
      <div className={classes.analytics}>
        <div className={isMobile ? classes.cardMobile : classes.card}>
          <h2>Number of Posts per Country</h2>
          <Doughnut
            data={dataCountry}
            className={isMobile ? undefined : classes.doughnut}
          />
        </div>
        <div className={isMobile ? classes.cardMobile : classes.card}>
          <h2>Number of Posts per Month</h2>
          <Line
            options={options}
            data={dataMonth}
            className={isMobile ? undefined : classes.line}
          />
        </div>
      </div>
    </>
  );
};

export default Analytics;
