type TResult = {
    pageid:string,
    title:string,
    extract:string,
    thumbnail?:{
        source:string,
        width:number,
        heigth:number
    }
}

type TSearchResult = {
    query?:{
        pages?:TResult[],
    }
}