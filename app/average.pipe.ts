import { Pipe, PipeTransform} from '@angular/core';

@Pipe ({
  name:"average",
  pure: false
})

export class AveragePipe implements PipeTransform {
  transform(input: number, numElements: number){
    return Math.round(input/numElements * 100)/100;
  }
}
