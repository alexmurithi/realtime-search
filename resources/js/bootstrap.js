window._ = require('lodash');



try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}



window.axios = require('axios');




window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
window.axios.defaults.headers.common.crossDomain = true;
// window.axios.defaults.baseURL = '/api';

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
    
} else {
    console.error('CSRF token not found: https://adonisjs.com/docs/4.1/csrf');
}




import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'd5e362fadeb71ac6cc64',
    cluster: 'ap2',
    encrypted: true
});
