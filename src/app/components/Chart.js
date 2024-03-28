"use client"
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
    {
        name: 'JAN',
        uv: 200,
        pv: 100,
    },
    {
        name: 'FEB',
        uv: 200,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'MAR',
        uv: 100,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'APR',
        uv: 300,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'MAY',
        uv: 700,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'JUN',
        uv: 500,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'JUL',
        uv: 500,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'AUG',
        uv: 400,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'SEP',
        uv: 800,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'OCT',
        uv: 800,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'NOV',
        uv: 800,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'DEC',
        uv: 900,
        pv: 4300,
        amt: 2100,
    },
    {
        name: '',
        uv: 900,
        pv: 4300,
        amt: 2100,
    },
];
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white bg-opacity-65 p-2 border border-orange-600 rounded-[26px] shadow">
          <p className="text-sm font-medium text-gray-900 items-center justify-center">{`${label} : ${payload[0].value}`}</p>
          {/* Add more content or styling as needed */}
        </div>
      );
    }
  
    return null;
  };
export default class ChartG extends PureComponent {
    render() {
        const CustomArea = ({ shapeProps }) => {
            return <defs>
                <clipPath id="clipPath">
                    <rect {...shapeProps} />
                </clipPath>
            </defs>;
        }

        return (
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 40,
                    }}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="10%" stopColor="#FF6800" stopOpacity={1} />
                            <stop offset="100%" stopColor="#FD97FF" stopOpacity={0.2} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="6 10" vertical={false} />
                    <XAxis hide={false} height={10} dataKey="name" />
                    <YAxis
                        axisLine={false}
                        tickCount={10}
                        tickLine={false}
                        domain={[0, 'dataMax']}
                        allowDataOverflow={true}
                        ticks={[0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]}
                    />

      <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#C86C00', strokeWidth: 3 }} />
                    <Area
                      activeDot={{ stroke: '#C86C00', strokeWidth: 2, fill: '#C86C00' }}
                        type="linear"
                        dataKey="uv"
                        stroke="#C86C00" // Custom stroke color
                        fillOpacity={1} // Full opacity for the fill
                        fill="url(#colorUv)" // Reference to the gradient defined in <defs>
                        strokeWidth={2} // Custom stroke width
                    />
                </AreaChart>
            </ResponsiveContainer>

        );

    }

}