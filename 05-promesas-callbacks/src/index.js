import {buscarHeroe, buscarHeroeAsync} from './js/promesas';

buscarHeroe('capi1')
.then(heroe => console.log(heroe))
.catch(err => console.warn(err));

buscarHeroeAsync('iron1')
.then(heroe => console.log(heroe))
.catch(err => console.warn(err));