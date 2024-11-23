const spotify = document.getElementById("spotify");
const sessionStatus = document.getElementById("spotify-status");
const song = document.getElementById("spotify-name");
const artists = document.getElementById("spotify-artists");
const albumContainerParent = document.getElementById("spotify-album-container");
const placeholder = document.getElementById("spotify-placeholder");

// Function to display profile information
function displayProfile() {
    sessionStatus.innerHTML = "My Profile";
    song.innerHTML = "Joy Yahshau"; // Replace with your name
    artists.innerHTML = "my playlists!"; // Replace with a brief description or role
    albumContainerParent.style.display = "none"; // Hide album container
    placeholder.style.display = "none"; // Hide placeholder if applicable

    spotify.onclick = () => window.open("https://open.spotify.com/user/31weskjglo64ivodsp2fk3x44myi"); // Replace with your profile URL
}

// Call the function immediately to set up the profile display
displayProfile();
