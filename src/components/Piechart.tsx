import React from 'react';
import EChartsReact from 'echarts-for-react';
import { useMemo } from 'react';

interface Data {
  value: number;
  name: string;
}

interface Props {
  data: Data[];
  title: {
    text: string;
    subtext: string;
    left: string;
  };
}

function Piechart({ data, title }: Props) {
  const chartOptions = useMemo(
    () => ({
      title,
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'right',
      },
      series: [
        {
          type: 'pie',
          data: data.sort(function (a, b) {
            return a.value - b.value;
          }),

          top: 40,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    }),
    []
  );
  return (
    <div>
      {' '}
      <EChartsReact option={chartOptions} />
    </div>
  );
}

export default Piechart;
