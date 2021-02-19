import './App.css';
import './App.scss';

// import CatIconSrc from './statics/images/CatIcon.svg';
// const CatIcon = require('svgAsReactComponent!./statics/images/CatIcon.svg').default;
import CatIcon from './statics/images/CatIcon.svg';

function App() {
  return (
    <div>
      <div className="happy-kitten" />
      <div className="yawn-kitten" />
      <div className="far fa-wink" />
      {/*<img src={CatIconSrc} />*/}
      <CatIcon />
    </div>
  )
}

export default App;