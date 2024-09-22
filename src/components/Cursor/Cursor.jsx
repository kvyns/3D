
import Spline from '@splinetool/react-spline';
import cursorModel from "../../assets/models/cursor.splinecode"

export default function Keyboard() {
  return (
      <Spline
        scene={cursorModel}
      />
  );
}
