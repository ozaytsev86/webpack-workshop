import './App.css';
import './App.scss';
import {lazy, Suspense} from 'react';
// const LazyComponent = lazy(() => import('./LazyComponent'));
const LazyComponent = lazy(() => import(/* webpackChunkName: "LazyComponent" */ './LazyComponent'));

// import CatIconSrc from './statics/images/CatIcon.svg';
// const CatIcon = require('svgAsReactComponent!./statics/images/CatIcon.svg').default;
import CatIcon from './statics/images/CatIcon.svg';

import {summa} from './utils';

function App() {
  const s = summa();
  console.log(s);
  return (
    <div>
      <Suspense fallback="Loading...">
        <LazyComponent />
      </Suspense>
      <div className="happy-kitten" />
      <div className="yawn-kitten" />
      <div className="far fa-wink" />
      <p>{process.env.APP_API_URL}</p>
      {/*<img src={CatIconSrc} />*/}
      <CatIcon />
    </div>
  )
}

export default App;
