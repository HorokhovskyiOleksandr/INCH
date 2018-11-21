<template>
  <div id="app">
      <header>
        <div class="headerFooterBack"><img src='../src/img/header123.png'></div>
      </header> 
      <div class="content">
        <div class="ourPack">
          <div class="ourPackText"><p>НАШІ ЛІКИ</p></div>
          <img src='../src/img/packOur.png'>
          <input class="input" id='Our' @focus='input("our")' :value= "current" placeholder='Введіть вартість упаковки'>
        
        </div>
        <div class="otherPack">
          <div class="otherPackText"><p id="otherPackText">ОБЕРІТЬ КОМПАНІЮ</p></div>
          <img src='../src/img/pack.png'>
          <div class="button"><img
          @click="show"

           src="../src/img/button.png"></div>
          
          <input class="input" id="Other" @focus='input("other")' :value= "currrent" placeholder='Введіть вартість упаковки'>
          <ul class="competitors">
            <li 
            @click='active(1)'
            ><a href='#'>КОНКУРЕНТ1</a></li>
            
            <li
            @click='active(2)'
            ><a href='#'>КОНКУРЕНТ2</a></li>
            <li
            @click='active(3)'
            ><a href='#'>КОНКУРЕНТ3</a></li>
            <li
            @click='active(4)'
            ><a href='#'>КОНКУРЕНТ4</a></li>
            <li
            @click='active(5)'
            ><a href='#'>КОНКУРЕНТ5</a></li>
            <li><img
            @click="hide"
             src="../src/img/upbutton.png"></li>

            </ul>
        </div>
        <div 
        @click = 'calculate'
        class="calculate">Розрахувати вартість упаковки</div>
        <div class="numbers">
          <input @click='append(1,word)' type="button" value="1">
          <input @click='append(2)' type="button" value="2">
          <input @click='append(3)' type="button" value="3">
          <input @click='append(4)' type="button" value="4">
          <input @click='append(5)' type="button" value="5">
          <input @click='append(6)' type="button" value="6">
          <input @click='append(7)' type="button" value="7">
          <input @click='append(8)' type="button" value="8">
          <input @click='append(9)' type="button" value="9">
          <input @click='append(0)' type="button" value="0">
          <input @click='append(".")' type="button" value=".">
          <input id='delete' @click='deleteNumber()' type="button" value="X">
         
          
        </div>
        <div class='top'><img src='../src/img/light.png'></div>
        <div class='bottom'>
          <img src='../src/img/foot.png'>
        </div>
        <div class="popup">
        <div class="row">
          <div class="col-md-5 Drags"><p>№30<br>
      Курс лікування 3 місяці<br>
      по 1 таблетці 3 рази на добу</p>
      <div class='Price '><p>{{current*9}}грн.</p></div>
     
      <div class='pack'><img src='../src/img/package.png'>
      <p class='text'>Наші ліки</p>
       <div class='numberOfPack'>
        <img src="../src/img/Ellipse 3.png">
        <p class='number'>9шт.</p>
      </div>
      </div>
    
      </div>
        <div class="col-md-2">
          <div class="closeButton"
          @click='closeButton'
          ><img
        
           src="../src/img/close_button.png"></div>


        </div>
          <div class="col-md-5 Drags">
            <p>№30<br>
      Курс лікування 3 місяці<br>
      по 2 таблетки 3 рази на добу</p>
      <div class='Price'><p>{{currrent*18}}грн.</p></div>
       <div class='pack'><img src='../src/img/packsge_competitor.png'>
       <p class='text'>Конкурет {{index}}</p>
       <div class='numberOfPack'>
        <img src="../src/img/Ellipse 3.png">
        <p class='number'>18шт.</p>
      </div>
       </div>
       

          </div>
        </div>
        
        <div v-if="(current*9)<(currrent*18)" class="row popupEnd">
          <div class="col-md-7 "><p>Економія для пацієнта з Нашими ліками</p></div>
          <div class="col-md-2"><p>{{(currrent*18)-(current*9)}}грн.</p></div>
          <div class="col-md-3"><div class="percent">{{parseInt(((currrent*18)-(current*9))*100/(currrent*18))}}%</div></div>
        </div>
        <div v-else class="row popupEnd">
          <div class="col-md-12">Перевірте, можливо ви допустили
