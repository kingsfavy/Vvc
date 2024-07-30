
document.addEventListener('DOMContentLoaded', () => {

    const info = document.getElementById('info');

    const tap = document.getElementById('tap');

    const img = document.getElementById('resume');
    const images = ['resume.jpeg', 'resume-contd.jpeg']; // Add more images if needed
    let currentIndex = 0;

    img.addEventListener('click', () => {
        if (img.classList.contains('full-screen')) {
            img.classList.toggle('flip');
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % images.length;
                img.src = images[currentIndex];
                img.classList.remove('flip');
            }, 500);

info.innerHTML = "Tap the Resume to flip back to the previous page.";

tap.style.display = "none";
        } else {
            img.classList.add('full-screen');

        }
    });

    // Optional: Reset to original state on double-click or other events
    img.addEventListener('dblclick', () => {
        img.classList.remove('full-screen');
        img.src = images[0]; // Reset to the first image
        currentIndex = 0;
    });
});

const year = new Date().getUTCFullYear();

document.getElementById("year").innerHTML = year;



function adjustColorsBasedOnTime() {
          const date = new Date();
          const hours = date.getHours();
          const body = document.body;

          if (hours >= 6 && hours < 18) { // Daytime (6am to 5:59pm)
            body.style.backgroundColor = "white";
            body.style.color = "black";
          } else { // Nighttime (6pm to 5:59am)
            body.style.backgroundColor = "black";
            body.style.color = "white";
          }
        }

        // Call the function when the page loads to adjust colors based on the time of day
        adjustColorsBasedOnTime();


        let timer;
let lastPage = '';

// Function to update the nav text
function updateNavText(page) {
    if (lastPage === page) {
        document.getElementById('nav').textContent = `Last visit was on the ${page} page`;
    } else {
        document.getElementById('nav').textContent = `You are currently on the ${page} page`;
    }
    lastPage = page;
}

// Add event listeners to navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const page = this.textContent;

        const mainNav = document.querySelector('.main-nav');

        // Add the slide-up class to slide up the .main-nav


        // Clear the previous timer if it exists
        if (timer) {
            clearTimeout(timer);
        }

        // Update the nav text immediately
        updateNavText(page);

        mainNav.classList.remove('slide-up');

        // Set a timer to update the nav text after 1 minute
        timer = setTimeout(() => {
            updateNavText(page);
        }, 30000); // 60000 milliseconds = 1 minute
    });
});



function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




function openModal() {

document.getElementById('modal').style.display = 'block';

document.getElementById('res').style.display = 'none';
  document.getElementById('app').classList.add('blur');
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';

document.getElementById('res').style.display = 'block';
  document.getElementById('app').classList.remove('blur');
}


function openCert() {

document.getElementById('modalCert').style.display = 'block';

document.getElementById('cert').style.display = 'none';
  document.getElementById('app').classList.add('blur');
}

function closeCert() {
  document.getElementById('modalCert').style.display = 'none';

document.getElementById('cert').style.display = 'block';
  document.getElementById('app').classList.remove('blur');
}


                // Function to generate HTML for each blog post
function generateBlogPostHTML(post) {
    return `
        <div class="blog-post" id="post-${post.id}">
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <span>${post.date}</span><br><br>
            <button type="button" class="btn" id="btn-${post.id}" onclick="toggleContent(${post.id})">Read more</button><br>
            <div class="full-content" id="content-${post.id}" style="display: none;">
                <p>${post.fullContent}</p>
            </div>
<div style="height:50px;"></div>

        </div>
    `;
}

// Function to toggle the visibility of the additional content
function toggleContent(postId) {

    const contentDiv = document.getElementById(`content-${postId}`);
    const button = document.getElementById(`btn-${postId}`);
    
    if (contentDiv.style.display === 'none') {
        contentDiv.style.display = 'block';
        button.textContent = 'Collapse content';
    } else {
        contentDiv.style.display = 'none';
        button.textContent = 'Collapse content';

        // Revert the button text after 1 second
        setTimeout(() => {
            button.textContent = 'Read more';
        }, 1000);
    }
}

// Function to fetch and render blog posts
function renderBlogPosts() {
    fetch('/api/blog-posts')
        .then(response => response.json())
        .then(posts => {
            const blogPostsContainer = document.getElementById('blogPosts');
            // Clear existing content
            blogPostsContainer.innerHTML = '';
            // Generate HTML for each blog post and append it to the container
            posts.forEach(post => {
                const postHTML = generateBlogPostHTML(post);
                blogPostsContainer.insertAdjacentHTML('beforeend', postHTML);
            });
        })
        .catch(error => console.error('Error fetching blog posts:', error));
}

// Call the renderBlogPosts function when the page loads
window.onload = renderBlogPosts;


          let hideTimeout;

        function hideDiv() {
            const div = document.querySelector('.GT');
            div.classList.add('fade-out');
            
            // Set display to none after animation completes
            setTimeout(function() {
                div.style.display = 'none';
            }, 1000); // Duration of the animation in milliseconds
        }

        // Function to show the div and start the hide timer
        function showDiv() {
            const div = document.querySelector('.GT');
            clearTimeout(hideTimeout); // Clear any previous hide timeout
            
            div.style.display = 'block'; // Make sure the div is visible
            div.classList.remove('fade-out'); // Remove the fade-out class
            div.style.opacity = 1; // Reset the opacity

            // Set the timeout to hide the div again after 31 seconds
            hideTimeout = setTimeout(hideDiv, 31000); // 31,000 milliseconds = 31 seconds
        }

        // Attach event listeners to all elements with the class "show-gt"
        document.querySelectorAll('.show-gt').forEach(function(link) {
            link.addEventListener('click', showDiv);
        });



// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(50 , window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// Create a plane geometry
const geometry = new THREE.PlaneGeometry(2, 2);

// Load the texture
const loader = new THREE.TextureLoader();
loader.load(
  'pic.jpeg', // Adjust path to your image
  function (texture) {
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    // Render the scene
    function animate() {
      requestAnimationFrame(animate);
      plane.rotation.x += 0.01;
      plane.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
  }
);

// Resize handling
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
