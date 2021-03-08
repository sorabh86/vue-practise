process.mainModule.paths.push('../node_modules');

import {} from 'vue';

const Vue = require('vue');

let app = new Vue();
console.log(app);