помилку при вводі вартості упаковки</div>
        </div>
      </div>
      </div>
      
      

      <footer>
         <div class="headerFooterBack"><img src='../src/img/footer.png'></div>
      </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      current:'',
      currrent:'',
      word:'',
      competitors:'',
      index:0,


    }
      
    },
    methods:{
      append(number){
        console.log(this.word)
        if(this.word == 'our'){
                this.current = this.current+number;
                this.current = this.current.replace(/^[0 \.]+/, '');
                if(this.current.match(/\./g).length > 1) { 
                this.current = this.current.substr(0, this.current.lastIndexOf("."));
      }
          
    
          ;}
        if(this.word == 'other'){
                this.currrent = this.currrent+number;
                this.currrent = this.currrent.replace(/^[0 \.]+/, '');
                if(this.currrent.match(/\./g).length > 1) { 
                this.currrent = this.currrent.substr(0, this.currrent.lastIndexOf("."));
      }
          
        } 
      }
           
      ,
      input(word){
          
             if(this.current.length>0 && this.currrent.length>0 ){
                  $('.calculate').css({'z-index':1004})
              }
          
        $('.numbers input').css({'z-index':1000});
        
         let our = $('#Our').attr('placeholder');
       
         
        if(word=="our"){
          
          this.word = 'our';
        
          $('#Our').attr('placeholder','');
          $('#Our').blur(function(){
             $('#Our').attr('placeholder',our)
          
          })
        }
        if(word=="other"){
          this.word = 'other';
          $('#Other').attr('placeholder','');
          $('#Other').blur(function(){
          $('#Other').attr('placeholder',our);
        
          
          })
          }
        
           
        },
        deleteNumber(){
          if(this.word =="our"){
          this.current = this.current.slice(0,-1)
          }
          if(this.word == "other"){
          this.currrent = this.currrent.slice(0,-1)
          }
        },
        active(index){
          this.index = index;
         $('.competitors li').removeClass('active');
         $('.competitors li:nth-child('+index+')').addClass('active');
          
        },
        show(){
          $('.competitors').show();
          
        },
         hide(){
        $('.competitors').hide();
        $('.input').show();
        $('.otherPackText').html("Конкурент"+this.index)
      },
        calculate(){
          $('.popup').show();
        },
        closeButton(){
          $('.popup').hide();
        }
      },
     
    
  }

</script>

<style>
*{
  margin:0;
  padding:0;
  text-decoration: none;
  
}
#app{
   background:#1391bb;
   font-family: 'Myriad Pro';
}
.popupEnd{
  background-color:#2f1505;
  min-height: 100px;
  color:#ffd6a8;
  margin: 0;
  padding: 0;
  text-align: left;
  line-height: 100px;
  font-size:25px;
  font-weight: bold;
  overflow: hidden;
}
.percent{
  background-color:#ffd6a8;
  color:#2f1505;
  height:75px;
  border-radius:20px;
  margin-top:18px;
  width:200px;
  text-align:center;
  line-height:75px;
}
.numberOfPack{
  position:absolute;
  width:80px;
  height: 80px;
  right:-10%;
  top:10%;
}
.number{
  position:absolute;
  z-index: 10000;
  top:30%;
  left:30%;
}
.popup{
  width: 1000px;
  height:500px;
  background-color:white;
  position:absolute;
  z-index:10000;
  top:24%;
  left:15%;
  bottom:0;
  right:0;
  text-align: center;
  display: none;
  margin:0;
}
.row{
  margin:0;
}
.pack{
  width:248px;
  height:180px;
  position:relative;
  margin:0 auto;
}
.pack img{
  width:100%;
  height:auto;
}
.closeButton{
  position:absolute;
  top:-10%;
  cursor: pointer;
}
.text{
  position:absolute;
  margin: auto;
  display: block;
  top:40%;
  bottom:0;
  right:0;
  left:0;
}
.text:nth-child(2){
  color:#ffd6a8;
}

