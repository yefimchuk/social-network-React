const addnewreview = "ADD-NEW-REVIEW";
const updatereviewtext = "UPDATE-REVIEW-TEXT";
const sendLike = "SEND-LIKE";
export const ProfileReducer = (state: any, action: any) => {
    switch (action.type) {
        case addnewreview:
            let NewReview = {
                avatar: "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png",
                likes: "0",
                message: state.NewReviewText
            }
            state.ReviewData.push(NewReview)
            state.NewReviewText = '';
            return state
        case updatereviewtext:
            state.NewReviewText = action.newText

            return state
        case sendLike:

            state.ReviewData.filter((el: any) =>
                el.id === action.numberLikes.id ? el.likes++ : el.likes
            )

            return state

        default:
            return state

    }


}
export const addNewReviewActionCreator = () => {
    return {type: addnewreview}
}
export const updateReviewTextActionCreator = (text: string) => {

    return {type: updatereviewtext, newText: text}
}
export const sendLikesActionCreator = (numberLikes: number) => {


    return {type: sendLike, numberLikes: numberLikes}
}