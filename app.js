

let myVue = new Vue({
    el: "#store-app",
    data:  {
        instruments: [
            {"name": "Stratocaster", "type": "electric guitar", "brand": "Fender", "price": "$599.99"},
            {"name": "Telecaster", "type": "electric guitar", "brand": "Fender", "price": "$399.99"},
            {"name": "SBP2F50 Stage", "type": "drum set", "brand": "Yamaha", "price": "$799.99"},
            {"name": "Maton TE", "type": "acoustic guitar", "brand": "Maton", "price": "$2299.99"},
            {"name": "Trumpet", "type": "brass wind", "brand": "Yamaha", "price": "$729.00"}
        ],
        cart: []
    },

    methods: {
        popUp: function (instrument) {
            //console.log("smells");
            let item = instrument;
            let ele=document.createElement("div");
            let html=`<p>name: ${item.name} <br> price: ${item.price} <br> brand: ${item.brand}</p>`;

            let button = document.createElement("button");
            button.innerText = "Add to Cart";


            ele.className="popUp";
            ele.style.display="block";

            document.body.appendChild(ele);
            ele.appendChild(button);

            let info = document.createElement("p");
            info.innerHTML = html;

            ele.appendChild(info);



        //    now hide the popUp - wiring up the event handler that will hide the pop up
            ele.addEventListener("click", function (){
                ele.style.display="none";
            });

            button.addEventListener("click", function (){
                return myVue.addToCart(instrument);
            });
        },

        addToCart: function (instrument) {
            this.$data.cart.push(instrument);

            this.$data.instruments = this.$data.instruments.filter(function(value, index, arr){
                return value != instrument;
            });
        },

        clearCart: function () {
            for (item in this.$data.cart)
            {
                this.$data.instruments.push(this.$data.cart[item]);
            }

            this.$data.cart = [];
        }
    }

})

