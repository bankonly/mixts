import { Router } from "express";

const _router:Router = Router()

interface RouterOption {
  path:string
}

// decorator
export default function GET(opts:RouterOption){
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target,propertyKey,descriptor)
    _router.get(opts.path,target[propertyKey])
  };
}

export const router = _router
