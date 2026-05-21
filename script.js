console.log("Welcome to Wavify");
let songIndex=0;
let audioElement=new Audio('Songs/letmeloveyou.mp3');
let masterplay=document.getElementById('masterplay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongname=document.getElementById('masterSongname');
let songitems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {
        songName: "Let Me Love You",
        filePath: "Songs/letmeloveyou.mp3",
        coverPath:"Songimages/Letmeloveyou.jpg",
        lang:"English",
        singer:"Justin Bieber",
        mode:"relax"
    },
    {
        songName: "Memories",
        filePath: "Songs/memories.mp3",
        coverPath:"Songimages/memories.jpg",
        lang:"English",
        singer:"Justin Bieber",
        mode:"relax"
    },
    {
        songName: "Shape of You",
        filePath: "Songs/shapeofyou.mp3",
        coverPath:"Songimages/shapeofyou.jpg",
        lang:"English",
        singer:"Ed Sheeran",
        mode:"relax"
    },
    {
        songName: "Perfect",
        filePath: "Songs/perfect.mp3",
        coverPath:"Songimages/perfect.jpg",
        lang:"English",
        singer:"Ed Sheeran",
        mode:"relax"
    },
    {
        songName: "Believer",
        filePath: "Songs/believer.mp3",
        coverPath:"Songimages/believer.jpg",
        lang:"English",
        singer:"Imagine Dragons",
        mode:"workout"
    },
    {
        songName: "Night Changes",
        filePath: "Songs/nightchanges.mp3",
        coverPath:"Songimages/nightchanges.jpg",
        lang:"English",
        singer:"One Direction",
        mode:"relax"
    },
    {
        songName: "Closer",
        filePath: "Songs/closer.mp3",
        coverPath:"Songimages/closer.jpg",
        lang:"English",
        singer:"The Chainsmokers",
        mode:"relax"
    },
    {
        songName: "A Thousand Years",
        filePath: "Songs/thousandyears.mp3",
        coverPath:"Songimages/thousandyears.jpg",
        lang:"English",
        mode:"relax"
    },
    {
        songName: "End of Begining",
        filePath: "Songs/endofbegin.mp3",
        coverPath:"Songimages/endofbegining.jpg",
        lang:"English",
        mode:"relax"
    },
    {
        songName: "Lutt Le Gaya",
        filePath: "Songs/lutlegaya.mp3",
        coverPath:"Songimages/luttlegaya.jpg",
        lang:"Hindi",
        mode:"workout",
    },
    {
        songName: "Run down the city - (Monica)",
        filePath: "Songs/rundownthecity.mp3",
        coverPath:"Songimages/rundownthecity.jpg",
        lang:"Hindi",
        mode:"workout"
    },
    {
        songName: "Beedi Jalaile",
        filePath: "Songs/Beedi.mp3",
        coverPath:"Songimages/beedi.jpg",
        lang:"Hindi",
        singer:"Sunidhi Chauhan",
        mode:"workout"
    },
    {
        songName: "Bairan",
        filePath: "Songs/Bairan.mp3",
        coverPath:"Songimages/bairan.jpg",
        lang:"Hindi",
        mode:"relax"
    },
    {
        songName: "Mainu Ishq Tera Lae Dooba",
        filePath: "Songs/LaeDooba.mp3",
        coverPath:"Songimages/LaeDooba.jpg",
        lang:"Hindi",
        singer:"Sunidhi Chauhan",
        mode:"relax"
    },
    {
        songName: "Zalima",
        filePath: "Songs/Zalima.mp3",
        coverPath:"Songimages/Zalima.jpg",
        lang:"Hindi",
        singer:"Arijit Singh",
        mode:"relax"
    },
    {
        songName: "Ae Ajnabee",
        filePath: "Songs/Ae Ajnabee.mp3",
        coverPath:"Songimages/Ae Ajnabee.jpg",
        lang:"Hindi",
        mode:"relax"
    },
    {
        songName: "Har Har Gange",
        filePath: "Songs/Har Har Gange.mp3",
        coverPath:"Songimages/Har Har Gange.jpg",
        lang:"Hindi",
        singer:"Arijit Singh",
        mode:"relax"
    },
    {
        songName: "Arz Kiya Hai",
        filePath: "Songs/Arz Kiya Hai.mp3",
        coverPath:"Songimages/Arz Kiya Hai.jpg",
        lang:"Hindi",
        mode:"relax"
    },
    {
        songName: "Deva Deva",
        filePath: "Songs/Deva Deva.mp3",
        coverPath:"Songimages/Deva Deva.jpg",
        lang:"Hindi",
        singer:"Arijit Singh",
        mode:"relax"
    },
    {
        songName: "Aaoge Tum Kabhi",
        filePath: "Songs/Aaoge Tum Kabhi.mp3",
        coverPath:"Songimages/Aaoge Tum Kabhi.jpg",
        lang:"Hindi",
        mode:"relax"
    },
    {
        songName: "Hum Tere Pyar Mein",
        filePath: "Songs/Hum Tere Pyar Mein.mp3",
        coverPath:"Songimages/Hum Tere Pyar Mein.jpg",
        lang:"Hindi",
        mode:"relax"
    },
    {
        songName: "Mila To Marega",
        filePath: "Songs/Mila To Marega.mp3",
        coverPath:"Songimages/milatomarega.jpg",
        lang:"Hindi",
        mode:"workout"
    },
    {
        songName: "Zinda",
        filePath: "Songs/Zinda.mp3",
        coverPath:"Songimages/Zinda.jpg",
        lang:"Hindi",
        mode:"workout"
    },
    {
        songName: "Chak De India",
        filePath: "Songs/Chakde.mp3",
        coverPath:"Songimages/Chakde.jpg",
        lang:"Hindi",
        mode:"workout"
    },
    {
        songName: "Dangal",
        filePath: "Songs/Dangal.mp3",
        coverPath:"Songimages/Dangal.jpg",
        lang:"Hindi",
        mode:"workout"
    },
    {
        songName: "Sultan",
        filePath: "Songs/Sultan.mp3",
        coverPath:"Songimages/Sultan.jpg",
        lang:"Hindi",
        mode:"workout"
    },
    {
        songName: "Aasman Ko Chukar",
        filePath: "Songs/Aasman Ko Chukar.mp3",
        coverPath:"Songimages/Aasman Ko Chukar.jpg",
        lang:"Hindi",
        mode:"workout"
    },
    {
        songName: "At Peace",
        filePath: "Songs/At Peace.mp3",
        coverPath:"Songimages/At Peace.jpg",
        lang:"Hindi",
        singer:"Karan Aujla",
        mode:"workout"
    },
    {
        songName: "For A Reason",
        filePath: "Songs/For A Reason.mp3",
        coverPath:"Songimages/For A Reason.jpg",
        lang:"Hindi",
        singer:"Karan Aujla",
        mode:"workout"
    },
    {
        songName: "Winning Speech",
        filePath: "Songs/Winning Speech.mp3",
        coverPath:"Songimages/Winning Speech.jpg",
        lang:"Hindi",
        singer:"Karan Aujla",
        mode:"workout"
    },
    {
        songName: "52 Bars",
        filePath: "Songs/52 Bars.mp3",
        coverPath:"Songimages/52 Bars.jpg",
        lang:"Hindi",
        singer:"Karan Aujla",
        mode:"workout"
    },
    {
        songName: "Wavy",
        filePath: "Songs/Wavy.mp3",
        coverPath:"Songimages/Wavy.jpg",
        lang:"Hindi",
        singer:"Karan Aujla",
        mode:"workout"
    },
    {
        songName: "Courtside",
        filePath: "Songs/Courtside.mp3",
        coverPath:"Songimages/Courtside.jpg",
        lang:"Hindi",
        singer:"Karan Aujla",
        mode:"workout"
    },
    {
        songName: "Putt Jatt Da",
        filePath: "Songs/Putt Jatt Da.mp3",
        coverPath:"Songimages/Putt Jatt Da.jpg",
        lang:"Hindi",
        singer:"Diljit Dosanjh",
        mode:"workout"
    },
    {
        songName: "G.O.A.T",
        filePath: "Songs/GOAT.mp3",
        coverPath:"Songimages/GOAT.jpg",
        lang:"Hindi",
        singer:"Diljit Dosanjh",
        mode:"workout"
    },
    {
        songName: "Born to Shine",
        filePath: "Songs/Born To Shine.mp3",
        coverPath:"Songimages/Born To Shine.jpg",
        lang:"Hindi",
        singer:"Diljit Dosanjh",
        mode:"workout"
    },
    {
        songName: "Chura Ke Dil Mera",
        filePath: "Songs/Chura Ke Dil Mera.mp3",
        coverPath:"Songimages/Chura Ke Dil Mera.jpg",
        lang:"Hindi",
        singer:"Kumar Sanu",
    },
    {
        songName: "Piya O Re Piya",
        filePath: "Songs/Piya O Re Piya.mp3",
        coverPath:"Songimages/Piya O Re Piya.jpg",
        lang:"Hindi",
        singer:"Shreya Ghoshal",
        mode:"relax"
    },
    {
        songName: "Piyu Bole",
        filePath: "Songs/Piyu Bole.mp3",
        coverPath:"Songimages/Piyu Bole.jpg",
        lang:"Hindi",
        singer:"Shreya Ghoshal",
        mode:"relax"
    },
    {
        songName: "Tere Mast Mast Do Nain",
        filePath: "Songs/Tere Mast Mast Do Nain.mp3",
        coverPath:"Songimages/Tere Mast Mast Do Nain.jpg",
        lang:"Hindi",
        singer:"Shreya Ghoshal",
        mode:"relax"
    },
    {
        songName: "Ve Kamleya",
        filePath: "Songs/Ve Kamleya.mp3",
        coverPath:"Songimages/Ve Kamleya.jpg",
        lang:"Hindi",
        singer:["Shreya Ghoshal","Arijit Singh"],
        mode:"relax"
    },
    {
        songName: "What Jhumka",
        filePath: "Songs/What Jhumka.mp3",
        coverPath:"Songimages/What Jhumka.jpg",
        lang:"Hindi",
        singer:["Jonita Gandhi","Arijit Singh"]
    },
    {
        songName: "Preet Re",
        filePath: "Songs/Preet Re.mp3",
        coverPath:"Songimages/Preet Re.jpg",
        lang:"Hindi",
        singer:["Jonita Gandhi","Darshan Raval"],
        mode:"relax"
    },
    {
        songName: "Asal Mein",
        filePath: "Songs/Asal Mein.mp3",
        coverPath:"Songimages/Asal Mein.jpg",
        lang:"Hindi",
        singer:"Darshan Raval",
        mode:"relax"
    },
    {
        songName: "Tum Tak",
        filePath: "Songs/Tum Tak.mp3",
        coverPath:"Songimages/Tum Tak.jpg",
        lang:"Hindi",
        singer:"A.R. Rahman",
        mode:"relax"
    },
    {
        songName: "O Rangrez",
        filePath: "Songs/O Rangrez.mp3",
        coverPath:"Songimages/O Rangrez.jpg",
        lang:"Hindi",
        singer:"Shreya Ghoshal",
        mode:"relax"
    },
]

