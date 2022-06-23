import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';



export default [
  {
    path:"/",
    component: Home
  },
  {
    name: "search",
    path:"/search/:keyword?",
    component: Search
  },
  {
    path:"/login",
    component: Login,
    meta:{
      isFideFooter: true
    }
  },
  {
    path:"/register",
    component: Register,
    meta:{
      isFideFooter: true
    }
  },
]