import videoSpace from "./videoSpace.mp4";
import './styles/logo.css'


export default function Video() {
    return (
      <div className="relative z-0 ">
        <video className="w-full h-screen object-cover" src={videoSpace} autoPlay loop muted /> 

        <div className="absolute z-10 top-0 flex flex-col w-full h-full justify-center items-center">
          <div className="flex w-full  justify-center items-center">
            <div className="w-1/12 border-solid border-2 border-white mb-3"></div>
            <img className="w-10 mx-10" src="src/assets/iconBull.png" alt="" />
            <div className="w-1/12 border-solid border-2 border-white mb-3"></div>
          </div>
          
          <svg viewBox="0 0 960 300">
            <symbol id="s-text">
              <text textAnchor="middle" x="50%" y="80%">W H G</text>
              <text textAnchor="middle" x="52%" y="80%">W H G</text>
            </symbol>
            <g className="g-ants">
              <use xlinkHref="#s-text" className="text-copy"></use>
              <use xlinkHref="#s-text" className="text-copy"></use>
              <use xlinkHref="#s-text" className="text-copy"></use>
              <use xlinkHref="#s-text" className="text-copy"></use>
              <use xlinkHref="#s-text" className="text-copy"></use>
              <use xlinkHref="#s-text" className="text-copy"></use>
            </g>
          </svg>
        </div>
      </div>
    )
  } 