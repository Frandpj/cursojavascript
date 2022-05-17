import { obtenerHeroesArr } from './js/await.js';

console.time('await');

obtenerHeroesArr().then(heroes => {
    console.table(heroes);
    console.timeEnd('await');
});