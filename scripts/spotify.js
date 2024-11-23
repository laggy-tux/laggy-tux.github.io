const spotify = document.getElementById("spotify");
const sessionStatus = document.getElementById("spotify-status");
const song = document.getElementById("spotify-name");
const artists = document.getElementById("spotify-artists");
const albumContainerParent = document.getElementById("spotify-album-container");
const placeholder = document.getElementById("spotify-placeholder");

// Add an image container to the page
const profileImageContainer = document.createElement("img");
profileImageContainer.id = "profile-image";
profileImageContainer.style.width = "150px"; // Adjust size as needed
profileImageContainer.style.height = "150px";
profileImageContainer.style.borderRadius = "50%"; // Makes the image circular
profileImageContainer.style.display = "block"; // Ensure it's visible
profileImageContainer.style.margin = "20px auto"; // Center the image
document.body.insertBefore(profileImageContainer, albumContainerParent); // Place it before the album container

// Function to display profile information
function displayProfile() {
    sessionStatus.innerHTML = "My Profile";
    song.innerHTML = "Joy Yahshua"; // Replace with your name
    artists.innerHTML = "  My playlists!"; // Replace with a brief description or role
    albumContainerParent.style.display = "none"; // Hide album container
    placeholder.style.display = "none"; // Hide placeholder if applicable

    // Set the profile image source
    profileImageContainer.src = "https://preview.redd.it/ccg4meb5oyq91.jpg?auto=webp&s=1101dbdedd9fc05beca1341aa0675731070b8378"; // Replace with the URL of your image
    profileImageContainer.alt = "Your Profile Picture"; // Alt text for accessibility

    spotify.onclick = () => window.open("https://open.spotify.com/user/31weskjglo64ivodsp2fk3x44myi"); // Replace with your profile URL
}

// Call the function immediately to set up the profile display
displayProfile();
