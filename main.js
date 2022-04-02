import './style.css'
import { data } from './data/musicCulture';


let input = document.getElementsByTagName('input')
input[0].onkeyup = debounce(200,search,null)
let show = null


function search(keyWord){
  let path = []
  let res = []
 function deepSearch(data){
  
  for(let i = 0;i<data.length;i++){
      if(res.length>0) break
      if(data[i].name === keyWord){
          path.push(data[i].name)
          res = [...path]
          render(res)                  
          return 
      }
      if(data[i].children.length != 0){
          path.push(data[i].name)
          deepSearch(data[i].children)
          path.pop()
      }else{
          if(path[0] === 'week5' && keyWord){
              render(res)
          }
      }
  }
 }

 deepSearch(data)
}


function debounce(delay,callback){
  let timer = false
  return function(){
  let param = this.value
    if(timer){
      clearTimeout(timer)
  }
  timer = setTimeout(() => {
      callback(param)
  }, delay);
     
  }
}

let showElm = document.getElementsByClassName('show')
let arrow = document.getElementsByClassName('icon-youjiantou2')

function render(show){
  if(show.length === 0){  
      showElm[0].innerHTML = 'No Such Keyword😅'
      return
  }
  let res = ''
  for(let i = 0;i<show.length;i++){
     res =  i === show.length-1?res+show[i]:res + show[i] + '<i class="iconfont icon-youjiantou2"></i>'
  }
  showElm[0].innerHTML = res
}
