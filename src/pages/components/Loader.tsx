export const Loader = () => {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width='30px'
      height='36px'
      viewBox='0 0 30 36'
    >
      <rect x='0' y='20' width='4' height='20' fill='#8884d8' opacity='0.2'>
        <animate
          attributeName='opacity'
          attributeType='XML'
          values='0.2; 1; .2'
          begin='0s'
          dur='0.6s'
          repeatCount='indefinite'
        />
        <animate
          attributeName='height'
          attributeType='XML'
          values='20; 30; 20'
          begin='0s'
          dur='0.6s'
          repeatCount='indefinite'
        />
        <animate
          attributeName='y'
          attributeType='XML'
          values='10; 5; 10'
          begin='0s'
          dur='0.6s'
          repeatCount='indefinite'
        />
      </rect>
      <rect x='10' y='20' width='4' height='20' fill='#8884d8' opacity='0.2'>
        <animate
          attributeName='opacity'
          attributeType='XML'
          values='0.2; 1; .2'
          begin='0.15s'
          dur='0.6s'
          repeatCount='indefinite'
        />
        <animate
          attributeName='height'
          attributeType='XML'
          values='20; 30; 20'
          begin='0.15s'
          dur='0.6s'
          repeatCount='indefinite'
        />
        <animate
          attributeName='y'
          attributeType='XML'
          values='10; 5; 10'
          begin='0.15s'
          dur='0.6s'
          repeatCount='indefinite'
        />
      </rect>
      <rect x='20' y='20' width='4' height='20' fill='#8884d8' opacity='0.2'>
        <animate
          attributeName='opacity'
          attributeType='XML'
          values='0.2; 1; .2'
          begin='0.3s'
          dur='0.6s'
          repeatCount='indefinite'
        />
        <animate
          attributeName='height'
          attributeType='XML'
          values='20; 30; 20'
          begin='0.3s'
          dur='0.6s'
          repeatCount='indefinite'
        />
        <animate
          attributeName='y'
          attributeType='XML'
          values='10; 5; 10'
          begin='0.3s'
          dur='0.6s'
          repeatCount='indefinite'
        />
      </rect>
    </svg>
  );
};
