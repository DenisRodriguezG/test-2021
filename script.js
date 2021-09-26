const containerEl =document.querySelector('.container');
const itemsEl = document.querySelectorAll('.items');
const containerCapEl = document.createElement('div');
const movie_infoEl = document.createElement('div');

const optionsEl = document.createElement('div');
optionsEl.classList.add('container-options');

const createPlay = document.createElement('div');
createPlay.classList.add('play');

const subContainerEl = document.querySelector('.sub-container');

containerCapEl.classList.add('container-Cap');
movie_infoEl.classList.add('movie-info');

const showPlay = (e) => {
    optionsEl.classList.add('hidden');
    createPlay.innerHTML =`
    <img src="https://www.formulatv.com/images/series/posters/1400/1426/dest_3.jpg" alt="">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/6UMmM_XmFVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;
    containerEl.appendChild(createPlay);
}

const getOptions = (e) => {
    
    console.log(e)
    const options = document.querySelectorAll('.op');
    
    options.forEach(e => {
        console.log(e)
        e.addEventListener('click', () => showPlay(e));
    })
    
}

const getCapi = (e) => {
    console.log(e)
    const iitems_CEl = document.querySelectorAll('.items-C');
    iitems_CEl.forEach(e => {
        e.addEventListener('click', () => optionsSeeCap(e));
    }
    )
}

const capitulos = (e) => {
    subContainerEl.classList.add('hidden');

    containerCapEl.innerHTML = `
    <div class="movie-info">
         <div class="movie-logo">
    <img src="https://www.formulatv.com/images/series/posters/1400/1426/dest_3.jpg" alt="">
    <div class="title-temp">
        <p class="title">La casa de papel</p>
        <p class="temp">${e.textContent}</p>
    </div>
</div>
<div class="star">
    <i style="font-size: 14px !important;">2017</i>
</div>
</div>
</div>
<div class="temps">
<div class="items-C" >Capitulo 1</div>
<div class="items-C" >Capitulo 2</div>
<div class="items-C" >Capitulo 3</div>
<div class="items-C" >Capitulo 4</div>
<div class="items-C" >Capitulo 5</div>
<div class="items-C" >Capitulo 6</div>
<div class="items-C" >Capitulo 7</div>
</div>
`;
    containerEl.appendChild(containerCapEl);
    getCapi(containerEl);
}

const optionsSeeCap = () => {
    containerCapEl.classList.add('hidden');
    optionsEl.innerHTML = `<div class="temps">
    <div class="op">Option 1</div>
    <div class="op">Option 2</div>
    <div class="op">Option 3</div>
    <div class="op">Option 4</div>
    </div>`
    containerEl.appendChild(optionsEl);
    getOptions(containerEl);
}

itemsEl.forEach(e => {
    e.addEventListener('click', () => capitulos(e));
});




