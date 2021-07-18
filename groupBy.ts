interface OBJ{
    [key: string]: Array<any>
}

export const groupBy = (array:Array<any>, callback: (elem: any) => any): object => {
    let obj: OBJ = {}
    for(let i = 0; i < array.length; i++){
        let res = callback(array[i])
        if(obj?.[res]){
            obj[res].push(array[i])
        } else {
            obj[res] = [array[i]]
        }
    }
    return obj
}