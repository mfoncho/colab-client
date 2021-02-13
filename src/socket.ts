export { Presence } from "phoenix";
import { Socket as BaseSocket, ConnectionState, SocketConnectOption, MessageRef, Channel } from "phoenix";


export class Socket {

    base : BaseSocket;

    constructor(){
        this.base = new BaseSocket("/socket")
    }

    getChannel(topic: string){
        return this.getChannels().find((channel: any) => channel.topic == topic);
    }

    getChannels(){
        return (this.base as any).channels as Channel[];
    }

    protocol(){
        return this.base.protocol();
    }

    endPointURL(){
        return this.base.endPointURL();
    }

    connect(url: string, params: { version?: string, token: string}){
        this.base = new BaseSocket(url,{ 
            vsn: params.version,
            params: { 
                token: params.token
            }
        });
        this.base.connect();
        return this;
    }

    disconnect(callback?: () => void, code?: number, reason?: string){
        this.base.disconnect(callback);
        return this;
    }

    shutdown(callback?: () => void, code?: number, reason?: string){
        for (const channel of this.getChannels()){
            channel.leave();
        }
        this.base.disconnect(callback);
        return this;
    }

    connectionState(): ConnectionState{
        return base.connectionState();
    }

    isConnected(): boolean{
        return base.isConnected();
    }

    remove(channel: Channel){
        this.base.remove(channel);
        return this;
    }

    channel(topic: string, chanParams?: object): Channel{
        return this.base.channel(topic, chanParams);
    }

    push(data: object){
        return this.base.push(data);
    }

    log(kind: string, message: string, data: any) {
        this.base.log(kind, message, data);
        return this;
    }

    hasLogger(){
        return this.base.hasLogger();
    }

    onOpen(callback: (cb: any) => void): MessageRef {
        return this.base.onOpen(callback);
    }

    onClose(callback: (cb: any) => void): MessageRef {
        return this.base.onClose(callback);
    }

    onError(callback: (cb: any) => void): MessageRef {
        return this.base.onError(callback);
    }

    onMessage(callback: (cb: any) => void): MessageRef{

        return this.base.onMessage(callback);
    }

    makeRef(): MessageRef{
        return this.base.makeRef();
    }

    off(refs: MessageRef[]) {
        this.base.off(refs);
        return this;
    }

}

let base = new Socket;

export default base;
