const elements = document.querySelectorAll(".reveal, .zoom-in");
const container = document.querySelector(".content-scroll");

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{
root: container,
threshold: 0.2
});

elements.forEach(el=>{
observer.observe(el);
});