let activeFilter = null; 
function hasSinger(song,singerName){
    if(Array.isArray(song.singer)){
        return song.singer.includes(singerName);
    }
    return song.singer===singerName;
}
songitems.forEach((element, i) => {
  const img = element.querySelector("img");
  if (img && songs[i]) {
    console.log(element,i);
    img.src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
  }
});
masterplay.addEventListener('click', () => {
    const currentBtn = document.getElementById(songIndex.toString());
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.src = "icon/pause-solid.png";
        if (currentBtn) {
            currentBtn.src = "icon/pause-solid.png";
        }
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterplay.src = "icon/play-solid.png";
        if (currentBtn) {
            currentBtn.src = "icon/play-solid.png";
        }
        gif.style.opacity = 0;
    }
});
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=((myProgressBar.value * audioElement.duration)/100);
})
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('play')).forEach((element) => {
    element.src = "icon/play-solid.png";
  });
};
Array.from(document.getElementsByClassName('play')).forEach((element) => {
  element.addEventListener('click', (e) => {
    const btn = e.target;
    const index = parseInt(btn.id);    
  if (songIndex === index && !audioElement.paused) {
      audioElement.pause();
      btn.src = "icon/play-solid.png";
      masterplay.src = "icon/play-solid.png";
      gif.style.opacity = 0;
      return;
    }
    makeAllPlays();
    songIndex = index;

    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();

    btn.src = "icon/pause-solid.png";
    masterplay.src = "icon/pause-solid.png";
    gif.style.opacity = 1;

    
    if (typeof masterSongname !== "undefined") {
      masterSongname.innerText = songs[songIndex].songName;
    }
  });
});

