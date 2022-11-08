import {Request,Response} from "express"
import MixServer from ".";
import GET from "./decorators/router";

const app = new MixServer({port:9010})

class Controller {
  @GET({path:"/"})
  index(req:Request,res:Response):void{
    res.json("Hello world")
  }
}

app.run()
