import { createSlice } from "@reduxjs/toolkit";

const articlesSlice = createSlice({
    name: 'articles',

    initialState: {
        articles: [],
        articleByID: null,
        carouselSettings: {
            infinite: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: true,
            swipeToSlide: true
        }
    },
    
    reducers: {
        updateAll(state, action) {
            state.articles = action.payload
        },
        updateArticleByID(state, action) {
            state.articleByID = action.payload
        },
        updateCarouselSettings(state, action) {
            state.carouselSettings.slidesToShow = action.payload.slidesToShow
        }
    }
})

export default articlesSlice.reducer
export const { updateAll, updateArticleByID, updateCarouselSettings } = articlesSlice.actions
