import { defineStore } from "pinia";

export default defineStore("callout", {
  state: () => ({
    calloutItems: [
      {
        img: "/img/categories/icons/shield.svg",
        title: "Security Assurance",
        text: "Our theme architecture is designed for maximize security and prevent malware, Dos Attack other. ",
      },
      {
        img: "/img/categories/icons/help-circle.svg",
        title: "Best Customer Support",
        text: "Need help? We're here for you! Do not worry we provide in depth answer.",
      },
      {
        img: "/img/categories/icons/check-circle.svg",
        title: "Great Quality Theme",
        text: "We will be responsible for delivering the best online user experience, which makes my role extremely important.",
      },
    ]
  })
})