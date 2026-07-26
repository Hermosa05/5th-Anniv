// =======================
// Animated Stars
// =======================

const starsContainer = document.getElementById("stars");

for (let i = 0; i < 200; i++) {

    const star = document.createElement("span");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 5 + "s";
    star.style.animationDuration = (2 + Math.random() * 4) + "s";

    starsContainer.appendChild(star);
}

// =======================
// Begin Journey Button
// =======================

document.getElementById("startBtn").addEventListener("click", () => {

    music.play();

    musicBtn.innerHTML = "⏸";

    document.getElementById("gallery").scrollIntoView({
        behavior: "smooth"
    });

});
// =======================
// Photo Popup
// =======================

const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
const popupText = document.getElementById("popupText");

const messages = [
    "Our first unforgettable memory ❤️",
    "One of my favorite days with you.",
    "Your smile always makes my day.",
    "A memory I'll treasure forever.",
    "Every adventure is better with you.",
    "Happy 5th Anniversary, my love ❤️"
];

document.querySelectorAll(".gallery img").forEach((img,index)=>{

    img.addEventListener("click",()=>{

        popup.style.display="flex";

        popupImg.src=img.src;

        popupText.innerHTML=messages[index];

    });

});

document.getElementById("closeBtn").onclick=()=>{

    popup.style.display="none";

};

const memoryTexts = {
    "photo1.jpg": "...first picture together, sa sobrang kaba hindi makahawak ng ayos sa bewang mo",
    "photo2.jpg": "...nakaw na halik sa hagdan haha",
    "photo3.jpg": "...nakakailang balik na sa bayfair",
    "photo4.jpg": "...unang date sa marikina na parang ang ganda ng boses para magvideoke",
    "photo5.jpg": "...while waiting sa zagu, gigil ang asawa sa'kin",
    "photo6.jpg": "...nakakasama na sa family outing niyo mahal",
    "photo7.jpg": "...sinamahan kita mag-enroll sa pup pagka-init haha",
    "photo8.jpg": "...hindi kasama sa naging plano natin pero naging maganda naman",
    "photo9.jpg": "...na parang dingdong at marian lang",
    "photo10.jpg": "...nalaman mong nasa mall ako kaya nakipagkita ka na rin haha",
    "photo11.jpg": "...salamat sa Diyos nakilala kita"
};

const photos = document.querySelectorAll(".slider img");
const message = document.querySelector("#memoryMessage p");

photos.forEach(photo => {

    photo.addEventListener("click", () => {

        const fileName = photo.src.split("/").pop();

        message.innerHTML = memoryTexts[fileName];

    });

});
// Fade in Letter

const letter = document.querySelector(".letter-card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            letter.style.opacity = "1";
            letter.style.transform = "translateY(0)";

        }

    });

});

observer.observe(letter);

// =======================
// Background Music
// =======================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML = "⏸";

    } else {

        music.pause();

        musicBtn.innerHTML = "🎵";

    }

});

function unlockWebsite(){

    const password = document.getElementById("passcode").value;

    if(password === "072721"){

        document.getElementById("lockScreen").style.display="none";

        document.getElementById("websiteContent").style.display="block";

    }

    else{

        document.getElementById("error").innerHTML="Wrong passcode ❤️";

    }

}