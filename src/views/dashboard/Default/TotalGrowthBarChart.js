// import PropTypes from "prop-types";
// import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";

// // material-ui
// import { useTheme } from "@mui/material/styles";
// import { Grid, MenuItem, TextField, Typography } from "@mui/material";

// // third-party
// import ApexCharts from "apexcharts";
// import Chart from "react-apexcharts";

// // project imports
// import SkeletonTotalGrowthBarChart from "ui-component/cards/Skeleton/TotalGrowthBarChart";
// import MainCard from "ui-component/cards/MainCard";
// import { gridSpacing } from "store/constant";

// // chart data
// // import chartData from "./chart-data/total-growth-bar-chart";

// const status = [
//   {
//     value: "today",
//     label: "Today",
//   },
//   {
//     value: "month",
//     label: "This Month",
//   },
//   {
//     value: "year",
//     label: "This Year",
//   },
// ];

// // ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

// const TotalGrowthBarChart = ({ isLoading, data }) => {
//   const chartData = {
//     height: 480,
//     type: "bar",
//     options: {
//       chart: {
//         id: "bar-chart",
//         stacked: true,
//         toolbar: {
//           show: true,
//         },
//         zoom: {
//           enabled: true,
//         },
//       },
//       responsive: [
//         {
//           breakpoint: 480,
//           options: {
//             legend: {
//               position: "bottom",
//               offsetX: -10,
//               offsetY: 0,
//             },
//           },
//         },
//       ],
//       plotOptions: {
//         bar: {
//           horizontal: false,
//           columnWidth: "50%",
//         },
//       },
//       xaxis: {
//         type: "category",
//         // categories: [
//         //   "Jan",
//         //   "Feb",
//         //   "Mar",
//         //   "Apr",
//         //   "May",
//         //   "Jun",
//         //   "Jul",
//         //   "Aug",
//         //   "Sep",
//         //   "Oct",
//         //   "Nov",
//         //   "Dec",
//         // ],
//         categories: Object?.keys(data),
//       },
//       legend: {
//         show: true,
//         fontSize: "14px",
//         fontFamily: `'Roboto', sans-serif`,
//         position: "bottom",
//         offsetX: 20,
//         labels: {
//           useSeriesColors: false,
//         },
//         markers: {
//           width: 16,
//           height: 16,
//           radius: 5,
//         },
//         itemMargin: {
//           horizontal: 15,
//           vertical: 8,
//         },
//       },
//       fill: {
//         type: "solid",
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       grid: {
//         show: true,
//       },
//     },
//     series: [
//       // {
//       //   name: "Investment",
//       //   data: [35, 125, 35, 35, 35, 80, 35, 20, 35, 45, 15, 75],
//       // },
//       // {
//       //   name: "Loss",
//       //   data: [35, 15, 15, 35, 65, 40, 80, 25, 15, 85, 25, 75],
//       // },
//       // {
//       //   name: "Profit",
//       //   data: [35, 145, 35, 35, 20, 105, 100, 10, 65, 45, 30, 10],
//       // },
//       // {
//       //   name: "Maintenance",
//       //   data: [0, 0, 75, 0, 0, 115, 0, 0, 0, 0, 150, 0],
//       // },
//       {
//         name: "Total Purchases and Expenses",
//         data: Object.values(data).map(
//           (item) => item.total_purchases_and_expenses
//         ),
//       },
//     ],
//   };
//   console.log(data);
//   const [value, setValue] = useState("today");
//   const theme = useTheme();
//   const customization = useSelector((state) => state.customization);

//   const { navType } = customization;
//   const { primary } = theme.palette.text;
//   const darkLight = theme.palette.dark.light;
//   const grey200 = theme.palette.grey[200];
//   const grey500 = theme.palette.grey[500];

//   const primary200 = theme.palette.primary[200];
//   const primaryDark = theme.palette.primary.dark;
//   const secondaryMain = theme.palette.secondary.main;
//   const secondaryLight = theme.palette.secondary.light;

//   useEffect(() => {
//     const newChartData = {
//       ...chartData.options,
//       colors: [primary200, primaryDark, secondaryMain, secondaryLight],
//       xaxis: {
//         labels: {
//           style: {
//             colors: [
//               primary,
//               primary,
//               primary,
//               primary,
//               primary,
//               primary,
//               primary,
//               primary,
//               primary,
//               primary,
//               primary,
//               primary,
//             ],
//           },
//         },
//       },
//       yaxis: {
//         labels: {
//           style: {
//             colors: [primary],
//           },
//         },
//       },
//       grid: {
//         borderColor: grey200,
//       },
//       tooltip: {
//         theme: "light",
//       },
//       legend: {
//         labels: {
//           colors: grey500,
//         },
//       },
//     };

//     // do not load chart when loading
//     if (!isLoading) {
//       ApexCharts.exec(`bar-chart`, "updateOptions", newChartData);
//     }
//   }, [
//     navType,
//     primary200,
//     primaryDark,
//     secondaryMain,
//     secondaryLight,
//     primary,
//     darkLight,
//     grey200,
//     isLoading,
//     grey500,
//   ]);

//   return (
//     <>
//       {isLoading ? (
//         <SkeletonTotalGrowthBarChart />
//       ) : (
//         <MainCard>
//           <Grid container spacing={gridSpacing}>
//             <Grid item xs={12}>
//               <Grid
//                 container
//                 alignItems="center"
//                 justifyContent="space-between"
//               >
//                 <Grid item>
//                   <Grid container direction="column" spacing={1}>
//                     <Grid item>
//                       <Typography variant="subtitle2">Total Growth</Typography>
//                     </Grid>
//                     <Grid item>
//                       <Typography variant="h3">$2,324.00</Typography>
//                     </Grid>
//                   </Grid>
//                 </Grid>
//                 <Grid item>
//                   <TextField
//                     id="standard-select-currency"
//                     select
//                     value={value}
//                     onChange={(e) => setValue(e.target.value)}
//                   >
//                     {status.map((option) => (
//                       <MenuItem key={option.value} value={option.value}>
//                         {option.label}
//                       </MenuItem>
//                     ))}
//                   </TextField>
//                 </Grid>
//               </Grid>
//             </Grid>
//             <Grid item xs={12}>
//               <Chart {...chartData} />
//             </Grid>
//           </Grid>
//         </MainCard>
//       )}
//     </>
//   );
// };

// TotalGrowthBarChart.propTypes = {
//   isLoading: PropTypes.bool,
// };

// export default TotalGrowthBarChart;

import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// material-ui
import { useTheme } from "@mui/material/styles";
import { Grid, MenuItem, TextField, Typography } from "@mui/material";

// third-party
import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";

// project imports
import SkeletonTotalGrowthBarChart from "ui-component/cards/Skeleton/TotalGrowthBarChart";
import MainCard from "ui-component/cards/MainCard";
import { gridSpacing } from "store/constant";

const status = [
  {
    value: "today",
    label: "Today",
  },
  {
    value: "month",
    label: "This Month",
  },
  {
    value: "year",
    label: "This Year",
  },
];

const TotalGrowthBarChart = ({ isLoading, data = {} }) => {
  const chartData = {
    height: 480,
    type: "bar",
    options: {
      chart: {
        id: "bar-chart",
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
        },
      },
      xaxis: {
        type: "category",
        categories: Object.keys(data),
      },
      legend: {
        show: true,
        fontSize: "14px",
        fontFamily: `'Roboto', sans-serif`,
        position: "bottom",
        offsetX: 20,
        labels: {
          useSeriesColors: false,
        },
        markers: {
          width: 16,
          height: 16,
          radius: 5,
        },
        itemMargin: {
          horizontal: 15,
          vertical: 8,
        },
      },
      fill: {
        type: "solid",
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: true,
      },
    },
    series: [
      {
        name: "Total Purchases and Expenses",
        data: Object.values(data).map(
          (item) => item.total_purchases_and_expenses
        ),
      },
    ],
  };

  const [value, setValue] = useState("today");
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);

  const { navType } = customization;
  const { primary } = theme.palette.text;
  const darkLight = theme.palette.dark.light;
  const grey200 = theme.palette.grey[200];
  const grey500 = theme.palette.grey[500];

  const primary200 = theme.palette.primary[200];
  const primaryDark = theme.palette.primary.dark;
  const secondaryMain = theme.palette.secondary.main;
  const secondaryLight = theme.palette.secondary.light;

  useEffect(() => {
    const newChartData = {
      ...chartData.options,
      colors: [primary200, primaryDark, secondaryMain, secondaryLight],
      xaxis: {
        labels: {
          style: {
            colors: [
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
            ],
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: [primary],
          },
        },
      },
      grid: {
        borderColor: grey200,
      },
      tooltip: {
        theme: "light",
      },
      legend: {
        labels: {
          colors: grey500,
        },
      },
    };

    if (!isLoading) {
      ApexCharts.exec(`bar-chart`, "updateOptions", newChartData);
    }
  }, [
    navType,
    primary200,
    primaryDark,
    secondaryMain,
    secondaryLight,
    primary,
    darkLight,
    grey200,
    isLoading,
    grey500,
  ]);

  if (isLoading || Object.keys(data).length === 0) {
    return <SkeletonTotalGrowthBarChart />;
  }

  return (
    <MainCard>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Typography variant="subtitle2">Total Growth</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h3">$2,324.00</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <TextField
                id="standard-select-currency"
                select
                value={value}
                onChange={(e) => setValue(e.target.value)}
              >
                {status.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Chart {...chartData} />
        </Grid>
      </Grid>
    </MainCard>
  );
};

TotalGrowthBarChart.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.object,
};

export default TotalGrowthBarChart;