function getNextIndex(from){
let next=(from+1)%songs.length;

if(activeFilter===null||activeFilter==="All"){
return next;
}

while(true){

const song=songs[next];

if(singers.some(s=>s.name===activeFilter)&&hasSinger(song,activeFilter)){
return next;
}

if(activeFilter==="Workout"&&song.mode==="workout"){
return next;
}

if(activeFilter==="Relax"&&song.mode==="relax"){
return next;
}

if((activeFilter==="Hindi"||activeFilter==="English")&&song.lang===activeFilter){
return next;
}

next=(next+1)%songs.length;
}
}

function getPrevIndex(from){

let prev=from<=0?songs.length-1:from-1;

if(activeFilter===null||activeFilter==="All"){
return prev;
}

while(true){

const song=songs[prev];

if(singers.some(s=>s.name===activeFilter)&&hasSinger(song,activeFilter)){
return prev;
}

if(activeFilter==="Workout"&&song.mode==="workout"){
return prev;
}

if(activeFilter==="Relax"&&song.mode==="relax"){
return prev;
}

if((activeFilter==="Hindi"||activeFilter==="English")&&song.lang===activeFilter){
return prev;
}

prev=prev<=0?songs.length-1:prev-1;
}
}

document.querySelector('.next').addEventListener('click', () => {
    songIndex = getNextIndex(songIndex);
    masterSongname.innerText = songs[songIndex].songName;
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.src = "icon/pause-solid.png";
    gif.style.opacity = 1;
    makeAllPlays();
    const btn = document.getElementById(songIndex.toString());
    if (btn) btn.src = "icon/pause-solid.png";
});

