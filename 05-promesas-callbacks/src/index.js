import { obtenerHeroesArr, obtenerHeroeAwait } from './js/await.js';

console.time('await');

obtenerHeroeAwait('capi2').then(heroes => {
    console.log(heroes);
    console.timeEnd('await');
})
.catch(err => console.warn(err));