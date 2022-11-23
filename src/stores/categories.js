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
        text: "WordPress Themes",
        link: "#!"
      },
      {
        img: "/img/categories/icons/eCommerce.svg",
        text: "eCommerce Templates",
        link: "#!"
      },
      {
        img: "/img/categories/icons/marketing.svg",
        text: "Marketing Templates",
        link: "#!"
      },
      {
        img: "/img/categories/icons/cms.svg",
        text: "CMS Templates",
        link: "#!"
      },
      {
        img: "/img/categories/icons/site.svg",
        text: "Site Templates",
        link: "#!"
      },
      {
        img: "/img/categories/icons/blogging.svg",
        text: "Blogging",
        link: "#!"
      },
    ],
    profileCat: [
      {
        id: 1,
        text: "Dashboard",
        link: "#!",
      },
      {
        id: 2,
        text: "Orders",
        link: "#!",
      },
      {
        id: 3,
        text: "Address",
        link: "#!",
      },
      {
        id: 4,
        text: "Account details",
        link: "#!",
      },
      {
        text: "Logout",
        link: "home",
      },
    ]
  })
}))