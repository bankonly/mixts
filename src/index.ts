import express, {Application} from "express" 
import { router } from "./decorators/router";
import { MixServerOption } from "./index.options";

export let app:Application

export default class MixServer {
  port: number
  constructor(opts:MixServerOption){
    app = express()

    // store contructor value
    this.port = opts.port

    app.use(express.json()) // register body
  }

  private routers(){
    app.use(router)
  }

  run():void {
    this.routers() // start routing

    app.listen(this.port,()=>{
      console.log("Status: running")
      console.log("Port:",this.port)
    })
  }

  app():Application {
    return app
  }
}
