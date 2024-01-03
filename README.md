# boolflix

## Descrizione progetto
web app che permette di cercare film e serie tv, nonappena si apre la pagina verrà visualizzata di default la lista completa dei film e delle serie tv, e sia i film che le serie tv saranno contrassegnati proprio dalle parole 'movie' e 'tv serie' per specificare di cosa si tratta.
Per fare tutto cio prendo i dati da una api (themoviedb).

## barra di ricerca 
Per fare una ricerca generale ci sarà una barra di ricerca che permetterà di cercare sia fim che serie questo perchè situata nella home page, per una ricerca di sole serie e di soli film ci si dovrà recare nelle altre pagine 'movies' e 'tv series'.

### Gestione e funzionamento della ricerca di film e serie tv 

Nell'header è situata la barra di ricerca, dove c'è un input e un button, ognuno dentro un proprio contenitore, nella barra input ho inserito un v-model per poter prendere cio che viene scritto al suo interno. 
Mentre nel button ho inserito un **$emit('searchMovie')** che sarà poi collegato all'header dove faccio le chiamate axios per prendere i dati forniti dall'api.
Quindi la struttura per questa sezione è

1) AppHeader--------|   function newSearch() per l'emit <SearchBar @searchMovie="newSearch"/>
        - SearchBar |  $emit('searchMovie')

- funzione newSearch()
   - si compone di 2 parti:
        1) ciclo for che serve per gestire la paginazione 
        2) condizioe if dove al suo interno vado a gestire gli errori di ricerca 


## Select delle categorie 

Per selezionare le categorie ho appunto usato una select per la scelta, nella progettazione però non so ancora se fare una select nella home page perchè l'api che sto utilizzando per i movie e per le serie usa 2 diversi tipi di categorie quindi dovrei fare 2 select, cosi è possibile che in futuro sposti le categorie direttamente nelle pagine di film e serie e lasciare la home come pagina per la ricerca generale di film e serie 

la struttura che ho usato è la seguente 

1) AllmoviesCard -------------------------------------|<Selectcategories @movieCategorie="categorie"/>
        SelectCategories -------- dove mi creo l'html |$emit('movieCategorie')

- funzione categorie()
   - si compone di un ciclo for che racchiude tutto e serve per gestire la paginazione al suo interno abbiamo: 
   1) in primo piano azzeriamo la lungheza degli array 
   2) facciamo 2 chiamate axios, una nel caso in cui ci troviamo nella pagina iniziale dove a popolare la pagina di informazione c'è l'array **pushAllMovies[]** altrimenti uso l'array per la ricerca **allMovies[]**

