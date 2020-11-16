var app = new Vue({
  el:'#root',
  data:{
    title: 'titolone',
    img : 'img/img1.jpg'
  },
  methods:{
    slide : function(){
      this.img === 'img/img1.jpg' ? this.img ='img/img2.jpg' : this.img ='img/img1.jpg';
    }
  }
});
