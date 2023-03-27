import Head from 'next/head';
import classes from './Analytics.module.css';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Analytics: React.FC<{ posts: any }> = (props) => {
  let dataset: { label: string[]; data: number[] } = { label: [], data: [] };

  props.posts.map((post: { country: string }): any => {
    if (Object.values(dataset.label).includes(post.country)) {
      let index = dataset.label.indexOf(post.country);
      dataset.data[index] += 1;
    } else {
      dataset.label.push(post.country);
      dataset.data.push(1);
    }
  });

  const data = {
    labels: dataset.label,
    datasets: [
      {
        label: '# of Posts',
        data: dataset.data,
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

  return (
    <>
      <Head>
        <title>Analytics</title>
      </Head>
      <div className={classes.analytics}>
        <div className={classes.card}>
          <h2>Number of Posts per Country</h2>
          <Doughnut data={data} />
        </div>
      </div>
    </>
  );
};

export default Analytics;
