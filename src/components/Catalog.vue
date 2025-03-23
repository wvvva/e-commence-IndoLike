<template>
    <div class="container" style="margin-top: 6vh;">
        <div style="display: flex; flex-direction: row;">
            <div style="width: 22vw; height: 60vh; margin-top:10px; margin-right:40px; background-color: #CA9191">

            </div>
            <div style="width: 66vw; height: 150vh; margin-top:10px; margin-right:10px; margin-bottom: 50px; background-color: #FFFAFA; padding: 25px; padding-left: 40px; padding-right: 40px">
                <span class="textprompt">Got {{items.length}} items based on your search</span>
                <div class="items-list">
            <div 
                v-for="(item, index) in items.slice(0, 6)" 
                :key="index" 
                class="item"
                style="display: inline-block; margin: 30px; justify-content:space-between;">
                <div >
                    <img 
                        style="width: 15vw; height: 15vw; background-color: #5B5B5B" 
                    />
                    <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                        
                        <span class="textprompt" >
                            {{ item.itemName }}
                        </span>
                        <span class="textprompt" >
                            ${{ item.price }}
                        </span>
                        <button v-if="username" @click="addItem(item)" style="width: 30px; height: 30px; border-radius: 15px; border: none; background-color: #CA9191; color: #FFFAFA; margin-top: 5px;">+</button>
                    </div>
                    <div class="textprompt" style="font-size: 10px; letter-spacing: 1px; margin-top: 0px;">
                        {{ item.quantity }} of this are still in stock
                    </div>
                </div>
                
                
            </div>
        </div>
            </div>
            <!-- <table class="table">
                <tbody>
                    <tr v-for="item in items" :key="item.id">
                        <td>{{ item.itemName }}</td>
                        <td>{{ item.price }}</td>
                        <td>{{ item.quantity }}</td>
                    </tr>
                </tbody>
            </table> -->
        </div>
        
    </div>
</template>

<script>
import ItemService from '@/service/ItemService';
import UserService from '@/service/UserService';

export default {
    name: "CatalogPage",
    data() {
        return {
            items: [],
            itemsInCart: [],
            username: sessionStorage.getItem('username') || null, 
        };
    },
    methods: {
        getItems() {
            ItemService.getItems().then((response) => {
                this.items = response.data;
                console.log(this.items)
            });
        },

        addItem(item) {
            UserService.addItem(item.itemId).then((response) => {
                console.log(response.data)
                if(response.data != null){
                    sessionStorage.setItem("itemsInCart", JSON.stringify(response.data.itemList));
                    this.$root.itemsInCart = response.data.itemList;
                    console.log(sessionStorage);  
                }
            });
        },

    },
    created(){
        this.getItems()
    }
};
</script>

<style scoped>
/* Add your styling here */
</style>
