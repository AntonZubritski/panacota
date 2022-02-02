import { PropsWithChildren } from 'react';
import './styles.scss';

const MainWrapper = (props: PropsWithChildren<Record<string, unknown>>) => {
  return <div className="main-wrapper">{props.children}</div>;
};
export default MainWrapper;
