import { defineStore } from "pinia";

export default defineStore("categories", ({
  state: () => ({
    browseCat: [
      {
        img: "/img/categories/icons/home.svg",
        text: "Home",
        link: "#!"
      },
      {
        img: "/img/categories/icons/wordpress.svg",
        text: "Home",
        link: "#!"
      },
      {
        img: "/img/categories/icons/eCommerce.svg",
        text: "Home",
        link: "#!"
      },
      {
        img: "/img/categories/icons/marketing.svg",
        text: "Home",
        link: "#!"
      },
      {
        img: "/img/categories/icons/cms.svg",
        text: "Home",
        link: "#!"
      },
      {
        img: "/img/categories/icons/site.svg",
        text: "Home",
        link: "#!"
      },
      {
        img: "/img/categories/icons/blogging.svg",
        text: "Home",
        link: "#!"
      },
    ],
    profileCat: []
  })
}))