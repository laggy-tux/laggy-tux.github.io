const interval = 30_000;

const spotify = document.getElementById("spotify");

const sessionStatus = document.getElementById("spotify-status");
const song = document.getElementById("spotify-name");
const artists = document.getElementById("spotify-artists");
const albumContainerParent = document.getElementById("spotify-album-container");
const placeholder = document.getElementById("spotify-placeholder");
const albumContainers = [
    document.getElementById("spotify-album1"),
    document.getElementById("spotify-album2")
];
let activeAlbumContainerIndex = 0;
let currentURI;

registerFetchInterval((data) => {
    if (data) {
        if (data.playing != undefined) {
            if (data.playing) {
                sessionStatus.innerHTML = "PLAYING";
            } else {
                sessionStatus.innerHTML = "PAUSED";
            }
        } else {
            sessionStatus.innerHTML = "LAST PLAYED";
        }

        song.innerHTML = data.name;
        artists.innerHTML = data.artists.join(', ');

        if (currentURI != data.album) {
            currentURI = data.album;

            for (let index = 0; index < albumContainers.length; index++) {
                if (index == activeAlbumContainerIndex) {
                    albumContainers[index].src = currentURI;
                    albumContainers[index].style.opacity = 1;
                } else {
                    albumContainers[index].style.opacity = 0;
                }
            }

            activeAlbumContainerIndex = (activeAlbumContainerIndex + 1) % albumContainers.length;
        }

        spotify.onclick = () => window.open(data.uri);

        albumContainerParent.style.display = "unset"
        placeholder.style.display = "none"
    }
})

async function registerFetchInterval(success, fail) {
    const task = async () => {
        try {
            let response = await fetch("https://personal-api-wrapper.vercel.app/api/v1/spotify/currently-playing");

            if (response.status != 200) {
                response = await fetch("https://personal-api-wrapper.vercel.app/api/v1/spotify/last-played");

                if (response.status != 200) {
                    fail();
                } else {
                    success(await response.json());
                }
            } else {
                success(await response.json());
            }
        } catch (err) {
            console.error(err);

            fail();
        }
    };

    setInterval(task, interval);
    task();
}
