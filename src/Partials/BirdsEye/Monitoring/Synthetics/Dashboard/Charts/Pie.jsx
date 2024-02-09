import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import {SalesAnalyticsChart} from '../../../Dashboard/Components/SalesAnalyticsChart'

const data = [
  { name: 'Red', value: 400 },
  { name: 'Blue', value: 300 },
  { name: 'Yellow', value: 300 },
  { name: 'Green', value: 200 },
  { name: 'Purple', value: 100 },
];

const COLORS = ['#FF5733', '#3399FF', '#FFD700', '#00FF00', '#800080'];

const PieChartComponent = () => {
  return (
    <Card>
      <CardBody>
        <SalesAnalyticsChart title="Synthetics" />
      </CardBody>
    </Card>
  );
};

export default PieChartComponent;
