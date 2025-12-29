const users = [
  {
    username: "rahul_k",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    profession: "Web Developer",
    description: "Passionate about creating modern web apps and UI designs."
  },
  {
    username: "anjali_s",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "Graphic Designer",
    description: "Loves crafting creative visuals and brand identities."
  },
  {
    username: "vikram_07",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    profession: "Photographer",
    description: "Captures real-life emotions through the lens."
  },
  {
    username: "maria_works",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profession: "Content Writer",
    description: "Writes engaging stories, blogs and social media content."
  },
  {
    username: "devraj_coder",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    profession: "Software Engineer",
    description: "Builds scalable backend systems and APIs."
  },
  {
    username: "sana_art",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    profession: "Illustrator",
    description: "Creates beautiful digital illustrations and artworks."
  },
  {
    username: "rohan_fitness",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    profession: "Fitness Coach",
    description: "Helps people achieve fitness goals with proper guidance."
  },
  {
    username: "mehak_b",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    profession: "Makeup Artist",
    description: "Enhances natural beauty through makeup skills."
  }
];

var sum = ""

users.forEach(function(elem){
    sum = sum + ` <div class="card">
        <img src="${elem.image}"alt="">
        <h3>${elem.username}</h3>
        <h4>${elem.profession}</h4>
        <p>${elem.description} </p>
    </div> `
})

var main = document.querySelector('main')

main.innerHTML = sum