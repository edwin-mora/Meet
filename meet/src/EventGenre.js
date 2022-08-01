import React, { useEffect, useState } from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

export const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);

  const getData = () => {
    const genres = ["React", "JavaScript", "Node", "jQuery", "AngularJS"];
    const data = genres.map((genre) => {
      const value = events.filter((event) =>
        event.summary.split(" ").includes(genre)
      ).length;
      return { name: genre, value };
    });
    return data;
  };

  useEffect(() => {
    setData(() => getData());
    // eslint-disable-next-line
  }, [events]);

  return (
    <ResponsiveContainer>
      <PieChart width={500} height={400}>
        <Pie
          data={data}
          labelLine={false}
          outerRadius={80}
          fill="#009EEC"
          dataKey="value"
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
        ></Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
