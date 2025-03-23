<template>
    <div class="container" style="margin-top: 6vh;">
        <div style="display: flex; flex-direction: row;">
            <div>
                <div style="width: 66vw; height: 150vh; margin-top:3vh; margin-right:10px; margin-bottom: 50px; background-color: #FFFAFA; padding: 25px; padding-left: 40px; padding-right: 40px">
                    <!-- <span class="textprompt">Your Cart</span> -->
                    <div class="items-list">
                        <div 
                        v-for="(itemsInCart, index) in itemsInCart" 
                        :key="index" 
                        class="item"
                        style="display: flex; margin: 30px; justify-content:space-between;">
                            <div >
                                <img 
                                    style="width: 15vw; height: 15vw; background-color: #5B5B5B" 
                                />
                                <span class="textprompt" style="margin-left: 5vw;">
                                        {{ itemsInCart.itemName }}
                                </span>
                                <span class="textprompt">
                                        ${{ itemsInCart.price }}
                                </span>
                                <!-- <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="width: 22vw; height: 20vh; margin-top:12vh; margin-left:40px; background-color: #DF9A9A">
                <button class="loginButton">Order</button>
            </div>
            
        </div>
        
    </div>
</template>

<script>

console.log(sessionStorage)
export default {
    name: "CatalogPage",
    data() {
        return {
            itemsInCart: [],
            username: '',   
        };
    },
    methods: {
    

    },
    created(){
        const storedItems = sessionStorage.getItem("itemsInCart");
        if (storedItems) {
            var parsedItems = JSON.stringify(storedItems);
            this.itemsInCart = JSON.parse(parsedItems);
            console.log(this.itemsInCart);
        }
    }
};
</script>

<style scoped>
/* Add your styling here */
</style>
