import React from "react";
import CalendarHeatmap from "reactjs-calendar-heatmap";

export default function UserHeatmap() {
  var data = [
    {
      date: "2022-09-01",
      total: 17164,
      details: [
        {
          name: "Active Time",
          date: "2022-09-01 12:30:45",
          value: 1255,
        },
      ],
    },
    {
      date: "2022-09-02",
      total: 125,
      details: [
        {
          name: "Active Time",
          date: "2022-09-02",
          value: 125,
        },
      ],
    },
    {
      date: "2022-09-03",
      total: 12345,
      details: [
        {
          name: "Active Time",
          date: "2022-09-03",
          value: 12345,
        },
      ],
    },
    {
      date: "2022-01-01",
      total: 17164,
      details: [
        {
          name: "Active Time",
          date: "2022-01-01 12:30:45",
          value: 1255,
        },
      ],
    },
    {
      date: "2022-01-02",
      total: 125,
      details: [
        {
          name: "Active Time",
          date: "2022-09-02",
          value: 125,
        },
      ],
    },
    {
      date: "2022-01-03",
      total: 12345,
      details: [
        {
          name: "Active Time",
          date: "2022-09-03",
          value: 12345,
        },
      ],
    },
  ];

  return (
    <div className="userheatmap__container">
      <h3>6 Active Days this year</h3>
      <CalendarHeatmap
        data={data}
        color="#2ecc71"
        overview="year"
      ></CalendarHeatmap>
    </div>
  );
}
