export const ADD_PODCASTS = "ADD_PODCASTS";
export const REMOVE_PODCASTS = "REMOVE_PODCASTS";

const initialState = {
    podcasts: [],
    currentPodcastIndex: 0,
    autoPlay: false,
}

function dataReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PODCASTS:
            const { podcasts, currentPodcastIndex, autoPlay } = action.data;
            if (state?.podcasts[currentPodcastIndex]?.id !== podcasts[currentPodcastIndex]?.id)
                return {
                    podcasts: podcasts,
                    currentPodcastIndex: currentPodcastIndex,
                    autoPlay: autoPlay,
                };
            else return state
        case REMOVE_PODCASTS:
            return initialState
        default:
            return state;
    }
}

export default dataReducer