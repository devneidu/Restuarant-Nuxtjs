export default function({store, error, app, $axios}) {
    $axios.onRequest(config => {
        store.dispatch('validation/clearErrors')
        console.log('Making request to ' + config.url)
    })
    
    $axios.onResponse(response => {
        return Promise.resolve(response)
    })

    $axios.onError(err => {
        if(err.response.status == 422) {
            // console.log(err.response.data.errors);
            store.dispatch('validation/setErrors', err.response.data.errors);
        }

        return Promise.reject(err)
    })
}