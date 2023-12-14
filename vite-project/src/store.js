import {reactive} from 'vue';

export const store = reactive({
    film: [],
    apiURL: 'https://api.themoviedb.org/3/search/movie?api_key=ce2602a149b34cf456d6b3a97519bed3&query=',
    search: '',
    totPage: 0,
    allMovies: [],
});