document.querySelector('.previous').addEventListener('click', () => {
    songIndex = getPrevIndex(songIndex);
    masterSongname.innerText = songs[songIndex].songName;
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.src = "icon/pause-solid.png";
    gif.style.opacity = 1;
    makeAllPlays();
    const btn = document.getElementById(songIndex.toString());
    if (btn) btn.src = "icon/pause-solid.png";
});
audioElement.addEventListener('ended', () => {
    songIndex = getNextIndex(songIndex);
    masterSongname.innerText = songs[songIndex].songName;
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.src = "icon/pause-solid.png";
    gif.style.opacity = 1;
    makeAllPlays();
    const btn = document.getElementById(songIndex.toString());
    if (btn) btn.src = "icon/pause-solid.png";
});


const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();

    songitems.forEach((el, i) => {
        const song = songs[i];
        const songName = el.querySelector('.songName').innerText.toLowerCase();


        let filterMatch;
        if (activeFilter === null || activeFilter === "All") filterMatch = true;
        else if (activeFilter === "Workout") filterMatch = song.mode === "workout";
        else if (activeFilter === "Relax") filterMatch = song.mode === "relax";
        else filterMatch = song.lang === activeFilter;

        const searchMatch = songName.includes(query);

        el.style.display = (filterMatch && searchMatch) ? "flex" : "none";
    });
});


