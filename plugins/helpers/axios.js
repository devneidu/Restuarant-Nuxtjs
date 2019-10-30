export default function({store, error, app, $axios, $auth}) {
    $axios.onRequest(config => {
        store.dispatch('validation/clearErrors')
        let url = config.url
        // console.log(url);
        // $axios.setToken(store.$auth.$storage._state['_token.local'])
        // console.log($auth);
    })
    
    $axios.onResponse(response => {
        return Promise.resolve(response)
    })

    $axios.onError(err => {
        if(err.response.status == 401) {
            toast('error', err.response.data.message, 'times')
        }
        if(err.response.status == 422) {
            store.dispatch('validation/setErrors', err.response.data.errors);
            toast('error', 'Data supplied isn\'t correct', 'times')
        }

        return Promise.reject(err)
    })

    function toast(type, msg, icon){
        return app.$toast.show(msg, {
            type: type,
            icon: {
                name: 'fa fa-' + icon,
            }
        })
    }
}