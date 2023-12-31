import { ResponsiveScatterPlot } from '@nivo/scatterplot';

const data = [
    {
      "id": "group A",
      "data": [
        {
          "x": 70,
          "y": 94
        },
        {
          "x": 83,
          "y": 65
        },
        {
          "x": 41,
          "y": 114
        },
        {
          "x": 65,
          "y": 100
        },
        {
          "x": 18,
          "y": 29
        },
        {
          "x": 84,
          "y": 106
        },
        {
          "x": 92,
          "y": 39
        },
        {
          "x": 79,
          "y": 44
        },
        {
          "x": 69,
          "y": 110
        },
        {
          "x": 17,
          "y": 46
        },
        {
          "x": 22,
          "y": 70
        },
        {
          "x": 14,
          "y": 118
        },
        {
          "x": 45,
          "y": 77
        },
        {
          "x": 77,
          "y": 89
        },
        {
          "x": 74,
          "y": 60
        },
        {
          "x": 15,
          "y": 16
        },
        {
          "x": 72,
          "y": 78
        },
        {
          "x": 37,
          "y": 108
        },
        {
          "x": 94,
          "y": 46
        },
        {
          "x": 68,
          "y": 36
        },
        {
          "x": 51,
          "y": 69
        },
        {
          "x": 22,
          "y": 64
        },
        {
          "x": 5,
          "y": 22
        },
        {
          "x": 10,
          "y": 98
        },
        {
          "x": 22,
          "y": 15
        },
        {
          "x": 3,
          "y": 97
        },
        {
          "x": 22,
          "y": 103
        },
        {
          "x": 50,
          "y": 31
        },
        {
          "x": 32,
          "y": 120
        },
        {
          "x": 60,
          "y": 35
        },
        {
          "x": 25,
          "y": 53
        },
        {
          "x": 31,
          "y": 80
        },
        {
          "x": 11,
          "y": 99
        },
        {
          "x": 75,
          "y": 75
        },
        {
          "x": 6,
          "y": 29
        },
        {
          "x": 42,
          "y": 30
        },
        {
          "x": 43,
          "y": 1
        },
        {
          "x": 3,
          "y": 110
        },
        {
          "x": 13,
          "y": 98
        },
        {
          "x": 12,
          "y": 68
        },
        {
          "x": 46,
          "y": 102
        },
        {
          "x": 63,
          "y": 56
        },
        {
          "x": 81,
          "y": 25
        },
        {
          "x": 19,
          "y": 102
        },
        {
          "x": 72,
          "y": 91
        },
        {
          "x": 36,
          "y": 18
        },
        {
          "x": 97,
          "y": 72
        },
        {
          "x": 64,
          "y": 23
        },
        {
          "x": 52,
          "y": 111
        },
        {
          "x": 45,
          "y": 71
        }
      ]
    },
    {
      "id": "group B",
      "data": [
        {
          "x": 37,
          "y": 46
        },
        {
          "x": 86,
          "y": 119
        },
        {
          "x": 97,
          "y": 91
        },
        {
          "x": 76,
          "y": 0
        },
        {
          "x": 18,
          "y": 10
        },
        {
          "x": 54,
          "y": 23
        },
        {
          "x": 98,
          "y": 21
        },
        {
          "x": 11,
          "y": 103
        },
        {
          "x": 32,
          "y": 109
        },
        {
          "x": 76,
          "y": 81
        },
        {
          "x": 6,
          "y": 88
        },
        {
          "x": 0,
          "y": 61
        },
        {
          "x": 33,
          "y": 64
        },
        {
          "x": 25,
          "y": 40
        },
        {
          "x": 28,
          "y": 100
        },
        {
          "x": 77,
          "y": 33
        },
        {
          "x": 57,
          "y": 40
        },
        {
          "x": 34,
          "y": 3
        },
        {
          "x": 16,
          "y": 0
        },
        {
          "x": 31,
          "y": 91
        },
        {
          "x": 84,
          "y": 52
        },
        {
          "x": 70,
          "y": 94
        },
        {
          "x": 31,
          "y": 2
        },
        {
          "x": 16,
          "y": 97
        },
        {
          "x": 57,
          "y": 81
        },
        {
          "x": 16,
          "y": 71
        },
        {
          "x": 49,
          "y": 53
        },
        {
          "x": 41,
          "y": 95
        },
        {
          "x": 1,
          "y": 57
        },
        {
          "x": 63,
          "y": 10
        },
        {
          "x": 96,
          "y": 78
        },
        {
          "x": 84,
          "y": 76
        },
        {
          "x": 44,
          "y": 103
        },
        {
          "x": 33,
          "y": 65
        },
        {
          "x": 8,
          "y": 43
        },
        {
          "x": 95,
          "y": 77
        },
        {
          "x": 12,
          "y": 89
        },
        {
          "x": 32,
          "y": 107
        },
        {
          "x": 46,
          "y": 89
        },
        {
          "x": 40,
          "y": 86
        },
        {
          "x": 29,
          "y": 13
        },
        {
          "x": 29,
          "y": 108
        },
        {
          "x": 49,
          "y": 107
        },
        {
          "x": 16,
          "y": 26
        },
        {
          "x": 44,
          "y": 20
        },
        {
          "x": 90,
          "y": 60
        },
        {
          "x": 61,
          "y": 21
        },
        {
          "x": 83,
          "y": 77
        },
        {
          "x": 50,
          "y": 2
        },
        {
          "x": 52,
          "y": 105
        }
      ]
    },
    {
      "id": "group C",
      "data": [
        {
          "x": 61,
          "y": 8
        },
        {
          "x": 92,
          "y": 20
        },
        {
          "x": 89,
          "y": 94
        },
        {
          "x": 23,
          "y": 60
        },
        {
          "x": 73,
          "y": 28
        },
        {
          "x": 93,
          "y": 16
        },
        {
          "x": 56,
          "y": 11
        },
        {
          "x": 84,
          "y": 44
        },
        {
          "x": 53,
          "y": 44
        },
        {
          "x": 45,
          "y": 47
        },
        {
          "x": 16,
          "y": 99
        },
        {
          "x": 70,
          "y": 93
        },
        {
          "x": 95,
          "y": 47
        },
        {
          "x": 93,
          "y": 107
        },
        {
          "x": 73,
          "y": 7
        },
        {
          "x": 60,
          "y": 82
        },
        {
          "x": 64,
          "y": 14
        },
        {
          "x": 96,
          "y": 96
        },
        {
          "x": 38,
          "y": 47
        },
        {
          "x": 27,
          "y": 76
        },
        {
          "x": 56,
          "y": 46
        },
        {
          "x": 38,
          "y": 117
        },
        {
          "x": 22,
          "y": 84
        },
        {
          "x": 100,
          "y": 95
        },
        {
          "x": 54,
          "y": 103
        },
        {
          "x": 91,
          "y": 25
        },
        {
          "x": 27,
          "y": 5
        },
        {
          "x": 48,
          "y": 87
        },
        {
          "x": 64,
          "y": 120
        },
        {
          "x": 73,
          "y": 64
        },
        {
          "x": 33,
          "y": 65
        },
        {
          "x": 20,
          "y": 68
        },
        {
          "x": 57,
          "y": 37
        },
        {
          "x": 67,
          "y": 103
        },
        {
          "x": 18,
          "y": 87
        },
        {
          "x": 76,
          "y": 5
        },
        {
          "x": 94,
          "y": 117
        },
        {
          "x": 60,
          "y": 59
        },
        {
          "x": 49,
          "y": 42
        },
        {
          "x": 96,
          "y": 77
        },
        {
          "x": 28,
          "y": 67
        },
        {
          "x": 5,
          "y": 19
        },
        {
          "x": 62,
          "y": 49
        },
        {
          "x": 6,
          "y": 81
        },
        {
          "x": 26,
          "y": 11
        },
        {
          "x": 87,
          "y": 100
        },
        {
          "x": 44,
          "y": 112
        },
        {
          "x": 54,
          "y": 65
        },
        {
          "x": 98,
          "y": 12
        },
        {
          "x": 48,
          "y": 27
        }
      ]
    },
    {
      "id": "group D",
      "data": [
        {
          "x": 98,
          "y": 16
        },
        {
          "x": 78,
          "y": 20
        },
        {
          "x": 35,
          "y": 35
        },
        {
          "x": 82,
          "y": 7
        },
        {
          "x": 69,
          "y": 50
        },
        {
          "x": 16,
          "y": 92
        },
        {
          "x": 71,
          "y": 64
        },
        {
          "x": 10,
          "y": 115
        },
        {
          "x": 25,
          "y": 100
        },
        {
          "x": 31,
          "y": 26
        },
        {
          "x": 30,
          "y": 47
        },
        {
          "x": 91,
          "y": 19
        },
        {
          "x": 35,
          "y": 34
        },
        {
          "x": 69,
          "y": 108
        },
        {
          "x": 98,
          "y": 102
        },
        {
          "x": 21,
          "y": 9
        },
        {
          "x": 83,
          "y": 43
        },
        {
          "x": 21,
          "y": 78
        },
        {
          "x": 66,
          "y": 60
        },
        {
          "x": 22,
          "y": 57
        },
        {
          "x": 74,
          "y": 53
        },
        {
          "x": 87,
          "y": 49
        },
        {
          "x": 25,
          "y": 62
        },
        {
          "x": 24,
          "y": 68
        },
        {
          "x": 50,
          "y": 112
        },
        {
          "x": 63,
          "y": 15
        },
        {
          "x": 48,
          "y": 73
        },
        {
          "x": 81,
          "y": 3
        },
        {
          "x": 49,
          "y": 81
        },
        {
          "x": 59,
          "y": 65
        },
        {
          "x": 21,
          "y": 36
        },
        {
          "x": 45,
          "y": 51
        },
        {
          "x": 48,
          "y": 26
        },
        {
          "x": 4,
          "y": 18
        },
        {
          "x": 81,
          "y": 65
        },
        {
          "x": 81,
          "y": 28
        },
        {
          "x": 50,
          "y": 57
        },
        {
          "x": 24,
          "y": 82
        },
        {
          "x": 99,
          "y": 103
        },
        {
          "x": 13,
          "y": 65
        },
        {
          "x": 88,
          "y": 51
        },
        {
          "x": 42,
          "y": 56
        },
        {
          "x": 79,
          "y": 93
        },
        {
          "x": 27,
          "y": 103
        },
        {
          "x": 36,
          "y": 63
        },
        {
          "x": 19,
          "y": 5
        },
        {
          "x": 62,
          "y": 28
        },
        {
          "x": 49,
          "y": 67
        },
        {
          "x": 62,
          "y": 35
        },
        {
          "x": 79,
          "y": 120
        }
      ]
    },
    {
      "id": "group E",
      "data": [
        {
          "x": 40,
          "y": 106
        },
        {
          "x": 37,
          "y": 90
        },
        {
          "x": 62,
          "y": 120
        },
        {
          "x": 58,
          "y": 14
        },
        {
          "x": 62,
          "y": 8
        },
        {
          "x": 40,
          "y": 54
        },
        {
          "x": 97,
          "y": 96
        },
        {
          "x": 28,
          "y": 51
        },
        {
          "x": 17,
          "y": 93
        },
        {
          "x": 95,
          "y": 25
        },
        {
          "x": 45,
          "y": 91
        },
        {
          "x": 28,
          "y": 49
        },
        {
          "x": 100,
          "y": 4
        },
        {
          "x": 72,
          "y": 41
        },
        {
          "x": 78,
          "y": 81
        },
        {
          "x": 35,
          "y": 17
        },
        {
          "x": 55,
          "y": 4
        },
        {
          "x": 40,
          "y": 75
        },
        {
          "x": 38,
          "y": 83
        },
        {
          "x": 42,
          "y": 18
        },
        {
          "x": 17,
          "y": 25
        },
        {
          "x": 59,
          "y": 103
        },
        {
          "x": 82,
          "y": 6
        },
        {
          "x": 55,
          "y": 38
        },
        {
          "x": 2,
          "y": 21
        },
        {
          "x": 61,
          "y": 63
        },
        {
          "x": 57,
          "y": 51
        },
        {
          "x": 91,
          "y": 111
        },
        {
          "x": 71,
          "y": 21
        },
        {
          "x": 66,
          "y": 26
        },
        {
          "x": 32,
          "y": 58
        },
        {
          "x": 24,
          "y": 9
        },
        {
          "x": 11,
          "y": 96
        },
        {
          "x": 17,
          "y": 3
        },
        {
          "x": 47,
          "y": 48
        },
        {
          "x": 78,
          "y": 4
        },
        {
          "x": 13,
          "y": 102
        },
        {
          "x": 78,
          "y": 81
        },
        {
          "x": 59,
          "y": 35
        },
        {
          "x": 97,
          "y": 82
        },
        {
          "x": 35,
          "y": 28
        },
        {
          "x": 40,
          "y": 118
        },
        {
          "x": 54,
          "y": 67
        },
        {
          "x": 38,
          "y": 33
        },
        {
          "x": 80,
          "y": 10
        },
        {
          "x": 49,
          "y": 117
        },
        {
          "x": 32,
          "y": 52
        },
        {
          "x": 20,
          "y": 108
        },
        {
          "x": 71,
          "y": 85
        },
        {
          "x": 32,
          "y": 19
        }
      ]
    }
  ]

export const MyResponsiveScatterPlot = () => (
  <ResponsiveScatterPlot
    data={data}
    margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
    xScale={{ type: 'linear', min: 0, max: 'auto' }}
    xFormat=">-.2f"
    yScale={{ type: 'linear', min: 0, max: 'auto' }}
    yFormat=">-.2f"
    blendMode="multiply"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'weight',
      legendPosition: 'middle',
      legendOffset: 46,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'size',
      legendPosition: 'middle',
      legendOffset: -60,
    }}
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 130,
        translateY: 0,
        itemWidth: 100,
        itemHeight: 12,
        itemsSpacing: 5,
        itemDirection: 'left-to-right',
        symbolSize: 12,
        symbolShape: 'circle',
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);