document.querySelectorAll('.btn-glass').forEach(button => {
    button.addEventListener('click', function () {
        const label = this.textContent.trim();


        if (activeFilter === label && label !== "All") {
            activeFilter = null;
            document.querySelectorAll('.btn-glass').forEach(b => b.classList.remove('active'));
            songitems.forEach(el => el.style.display = "flex");
            return;
        }

        activeFilter = label;
        document.querySelectorAll('.btn-glass').forEach(b => b.classList.remove('active'));
        this.classList.add('active');


        songitems.forEach((el, i) => {
            const song = songs[i];
            let matches;
            if (label === "All")         matches = true;
            else if (label === "Workout") matches = song.mode === "workout";
            else if (label === "Relax")   matches = song.mode === "relax";
            else                          matches = song.lang === label;
            el.style.display = matches ? "flex" : "none";
        });


        const firstIndex = songs.findIndex(s => {
            if (label === "All")         return true;
            if (label === "Workout")     return s.mode === "workout";
            if (label === "Relax")       return s.mode === "relax";
            return s.lang === label;
        });
        if (firstIndex !== -1) {
            songIndex = firstIndex;
            masterSongname.innerText = songs[songIndex].songName;
            audioElement.src = songs[songIndex].filePath;
            audioElement.currentTime = 0;
            audioElement.play();
            masterplay.src = "icon/pause-solid.png";
            gif.style.opacity = 1;
            makeAllPlays();
            const btn = document.getElementById(songIndex.toString());
            if (btn) btn.src = "icon/pause-solid.png";
        }
    });
});


if ('mediaSession' in navigator) {
    const updateMediaSession = () => {
        const song = songs[songIndex];
        navigator.mediaSession.metadata = new MediaMetadata({
            title: song.songName,
            artist: 'WAVIFY',
            artwork: [{ src: song.coverPath, sizes: '512x512', type: 'image/jpg' }]
        });

        navigator.mediaSession.setActionHandler('play', () => {
            audioElement.play();
            masterplay.src = "icon/pause-solid.png";
            gif.style.opacity = 1;
        });

        navigator.mediaSession.setActionHandler('pause', () => {
            audioElement.pause();
            masterplay.src = "icon/play-solid.png";
            gif.style.opacity = 0;
        });

        navigator.mediaSession.setActionHandler('nexttrack', () => {
            document.querySelector('.next').click();
        });

        navigator.mediaSession.setActionHandler('previoustrack', () => {
            document.querySelector('.previous').click();
        });
    };

    audioElement.addEventListener('play', updateMediaSession);
}


let wakeLock = null;

const requestWakeLock = async () => {
    if ('wakeLock' in navigator) {
        try {
            wakeLock = await navigator.wakeLock.request('screen');
        } catch (err) {
            console.log('Wake Lock not available:', err);
        }
    }
};

const releaseWakeLock = () => {
    if (wakeLock !== null) {
        wakeLock.release();
        wakeLock = null;
    }
};

audioElement.addEventListener('play', () => {
    requestWakeLock();
});

audioElement.addEventListener('pause', () => {
    releaseWakeLock();
});


