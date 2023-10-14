import { LineChartData } from '@/types';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';

export interface LineChartHeader {
  title: string;
  dateTime: string;
}

export interface LineChartFilter {
  id: number;
  name: string;
  isActive: boolean;
}

interface LineChartBaseProps {
  ref?: any;
  data: LineChartData;
  width?: number | string;
  height?: number | string;
  header?: LineChartHeader;
  filters?: LineChartFilter[];
  onFiltersClick?: (name: string) => void;
}
ChartJS.register(...registerables);

const LineChart = ({ ref, width, height, data, header, filters, onFiltersClick }: LineChartBaseProps) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        border: {
          display: false,
        },
        grid: {
          color: 'gray',
        },
        ticks: {
          color: 'white',
        },
      },
    },
    layout: {
      padding: {
        left: 52,
        right: 52,
        top: 18,
        bottom: 18,
      },
    },
  };

  const handleOnFilterClick = (name: string) => {
    onFiltersClick && onFiltersClick(name);
  };

  return (
    <Box>
      {header && (
        <Flex alignItems="center" fontFamily="inter" color="white">
          <Text fontSize="15px" maxW="96px">
            {header.title ?? ''}
          </Text>
          <Text fontSize="22px">{header.dateTime ?? ''}</Text>
        </Flex>
      )}

      <Box ref={ref}>
        <Line width={width} height={height} options={options} data={data} />
      </Box>

      {filters && filters.length && (
        <Flex gap={4}>
          {filters.map((item, idx) => (
            <Button
              fontFamily="hira"
              color={!item.isActive ? 'primary.300' : 'white'}
              variant="unstyled"
              bg={item.isActive ? 'primary.300' : 'white'}
              borderRadius="xl"
              maxW="56px"
              w="full"
              h="24px"
              onClick={() => handleOnFilterClick(item.name)}
              key={idx}
            >
              {item.name}
            </Button>
          ))}
        </Flex>
      )}
    </Box>
  );
};

export default LineChart;
