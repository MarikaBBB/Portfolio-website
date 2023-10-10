/**
 * Social Media Links Handling
 */
// Array of social media data
const socialMediaLinks = [
    {
        url: "https://www.linkedin.com/in/marika-bert/",
        imgSrc: "./images/Iconlinkedin.png",
        altText: "Link to Marika's LinkedIn profile"
    },
    {
        url: "https://www.instagram.com/marikabert/",
        imgSrc: "./images/Iconinstagram.png",
        altText: "Link to Marika's Instagram profile"
    },
    {
        url: "https://github.com/yourprofile",
        imgSrc: "./images/Icongithub2.png",
        altText: "Link to Marika's GitHub repository"
    },
    {
        url: "https://www.codewars.com/users/MarrrB",
        imgSrc: "./images/IconWars.png",
        altText: "Link to Marika's Codewars profile"
    },
    {
        url: "https://wanderthroughculture.wordpress.com",
        imgSrc: "./images/Iconwordpress.png",
        altText: "Link to Marika's WordPress Blog"
    },
    {
        url: "https://www.goodreads.com/user/show/30598533-marika",
        imgSrc: "./images/Icongoodreads.png",
        altText: "Link to Marika's Goodreads profile"
    }
];


// Get the ul element
const socialMediaList = document.getElementById("socialMedia");

// Loop through the socialMediaLinks array to create the list items
for (const link of socialMediaLinks) {
    const listItem = document.createElement("li");
    const anchor = document.createElement("a");
    const image = document.createElement("img");

    anchor.href = link.url;
    anchor.target = "_blank";
    image.src = link.imgSrc;
    image.alt = link.altText;
    image.className = "icon";

    anchor.appendChild(image);
    listItem.appendChild(anchor);
    socialMediaList.appendChild(listItem);
}
