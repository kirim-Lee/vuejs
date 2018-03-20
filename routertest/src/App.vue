<template>
<div>
  <div class="header">
    <h1 class="headerText">(주) OpenSG</h1>
    <nav>
      <ul>
        <li>
          <router-link :to="{name:'home'}">Home</router-link>
        </li>
        <li>
          <router-link :to="{name:'about'}">About</router-link>
        </li>
        <li>
          <router-link :to="{name:'contacts'}">Contacts</router-link>
        </li>
      </ul>
    </nav>
  </div>
  <div class="container">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
  import Home from './components/Home'
  import Contacts from './components/Contact'
  import About from './components/About'
  import ContactByNo from './components/ContactByNo'
  import NotFound from './components/NotFound'
  import VueRouter from 'vue-router'

  //no속성, path속성에 라우트 정보를 부여함. /contactbyno?no=1004
  function connectQueryToProp(route){
  	return {no:route.query.no,path:route.path};
  }
  const router=new VueRouter({
      mode:'history', //라우팅모드 //없으면 해시모드
      routes:[
          {path:'/',component:Home},
          {path:'/home',name:'home',component:Home},
          {path:'/about',component:About,name:'about'},
          {path:'/contacts',component:Contacts,name:'contacts',
              children:[
				  {
				  	  path:':no',
                      component:ContactByNo,
                      name:'contactbyno',
                      props:connectQueryToProp
				  }
              ]
          },
          {path:"*",component:NotFound}
      ]
  });

  router.beforeEach((to,from,next)=>{
  	console.log('** beforeEach!!');
  	next();
  });
  router.afterEach((to,from)=>{
  	console.log('** afterEach!');
  });
export default {
	name: 'app',
    router
}
</script>

<style>
  @import url("https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");
  .header{background-color:aqua; padding:10px 0 0 0;}
  .headerText{padding:0 20px;}
  ul{list-style-type:none; margin:0; padding:0; overflow:hidden; background-color:purple;}
  li{float:left;}
  li a{display:block; color:yellow; text-align: center; padding:14px 16px; text-decoration: none;}
  li a:hover{background-color:aqua; color:black; }
</style>