.Price{
  width:160px;
  height:70px;
  background:#2f1505;
  border-radius:10px;
  margin:0 auto;
  color:#ffd6a8;
  line-height: 70px;
}
.Drags{
  margin-top:50px;
  color:#2f1505;
}
header{
  position:absolute;
  min-height: 100px;
  width:100%;
}
footer{
  margin-top:150px;
}
.headerFooterBack img{
  width:100%;
  height:auto;
}
.content{
  position: relative;
  width:100%;
  min-height: 470px;
  padding-top:174px;

}
.ourPack{
  position:absolute;
  left:10%;
  width:380px;
  height: 310px;
  z-index:4;
  transform-style: preserve-3d;
  
}
.ourPackText{
  position:absolute;
  top:30%;
  left:40%;
  transform: perspective(1000px) rotateY(35deg);
  z-index:999;
  width:250px;
  font-size:20px;
}
.button{
  position:absolute;
  z-index:999;
  top:40%;
  left:30%;
  cursor:pointer;
}

.otherPackText{
  position:absolute;
  top:30%;
  left:15%;
  transform: perspective(1000px) rotateY(-35deg);
  z-index:999;
  width:250px;
  color:#ffd6a8;
  font-size:20px;
}
.otherPack{

  position:absolute;
  right:10%;
 width:380px;
  height: 310px;
  z-index:4;
}
.otherPack img{
  width:100%;
  height: 100%;
}
.ourPack img{
  width:100%;
  height:100%;
}
.bottom img{
  position:absolute;
  z-index:1;
  width:100%;
  height:auto;
  margin-top:20%;
}
.top img{
  position:absolute;
  z-index:1;
  width:100%;
  height:auto;
  margin-top:110px;
  top:0;

}
.input{
  height:61px;
  width:270px;
  border-radius:40px;
  border:0.5px solid grey;
  position:absolute;
  bottom:0;
  left:10%;
  background-color:#fcecd9;
  text-align:center;
  line-height: 61px;
  cursor:pointer;
  display:none;

}

input{
  height:61px;
  width:270px;
  border-radius:40px;
  border:0.5px solid grey;
  position:absolute;
  bottom:0;
  left:10%;
  background-color:#fcecd9;
  text-align:center;

}
input::placeholder{
  color:black;
  text-align: center;
}
.Our{
  left:20%;
}
.calculate{
  position:absolute;
   height:61px;
  width:270px;
  border-radius:40px;
  background-color:#cd6b35;
  text-align: center;
  vertical-align: middle;
  line-height: 61px;
  bottom:-22%;
  left:40%;
  z-index:999;
  color:white;
  cursor:pointer;
  z-index: 1;
}
.numbers{
  bottom:-27%;
  position: absolute;
  width:1100px;
  height:50px;
  padding-top:70px;
  display: inline-block;
  text-align:center;
}
.numbers input{
  display: inline-block;
  position: relative;
  width:58px;
  height:58px;
  z-index:1;
  border-radius:10px;
  background-color:#773927;
  color:white;
  cursor:pointer;
  box-shadow: 0px 6px 5px 0px rgba(0,0,0,0.75);
  
}
.numbers  #delete{
    width:78px;
    height:58px;
    border-radius:0;
    background-color:rgba(0,0,0,0);
    background-image: url(../src/img/delete.png);
    border:none;
    box-shadow: none;
    background-size: cover;
}
.competitors{
  position:absolute;
  text-decoration: none;
  list-style: none;
  display: block;
  top:-20%;
  left:-40%;
  background-color:#0d81a7;
  z-index: 1001;
  display:none;

  

}
.competitors li{
   margin:0;
  text-decoration: none;
  list-style: none;
  display: block;
  height: 73px;
  width: 580px;
  text-align: left;
  line-height: 73px;
  color:white;
  border-bottom: 1px solid #0d467d;
  cursor: pointer;
}
.competitors li a{
  color:white;
  margin-left:50px;
  padding-left: 10px;
}
.competitors li a::before{
  content:">";
  color:#0d81a7;
  font-weight: bold;
  width:0;
  height: 0;
  margin-right: 35px;
  background-color: white;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-radius: 50%;
  
}
.competitors li:last-child{
  width:100%;
  height: 100px;
  position: absolute;
  z-index: 10002;
    background-color:#0d81a7;
}
.competitors li:last-child img{
  width:100px;
  height: 100px;
  position:absolute;
  left:40%;
  bottom:-35%;
}
.active{
  background-color:#07223c;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
