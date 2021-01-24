export { Presence } from "phoenix";
import { Socket } from "phoenix";

const socket = new Socket("/socket", { params: { token: (window as any).userToken } });

export default socket
