export class iterableList<T=any>{
list: T[] = []

index= 0

constructor(...args: T[]){
this.list = args;
}

get(index:number){
    return this.list[index]
}

hasNext():boolean{
    return this.index<this.list.length
}

next():T{
    return this.list[this.index++]
}
}