var slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}



let xhr;

const loadData = () => {
    xhr = new XMLHttpRequest();

    if(!xhr){
        alert('couldn\'t create xhr object');
        return false;
    }
    xhr.onreadystatechange = reqListener;
    xhr.open('GET' , '../data.json');
    xhr.send();
}
window.onload = loadData();

function reqListener() {
    if(xhr.readyState === 4) {
        if(xhr.status === 200 ) {

            //row for carousel

            carousel = JSON.parse(xhr.responseText).carousel;
                var fragment = document.createDocumentFragment();
                for(let i=0 ; i <carousel.length ; i++){
                    let item = carousel[i];
                    let slide = document.createElement("div");
                    slide.className = "mySlides";
                    slide.innerHTML = 
                        '<a class="image-content" href="' + item.href + '">' +
                        '<img class="carousel-image" src=" '+item.src+'" alt="'+ item.alt +'"> </a>' +
                        '<div class="carousel-details"><p class="movie-title">'+item.name+'</p><br/>'+
                        '<p class="carousel-seasons">'+item.seasons+'</p>'+
                        '<p>'+item.description+'</p>'+
                        '<p class="carousel-cast">'+item.cast+'</p>'+
                        '<p>'+item.creators+'</p>'+
                        '<a href="play.html"><button class="watchnow">Play</button></a>'+
                        '<a href="trailer.html"><button class="watchnow">Trailer</button></div></a>';

                    fragment.appendChild(slide);
                }
                var targetEl = document.getElementsByClassName('carousel-container')[0];
                targetEl.appendChild(fragment);
                showSlides();

                //row for trending series and movies

                trend = JSON.parse(xhr.responseText).trend;
                var fragments = document.createDocumentFragment();
                for(let i=0 ; i <trend.length ; i++){
                    let items = trend[i];
                    let slides = document.createElement("div");
                    slides.innerHTML = 
                        '<div class="card"><img class="trending-images" src=" '+items.src+'" alt="'+ items.alt +'">'+
                        '<div class="details"><div class="title">'+items.title+'</div><a href="play.html"><i class="far fa-play-circle play"></i></a><a href="plus.html"><i class="fas fa-plus-circle plus"></i></a><i class="far fa-thumbs-up like"></i><a href="info.html"><button class="info">More Info</button></a><div class="content">'+items.content+'</div></div></div>';
                    fragments.appendChild(slides);
                }
                var targetE2 = document.getElementsByClassName('trending-container')[0];
                targetE2.appendChild(fragments);

                //row for netflix originals series and movies

                original = JSON.parse(xhr.responseText).original;
                var fragment1 = document.createDocumentFragment();
                for(let i=0 ; i <original.length ; i++){
                    let data = original[i];
                    let slider = document.createElement("div");
                    slider.innerHTML = 
                    '<div class="original-card"><img class="original-images" src=" '+data.src+'" alt="'+ data.alt +'">'+
                    '<div class="details"><div class="original-title">'+data.title+'</div><a href="play.html"><i class="far fa-play-circle original-play"></i></a><a href="plus.html"><i class="fas fa-plus-circle original-plus"></i></a><i class="far fa-thumbs-up original-like"></i><a href="info.html"><button class="original-info">More Info</button></a><div class="original-content">'+data.content+'</div></div></div>';
                    fragment1.appendChild(slider);
                }
                var targetE2 = document.getElementsByClassName('originals-container')[0];
                targetE2.appendChild(fragment1);

                //row for top rated series and movies

                rating = JSON.parse(xhr.responseText).rating;
                var fragment2 = document.createDocumentFragment();
                for(let i=0 ; i <rating.length ; i++){
                    let data1 = rating[i];
                    let slider1 = document.createElement("div");
                    slider1.innerHTML = 
                    '<div class="rate-card"><img class="rate-images" src=" '+data1.src+'" alt="'+ data1.alt +'">'+
                    '<div class="details"><div class="title">'+data1.title+'</div><a href="play.html"><i class="far fa-play-circle play"></i></a><a href="plus"><i class="fas fa-plus-circle plus"></i></a><i class="far fa-thumbs-up like"></i><a href="info.html"><a href="info.html"><button class="info">More Info</button></a><div class="content">'+data1.content+'</div></div></div>';
                    fragment2.appendChild(slider1);
                }
                var targetE3 = document.getElementsByClassName('rate-container')[0];
                targetE3.appendChild(fragment2);
        }
    }
}




