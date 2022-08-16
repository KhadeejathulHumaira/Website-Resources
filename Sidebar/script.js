//select items
const sidebarToggle=document.querySelector('.sidebar-toggle')
const sidebar=document.querySelector('.sidebar')
const closeBtn=document.querySelector('.close-btn')

sidebarToggle.addEventListener('click',()=>{
  // This is will toggle the show sidebar class
//   if(sidebar.classList.contains('show-sidebar')){
//     sidebar.classList.remove('show-sidebar')
//   }
//   else{
//     sidebar.classList.add('show-sidebar')
//   }
    sidebar.classList.toggle('show-sidebar')
})
closeBtn.addEventListener('click',()=>{
    sidebar.classList.remove('show-sidebar')
})