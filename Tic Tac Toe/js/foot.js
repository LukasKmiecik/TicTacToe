const foo = document.querySelector(".foot");

const foot = document.createElement("div");
foot.classList.add("foot");
foo.appendChild(foot);

const kon = document.createElement("div");
kon.classList.add("kon");
foo.appendChild(kon);

for (let i=0;i<4;i++)
{
    const bo = document.createElement("div");
    bo.classList.add("bo");
    kon.appendChild(bo);
}
bo = document.querySelectorAll(".bo");

const spa1 = document.createElement("span");
spa1.classList.add("spa");
foot.appendChild(spa1);

const spa2 = document.createElement("span");
spa2.classList.add("spa");
foot.appendChild(spa2);


///////////////////////////////////////
foot.style.position = "fixed";
foot.style.display = "flex";
foot.style.flexDirection = "row";
foot.style.alignItems = "center";
foot.style.justifyContent = "flex-end";
foot.style.width = "100%";
foot.style.bottom = "0";
foot.style.paddingRight = "35px";
foot.style.color = "#C5C5C5";
foot.style.height = "50px";
foot.style.boxShadow = "black 0px -6px 15px -12px";


kon.style.position = "fixed";
kon.style.display = "flex";
kon.style.flexDirection = "row";
kon.style.alignItems = "center";
kon.style.justifyContent = "flex-end";
kon.style.width = "auto";
kon.style.boxShadow = "black 0px -6px 15px -12px";
kon.style.right = "0";
kon.style.paddingRight = "35px";
kon.style.bottom = "50px";
kon.style.color = "#c5c5c5";
kon.style.display = "none";

spa1.innerText = "Create by\u00A0 ";

spa2.innerText = "Lukasz Kmiecik"
spa2.style.cursor = "pointer";

spa2.addEventListener("mouseover",()=>{
    kon.style.display = "block";
    setTimeout(()=>{
        kon.style.display = "none";
    },3000);
});

bo[0].innerHTML = "Kontakt :"
bo[1].innerHTML = '<a href="mailto:kmieciklu@gmail.com?subject=From Tic Tac Toe Side">Gmail</a>';
bo[2].innerHTML = '<a href="https://www.m.me/luk.asz.75457" rel="noreferrer" target="_blank">Messenger</a>';
bo[3].innerHTML = '<a href="lukaszkmiecik.j.pl" rel="noreferrer" target="_blank">Web Site</a>';
