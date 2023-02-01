export const getPages = (postscount,limit) => {
    return Math.ceil(postscount/limit)
}