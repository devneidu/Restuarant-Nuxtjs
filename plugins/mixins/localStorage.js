import Vue from 'vue'

Vue.mixin({
    data(){
        return{
            defaultStorage: 'FoodieCart'
        }
    },
    methods:{
        addToLocalStorage(newItem){
            let itemStorage = this.getStorage();
            itemStorage.push(newItem)
            this.setStorage(itemStorage)
        },
        removeFromStorage(item){
            let itemStorage = this.getStorage();
            let index = itemStorage.findIndex(value => value.uuid == item.uuid)
            itemStorage.splice(index, 1)
            this.setStorage(itemStorage)
        },
        getStorage(){
            return JSON.parse(localStorage.getItem(this.defaultStorage))
        },
        setStorage(item){
            return localStorage.setItem(this.defaultStorage, JSON.stringify(item))
        },
        updateStorage(uuid, quantity){
            let itemStorage = this.getStorage();
            let index = itemStorage.findIndex(value => value.uuid == uuid)
            itemStorage[index].quantity = quantity
            this.setStorage(itemStorage)
        },
        clearCartStorage(){
            this.setStorage([])
        }
    }
})