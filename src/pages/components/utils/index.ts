import { RnaData } from '../../api/getRna/model';

type FormattedData = {
  xAxis: number;
  count: number;
  name: string;
  gene: string;
};

type Ticks = {
  ticks: number[];
  maxTick: number;
};

const getFormattedData = (data: RnaData): FormattedData[] => {
  if (!data || !data?.counts) return null;
  return data.counts.flatMap(({ count, name, range }) => {
    const countsRange = range[0];
    // assumes only 1 gene falls within the same range
    const annotation = data.annotations.find(({ range }) => {
      const annotationRange = range[0];
      return (
        annotationRange.start <= countsRange.start &&
        annotationRange.end >= countsRange.end
      );
    });

    if (countsRange.start === countsRange.end) {
      return [
        {
          xAxis: countsRange.start,
          count,
          name,
          gene: annotation?.Gene,
        },
      ];
    }
    return [
      {
        xAxis: countsRange.start,
        count,
        name,
        gene: annotation?.Gene,
      },
      { xAxis: countsRange.end, count, name, gene: annotation?.Gene },
    ];
  });
};

export const getAnnotations = (data: RnaData) => {
  return data?.annotations?.map(({ Gene }, idx) => ({
    id: idx,
    annotation: Gene,
  }));
};

export const getTicks = (data: RnaData): Ticks => {
  if (!data) return null;
  const ticks = data?.annotations?.flatMap(({ range }) => [
    range[0].start,
    range[0].end,
  ]);
  const max = ticks && ticks[ticks.length - 1];
  const maxTick = max && Math.round(max / 1000) * 1000;
  if (ticks && maxTick) {
    ticks.push(maxTick);
  }

  return { ticks, maxTick };
};

export default getFormattedData;
