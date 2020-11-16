var app = new Vue({
  el:'#root',
  data:{
    title: 'titolone',
    img : 'img/img1.png'
  },
  methods:{
    carousel : function(){
      this.img ==='img/img1.png' ? this.img ='img/img2.png' : this.img ='img/img1.png';
    }
  }
})
