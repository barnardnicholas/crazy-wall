import * as React from "react";
import { Space } from "react-zoomable-ui";

const rows = [
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
];
const cols = [
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
];

const colorFor = (i) => {
  switch (i % 4) {
    case 0:
      return "#440023";
    case 1:
      return "#F0A932";
    case 2:
      return "#39AA99";
    case 3:
      return "#839FFF";
  }
};

export const LargeAreaDemo = () => {
  return (
    <Space
      style={{ backgroundColor: "black" }}
      innerDivStyle={{ width: 10000 }}
    >
      {rows.map((row, r) => (
        <div key={`row-${r}`} style={{ display: "flex", flexDirection: "row" }}>
          {cols.map((col, c) => (
            <div
              key={`column-${c}`}
              style={{
                height: 200,
                width: 200,
                backgroundColor: colorFor(c + r),
                margin: 10,
                color: "white",
              }}
            >
              {r},{c}
            </div>
          ))}
        </div>
      ))}
    </Space>
  );
};
