export const isFavourite = (game,allGame)=>{
    return allGame.some((item)=>item?.id==game?.id)
}