document.addEventListener('visibilitychange', async () => {
    if (document.visibilityState === 'visible' && !audioElement.paused) {
        await requestWakeLock();
    }
});


    const singers = [
      { name: "Shreya Ghoshal",   src: "Singers/Shreya Ghosal.jpg", bg: "#2a1a3a" },
      { name: "Jonita Gandhi",    src: "Singers/Jonita Gandhi.jpg", bg: "#12283a" },
      { name: "Sunidhi Chauhan",  src: "Singers/Sunidhi Chauhan.jpg",bg: "#2a103a" },
      { name: "Arijit Singh",     src: "Singers/Arijit Singh.jpg", bg: "#2a1610" },
      { name: "Darshan Raval",     src: "Singers/Darshan Raval.jpg", bg: "#2a1610" },
      { name: "Diljit Dosanjh",      src: "Singers/Diljit Dosanjh.jpg", bg: "#3a1028" },
      { name: "Karan Aujla",  src: "Singers/Karan aujla.jpg",bg: "#2a2010" },
      { name: "Ed Sheeran",       src: "Singers/Edsheeran.jpg", bg: "#102a18" },
      { name: "Kumar Sanu",       src: "Singers/Kumar Sanu.jpg", bg: "#101e2a" },
      { name: "A.R. Rahman",      src: "Singers/A.R. Rahman.jpg",bg: "#0a2028" },

    ];

    const track = document.getElementById('track');

    function getInitials(name) {
      return name.split(' ').slice(0,2).map(w => w[0]).join('').toUpperCase();
    }

    function makeCard(s, idx) {
      const wrap  = document.createElement('div');
      wrap.className = 'card-wrap';

      const inner = document.createElement('div');
      inner.className = 'card-inner';
      inner.style.animationDelay = `${-(idx * 0.42 % 4).toFixed(2)}s`;


      const img = document.createElement('img');
      img.alt = s.name;
      img.loading = 'lazy';
      img.src = s.src;
      img.onerror = function () {
        this.remove();
        const ph = document.createElement('div');
        ph.className = 'card-placeholder';
        ph.style.background = s.bg;
        const init = document.createElement('div');
        init.className = 'ph-initials';
        init.textContent = getInitials(s.name);
        ph.appendChild(init);
        inner.insertBefore(ph, inner.firstChild);
      };


      const shine = document.createElement('div');
      shine.className = 'card-shine';


      const label = document.createElement('div');
      label.className = 'card-label';
      const nameEl = document.createElement('span');
      nameEl.className = 'card-name';
      nameEl.textContent = s.name;
      const genreEl = document.createElement('span');
      genreEl.className = 'card-genre';
      genreEl.textContent = s.genre;
      label.append(nameEl, genreEl);


      const edge = document.createElement('div');
      edge.className = 'card-edge';

      inner.append(img, shine, label, edge);
      wrap.appendChild(inner);
      return wrap;
    }

    singers.forEach((s, i) => track.appendChild(makeCard(s, i)));
    singers.forEach((s, i) => track.appendChild(makeCard(s, i + singers.length)));

    const allCards = document.querySelectorAll('.card-wrap');
allCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        const singerName = singers[index % singers.length].name;
        activeFilter = singerName;

        document.querySelectorAll('.btn-glass')
            .forEach(b => b.classList.remove('active'));

        songitems.forEach((el, i) => {
            if (hasSinger(songs[i], singerName)) {
                el.style.display = "flex";
            } else {
                el.style.display = "none";
            }
        });

        const firstIndex = songs.findIndex(
            song => hasSinger(song, singerName)
        );

        if (firstIndex !== -1){
            songIndex = firstIndex;
            masterSongname.innerText = songs[songIndex].songName;
            audioElement.src = songs[songIndex].filePath;
            audioElement.currentTime = 0;
            audioElement.play();
            masterplay.src = "icon/pause-solid.png";
            gif.style.opacity = 1;
            makeAllPlays();

            const btn = document.getElementById(songIndex.toString());

            if (btn) {
                btn.src = "icon/pause-solid.png";
            }
        }
    });
});