<template>
  <article class="accoutn-form">
    <h2>{{ title }}</h2>
    <form action="#!" class="details__form" >
      <template v-if="arr != null">
        <label for="#!" v-for="(item, key) in arr" :key="key">
          <h6>{{ item.label }}</h6>
          <input v-if="item.placeholder" :type="item.input" :placeholder="item.placeholder">
          <input v-else :type="item.input" :placeholder="item.label">
        </label>
      </template>
      <template v-else>
        <label for="#!">
          <h6>{{ label }}</h6>
          <input :type="input" :placeholder="placeholder">
        </label>
      </template>
    </form>
  </article>
</template>

<script>

export default {
  props: ["title", "label", "input", "arr", "placeholder"]
}
</script>