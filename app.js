async function fetchWebPosts() {
  const url = 'https://6321f07afd698dfa29032037.mockapi.io/test/all/webposts';

  try {
    const response = await fetch(url); // Fetch data from the API
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json(); // Parse JSON data
    displayPosts(data); // Process and display the data
  } catch (error) {
    console.error('Error fetching the data:', error); // Handle errors
  }
}

function displayPosts(posts) {
  // Iterate over the posts and display details
  let parent = document.querySelector(".contributions") ;
  let res = "" ;
  posts.forEach(post => {
    let element = `
          <h3 class="h5 text-uppercase mt-4 text-info"><i class="fa-solid fa-image"></i>${post.post_title}</h3>
          <p>Author: ${post.name}</p>
          <p>Roll no:${post.rollno}</p>
              <div class="mb-4 id:${post.id}">
                  <iframe src="${post.url}" title="External Site Preview" style="width:95%; height: 400px; border: 2px solid #444;" loading="lazy"></iframe>
                  
                  <p class="mt-3">Description :
                  ${post.description}
                  </p>
                  
              </div>

    `
    console.log(`Post Title:${post.post_title} `);
    console.log(`Name: ${post.name}`);
    console.log(`URL: ${post.url}`);
    console.log(`Description: ${post.description}`);
    console.log(`Roll Number: ${post.rollno}`);
    console.log(`ID: ${post.id}`);
    console.log('-----------------------------'); // Separator for readability
    res += element ;
  });
  parent.innerHTML = res ;
}

// Call the function
fetchWebPosts();
