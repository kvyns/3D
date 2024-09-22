
import Spline from '@splinetool/react-spline';
import keyboardModel from "../../assets/models/keyboard.splinecode"

export default function Keyboard() {
  return (
      <Spline
        scene={keyboardModel}
        onClick={(e)=>console.log(e.target)}
        // style={{ width: '200%', height: '200%' }}
      />
  );
}
