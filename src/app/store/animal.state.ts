import { ApiService } from './../apiService/api.service';
import { GetAnimal } from 'src/app/store/animal.actions';

import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AnimalGetInterface } from "../model/AnimalGet.model";
import { AnimalAddInterface } from "../model/AnimalAdd.model";
import { Injectable } from "@angular/core";
import { tap } from 'rxjs';

// let obj: AnimalGet = {
//     "userId": 1,
//     "id": 1,
//     "title": "are or do repels provide blacked out except option criticizes",
//     "body": "because he also accepts\nundertakes the consequences of refusal and when\nhe criticizes the trouble so that the whole\nof our things are but they are the matter will happen to the architect"
// }
export interface ZooStateModel{
    GetAnimal:AnimalGetInterface[]
    AddAnimal:AnimalAddInterface[] 
}

@State<ZooStateModel>({
    name: "Zoo",
    defaults: {
        GetAnimal: [],
        AddAnimal: []
    }
})

@Injectable()
export class ZooState{
    constructor(private api: ApiService) {}

  @Selector()
  static getAnimalSelector(state:ZooStateModel){
     return state.GetAnimal
  }
 
  @Action(GetAnimal)
  getAnimalStateAction(ctx:StateContext<ZooStateModel>){
    return this.api.getAnimalService().pipe(tap((response:any)=> {
       const state = ctx.getState()
       ctx.setState({
        ...state,
        GetAnimal: response
       })
    }))
  }

}