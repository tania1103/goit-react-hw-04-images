import { LineWave } from 'react-loader-spinner';

const Loader = () => {
  return (
    <LineWave
      height="100"
      width="100"
      color="#3f51b5"
      ariaLabel="line-wave"
      wrapperStyle={{ margin: '0 auto' }}
      visible={true}
    />
  );
};

export default Loader;