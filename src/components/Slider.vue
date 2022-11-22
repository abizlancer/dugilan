<template >
  <article class="slider">
    <ul class="slider__list">
      <li class="slider--item">
        <img src="/img/slider/slide1.png" alt="slide">
      </li>
      <li class="slider--item">
        <img src="/img/slider/slide1.png" alt="slide">
      </li>
      <li class="slider--item">
        <img src="/img/slider/slide1.png" alt="slide">
      </li>
      <li class="slider--item">
        <img src="/img/slider/slide1.png" alt="slide">
      </li>
    </ul>
    <div class="slider__dots">
      <span class="active"></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </article>
</template>

<script>
export default {
  name: "Slider",
}
</script>