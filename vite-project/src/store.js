import {reactive} from 'vue';
// import {apiCollection} from './apiCollection';

export const store = reactive({
    // apiColl: apiCollection,
    //solo film
    film: [],
    allMovies: [],
    apiURL: 'https://api.themoviedb.org/3/search/movie?api_key=ce2602a149b34cf456d6b3a97519bed3&query=',
    search: '',
    totPage: 0,
    //solo serie tv
     seriesApiURL: 'https://api.themoviedb.org/3/search/tv?api_key=ce2602a149b34cf456d6b3a97519bed3&query=',
    tvSeries: [],
    allSeries: [],
    // tutti i film
    movieDiscoverUrl: 'https://api.themoviedb.org/3/discover/movie?api_key=ce2602a149b34cf456d6b3a97519bed3',
    totalPage: 0,
    takeAllMovies: [],
    pushAllMovies: [],
    // tutte le serie tv
    tvDiscoverUrl: 'https://api.themoviedb.org/3/discover/tv?api_key=ce2602a149b34cf456d6b3a97519bed3',
    takeAllTvs: [],
    pushAllTvs: [],
    // validatore globale per ricerca film e serie tv
    seeSearchResult: true,
});