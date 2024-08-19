import Ainize from "@ainize-team/ainize-js";
import { SERVICE_NAME } from "./constant";

export default class FreeAinize{
  private Ainize:Ainize
  private privateKey: string
  private disconnectCb?: (websocket: any) => void
  private connectCb?: (websocket: any) => void

  constructor(network: 1|0 = 1,privateKey?:string,connectCb?:(Websocket: any) => void, disconnectCb?: (websocket: any) => void) {
    // 0 is for testnet
    this.Ainize = new Ainize(network);
    if (privateKey) {
      this.privateKey = privateKey
    } else {
      this.privateKey = Ainize.createAinAccount().private_key
    }
    this.connectCb = connectCb
    this.disconnectCb = disconnectCb
  }

  async login(){
    await this.Ainize.login(this.privateKey, this.connectCb,this.disconnectCb);
  }

  async inference(prompt:string){
    const service = await this.Ainize.getService(SERVICE_NAME)
    const request = {
      prompt
    };
    const response = await service.request(request);
    return response
  }
}