Vue.createApp({
  template: "#my-app",
  data() {
    return {
      books: [
        {
          id: 1,
          name: '《龙族》',
          price: 32,
          count: 1,
        },
        {
          id: 2,
          name: '《megn》',
          price: 55,
          count: 1,
        }
      ]
    }
  },

  computed: {
    totalPrice() {
      let finalPrice = 0;
      for (let book of this.books) {
        finalPrice += book.count * book.price;
      }
      return finalPrice;
    },
    //Vue3不支持过滤器了，推荐两种做法：使用计算属性/全局方法
    filterBooks(){
      return this.books.map(item =>{
        const newItem = Object.assign({},item);
        newItem.price = "￥" + item.price;
        return newItem;
      })
    }
  },

  methods: {
    increment(index) {
      //通过索引值
      this.books[index].count++;
    },
    decrement(index) {
      //通过索引值
      this.books[index].count--;
    },
    removeBook(index) {
      this.books.splice(index, 1)
    }
  }
}).mount("#app");