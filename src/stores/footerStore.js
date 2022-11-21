import { defineStore } from "pinia";

export default defineStore("footer", {
  state: () => ({
    footerTitles: [
      {title: "Envato Market"},
      {title: "Help"},
      {title: "Our Community"},
      {title: "Contact"},
    ],
    footerLinks: [
      [
        {text: "Terms", link: "#!"},
        {text: "Licenses", link: "#!"},
        {text: "Market API", link: "#!"},
        {text: "Become an affiliate", link: "#!"},
      ],
      [
        {text: "Themes and Templates", link: "#!"},
        {text: "Authors", link: "#!"},
        {text: "Help Center", link: "#!"},
      ],
      [
        {text: "Community", link: "#!"},
        {text: "Blog", link: "#!"},
        {text: "Forums", link: "#!"},
        {text: "Meetups", link: "#!"},
      ],
      [
        {text: "Sabri Hakuli", link: "#!"},
        {text: "sabrihakuli@outlook.com", link: "#!"},
        {text: "+383 44 201 874", link: "#!"},
      ],
    ]
  })
})
