export default function({store, redirect}) {
    if(store.getters(['auth/authenticated'] == true)) {
        redirect('/login')
    }
}