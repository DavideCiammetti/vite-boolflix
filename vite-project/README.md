# boolflix

## Milestone 1:
Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: 
Titolo
Titolo Originale
Lingua
Voto

**https://api.themoviedb.org/3/movie/157336?api_key=ce2602a149b34cf456d6b3a97519bed3&append_to_response=videos** 
<!-- questo url sopra tramite  &append_to_response permette di creare 2 chiamate contenporaneamente-->

**https://api.themoviedb.org/3/movie/157336?api_key=ce2602a149b34cf456d6b3a97519bed3&append_to_response=videos,images**
<!-- questo url sopra tramite le virgole permette di fare 1 chiamata per n argomenti chiamate contenporaneamente-->

||||||||||||||||||importante||||||||||||||||||||||

**https://api.themoviedb.org/3/search/movie?api_key=ce2602a14b34cf46d6b3a97519bd3&query=movie**--------->per prendere i film da ad my key

original_language
original_title
vote_average
title