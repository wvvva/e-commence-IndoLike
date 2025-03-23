<template>
    <div class="container" style="margin-top: 6vh;">
        <div style="display: flex; flex-direction: row;">
            <div>
                <div style="width: 66vw; height: 150vh; margin-top:3vh; margin-right:10px; margin-bottom: 50px; background-color: #FFFAFA; padding: 25px; padding-left: 40px; padding-right: 40px; ">
                    <!-- <span class="textprompt">Your Cart</span> -->
                    <div>
                        <div 
                        v-for="(item, index) in itemsInCart" 
                        :key="index" 
                        style="display: flex; width:100%; margin: 30px; justify-content:space-between; padding:0">
                            <div style="width:90%;  display: flex; justify-content:space-between;">
                                <img 
                                    style="width: 6vw; height: 6vw; background-color: #5B5B5B" :src="item.imageUrl"
                                />
                                <span class="textprompt" style="width: 10vw; margin-top: 2vw; font-size: 12px;">
                                        {{ item.itemName }}
                                </span>
                                <span class="textprompt" style="width: 3vw; margin-top: 2vw;">
                                        ${{ (item.price / 100).toFixed(2)  }}
                                </span>
                                <button @click="removeItem(item)" style="width: 30px; height: 30px; border-radius: 15px; border: none; background-color: #CA9191; color: #FFFAFA; margin-top: 5px; margin-top: 2vw;  margin-left: 10vw;">-</button>
                                <span class="textprompt" id = "quantityInCart" style="margin-top: 2vw;" v-text="'x' + item.quantityInCart"></span>
                                        <!-- x{{ item.quantityInCart }} -->

                                <button @click="addItem(item)" style="width: 30px; height: 30px; border-radius: 15px; border: none; background-color: #CA9191; color: #FFFAFA; margin-top: 5px; margin-top: 2vw;">+</button>
                                <!-- <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                    
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="display: flex; flex-direction: column; width: 22vw; height: 30vh; margin-top:12vh; margin-left:40px; background-color: #DF9A9A;padding: 10px; text-align: center; box-shadow: 2px 2px 10px rgba(37, 19, 19, 0.3);">
                <div class="textprompt"  style="color: #FFFAFA; font-size: 20px; margin-top: 10%;">Total Amount:</div>
                <div class="textprompt" style="color: #FFFAFA; font-size: 40px; margin-top: 5%;" v-text="'$' + (totalPrice / 100).toFixed(2) "></div>
                <button class="loginButton" @click="checkout" style="width: 50%; color: #A24F4F; letter-spacing: 1px; font-weight: 300; margin-top: 5vh; align-self: center;">Check Out</button>
            </div>
            
        </div>
        
    </div>
</template>

<script>
import UserService from '@/service/UserService';
export default {
    name: "CatalogPage",
    data() {
        return {
            itemsInCart: [],
            username: '',  
            totalPrice: 0
        };
    },
    methods: {
        getItems() {
            UserService.getItems().then((response) => {
                this.itemsInCart = response.data;
                this.itemsInCart.forEach(item => {
                    this.totalPrice += item.price * item.quantityInCart;
                });
            });
        },

        addItem(item) {
            UserService.addItem(item.itemId).then((response) => {
                if(response.data != null){
                    const itemIndex = this.itemsInCart.findIndex(i => i.itemId === item.itemId);
                    if (itemIndex !== -1) {
                        this.itemsInCart[itemIndex].quantityInCart += 1; 
                        this.totalPrice += this.itemsInCart[itemIndex].price;
                    } else {
                        this.itemsInCart.push(response.data.itemList);
                    }
                    
                    sessionStorage.setItem("itemsInCart", JSON.stringify(this.itemsInCart));

                }
            });
        },

        removeItem(item) {
            UserService.removeItem(item.itemId).then((response) => {
                if(response.data != null){
                    const itemIndex = this.itemsInCart.findIndex(i => i.itemId === item.itemId);
                    if (itemIndex !== -1) {
                        this.itemsInCart[itemIndex].quantityInCart -= 1; 
                        this.totalPrice -= this.itemsInCart[itemIndex].price;
                        if (this.itemsInCart[itemIndex].quantityInCart === 0) {
                            this.itemsInCart.splice(itemIndex, 1);
                        }
                    } else {
                        this.itemsInCart.push(response.data.itemList);
                    }
                    
                    sessionStorage.setItem("itemsInCart", JSON.stringify(this.itemsInCart));

                }
            });
        },
        checkout() {
            UserService.checkout().then((response) => {
                if (response.data) {
                    window.open(response.data, '_blank');
                }
            }).catch(error => {
                console.error("Error during checkout", error);
            });
        },


    },
    created(){
        this.getItems()
        // const storedItems = sessionStorage.getItem("itemsInCart");
        // if (storedItems) {
        //     var parsedItems = JSON.stringify(storedItems);
        //     this.itemsInCart = JSON.parse(parsedItems);
        //     console.log(Array.isArray(parsedItems));
        // }
    }
};
</script>

<style scoped>
/* Add your styling here */
</style>
