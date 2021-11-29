import { getAnnotations, getFormattedData, getTicks } from '../index';
import { RnaData } from '../../../api/getRna/model';

const annotations = {
  annotations: [
    {
      Gene: 'Heavy Chain',
      range: [
        {
          start: 201,
          end: 1845,
        },
      ],
    },
    {
      Gene: 'Light Chain',
      range: [
        {
          start: 2246,
          end: 3419,
        },
      ],
    },
    {
      Gene: 'MmGlul',
      range: [
        {
          start: 3820,
          end: 5707,
        },
      ],
    },
  ],
};

const testDataOne: RnaData = {
  counts: [
    {
      count: 383,
      name: 'Plasmid',
      range: [{ start: 200, end: 200 }],
    },
    {
      count: 473,
      name: 'Plasmid',
      range: [{ start: 201, end: 201 }],
    },
  ],
  ...annotations,
};

const testDataTwo: RnaData = {
  counts: [
    {
      count: 0,
      name: 'Plasmid',
      range: [
        {
          start: 5707,
          end: 5906,
        },
      ],
    },
  ],
  ...annotations,
};

const formattedDataOne = [
  {
    xAxis: 200,
    count: 383,
    name: 'Plasmid',
    gene: undefined,
  },
  {
    xAxis: 201,
    count: 473,
    name: 'Plasmid',
    gene: 'Heavy Chain',
  },
];

const formattedDataTwo = [
  {
    xAxis: 5707,
    count: 0,
    name: 'Plasmid',
    gene: undefined,
  },
  {
    xAxis: 5906,
    count: 0,
    name: 'Plasmid',
    gene: undefined,
  },
];

const formattedAnnotations = [
  {
    id: 0,
    annotation: 'Heavy Chain',
  },
  {
    id: 1,
    annotation: 'Light Chain',
  },
  {
    id: 2,
    annotation: 'MmGlul',
  },
];

const formattedTicks = {
  ticks: [201, 1845, 2246, 3419, 3820, 5707, 6000],
  maxTick: 6000,
};

describe('utils', () => {
  it('formats raw data correctly for recharts chart', () => {
    const dataOne = getFormattedData(testDataOne);
    const dataTwo = getFormattedData(testDataTwo);

    expect(dataOne).toHaveLength(2);
    expect(dataOne).toEqual(formattedDataOne);

    expect(dataTwo).toHaveLength(2);
    expect(dataTwo).toEqual(formattedDataTwo);

    expect(dataOne).not.toEqual(formattedDataTwo);
    expect(dataTwo).not.toEqual(formattedDataOne);
  });

  it('formats an array of indexed annotations', () => {
    const annotations = getAnnotations(testDataOne);

    expect(annotations).toHaveLength(3);
    expect(annotations).toEqual(formattedAnnotations);
  });

  it('formats tick data', () => {
    const ticks = getTicks(testDataOne);

    expect(ticks).toEqual(formattedTicks);
  });
});
