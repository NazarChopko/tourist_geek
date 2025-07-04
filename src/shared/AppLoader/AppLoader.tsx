import { type FC } from 'react';
import styles from './index.module.css';

type AppLoaderProps = {
  children: React.ReactNode;
  isLoading: boolean;
};

const AppLoader: FC<AppLoaderProps> = ({ children, isLoading }) => {
  if (isLoading) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <div className={styles.loader} />
      </div>
    );
  }
  return children;
};

export default AppLoader;
