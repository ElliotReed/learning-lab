import { canvas } from "./canvas.js";
import mapArgumentFunction from "./mapArgumentFunction.js";

export default function loadScript() {
  const scriptRunner = {
    canvas: () => canvas(),
    mapArgumentFunction: mapArgumentFunction,
  };

  return scriptRunner;
}
