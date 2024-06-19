// progress bar
const circularProgress = document.querySelectorAll(".circular-progress");

Array.from(circularProgress).forEach((progressBar) => {
  const progressValue = progressBar.querySelector(".percentage");
  const innerCircle = progressBar.querySelector(".inner-circle");
  let startValue = 0,
    endValue = Number(progressBar.getAttribute("data-percentage")),
    speed = 30,
    progressColor = progressBar.getAttribute("data-progress-color");

  const progress = setInterval(() => {
    startValue++;
    progressValue.textContent = `${startValue}%`;
    progressValue.style.color = `${progressColor}`;

    innerCircle.style.backgroundColor = `${progressBar.getAttribute(
      "data-inner-circle-color"
    )}`;

    progressBar.style.background = `conic-gradient(${progressColor} ${
      startValue * 3.6
    }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
    if (startValue === endValue) {
      clearInterval(progress);
    }
  }, speed);
});

//Bar Chart1 - Earning Report Chart - Row2Card1
const ctx = document.getElementById("earningChart");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [
      {
        label: "",
        data: [20, 10, 38, 38, 15, 30, 35, 30, 8],
        backgroundColor: [
          "rgba(232,231,253,255)",
          "rgba(232,231,253,255)",
          "rgba(136,126,242,255)",
          "rgba(232,231,253,255)",
          "rgba(232,231,253,255)",
          "rgba(232,231,253,255)",
          "rgba(232,231,253,255)",
          "rgba(232,231,253,255)",
          "rgba(232,231,253,255)",
        ],
        borderWidth: 1,
        barPercentage: 0.4,
        categoryPercentage: 0.9,
        borderRadius: 8,
        datalabels: {
          color: "black",
          anchor: "end",
          align: "top",
          formatter: function (value, context) {
            return value + "K";
          },
        },
      },
    ],
  },
  plugins: [ChartDataLabels],
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          callback: function (value, index, ticks) {
            return value + "K";
          },
        },
      },
    },
  },
});
//BarChart 2 - Revenue Growth Chart - Row1Card5
const revChart = document.getElementById('revenueChart');
new Chart(revChart, {
  type: 'bar',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      label: 'asda',
      data: [25,30, 40, 45, 50, 40, 20],
      backgroundColor: [
        'rgba(220,246,232,255)',
        'rgba(220,246,232,255)',
        'rgba(220,246,232,255)',
        'rgba(220,246,232,255)',
        'rgba(72,207,132,255)',
        'rgba(220,246,232,255)',
        'rgba(220,246,232,255)',
        
      ],
      borderWidth: 1,
      barPercentage: 0.3,
      categoryPercentage: 1,
      borderRadius: 8,
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: false
        },
        border: {
          display: false
        },
        grid: {
          display: false
        }
      }
    },
    
  }
});
// Sales Radar Chart - Row2Card2
const radChart = document.getElementById('salesChart');
new Chart(radChart, {
  type: 'radar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'visits',
        data : [54,52,59,55,51,37],
        backgroundColor: 'rgba(17,191,233,255)'
      },
    {
      label: 'Sales',
      data: [60,55, 56, 57, 58, 52],
      backgroundColor: 'rgba(115,103,240,255)',
      borderWidth: 1,
    },
  ]
  },
  options: {
    plugins: {
      legend: {
        position: 'bottom',

      }
    },
    scales: {
      x: {
        ticks: {
          display: false
        },
        grid: {
          display: false,
        },
        border: {
          display: false
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: false
        },
        border: {
          display: false
        },
        grid: {
          display: false
        }
      }
    },
    
  }
});
//Project Status Chart - Row3Card-2
const psc = document.getElementById('projectStatusChart');
new Chart(psc, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'oct', 'nov', 'dec'],
    datasets: [{
      label: 'Bar Chart',
      data: [10,10, 38, 38,30, 30, 21, 21, 35, 35, 25,25],
      backgroundColor: [
        'rgba(255,159,67,0.1)',
      ],
      borderWidth: 4,
      pointRadius: 0,
      borderColor: 'rgba(255,159,67,255)',
      fill: true,

    }]
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        ticks: {
          display: false
        },
        grid: {
          display: false,
        },
        border: {
          display: false
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: false
        },
        border: {
          display: false
        },
        grid: {
          display: false
        }
      }
    }
  }
});
//Session Chart - Row1Card2
const sessChart = document.getElementById('sessionChart');
new Chart(sessChart, {
  type: 'bar',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [
    {
      label: 'blue',
      data: [15,12, 30, 24, 20],
      backgroundColor: 'rgba(136,126,242,255)',
      borderWidth: 1,
      barPercentage: 0.2,
      categoryPercentage: 1.5,
      borderRadius: 8,
      borderSkipped: false,
    },
    {
      label: 'green',
      data: [-15, -19, -15, -10, -17],
      backgroundColor: 'rgba(72,207,132,255)',
      borderWidth: 1,
      barPercentage: 0.2,
      categoryPercentage: 1.5,
      borderRadius: 8,
      borderSkipped: false,
    },
  ]
  },
  options: {
    plugins: {
      legend: {
        display: false
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          display: false
        },
        grid: {
          display: false,
        },
        border: {
          display: false
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: false
        },
        border: {
          display: false
        },
        grid: {
          display: false
        }
      }
    },
    
  }
});
//Sales Line Chart - Row1Card1
const SLC = document.getElementById('salesLineChart');
new Chart(SLC, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Bar Chart',
      data: [15,10, 38, 38,30, 30, 21, 21, 28, 28, 25,25],
      backgroundColor: 'rgba(55,203,121,0.1)',
      borderWidth: 2,
      pointRadius: 0,
      borderColor: 'rgba(55,203,121,255)',
      fill: true,
      tension: 0.4,

    }]
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        ticks: {
          display: false
        },
        grid: {
          display: false,
        },
        border: {
          display: false
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: false
        },
        border: {
          display: false
        },
        grid: {
          display: false
        }
      }
    }
  }
});

