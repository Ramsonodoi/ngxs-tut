import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AnimalGetInterface } from 'src/app/model/AnimalGet.model';
import { GetAnimal } from 'src/app/store/animal.actions';
import { ZooState } from 'src/app/store/animal.state';




@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css']
})
export class ZooComponent implements OnInit {

constructor(private store: Store) {

}

ngOnInit(): void {
    this.getAnimal()
}

getAnimalArray:AnimalGetInterface[] = []
@Select(ZooState.getAnimalSelector) getAnimalOb$:Observable<AnimalGetInterface[]> | undefined
getAnimal(){
  this.store.dispatch(new GetAnimal());
  this.getAnimalOb$?.subscribe((response:any)=> {
   this.getAnimalArray = response
   console.log(this.getAnimalArray, "bee")
  })
}
}
