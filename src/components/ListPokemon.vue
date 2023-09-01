<template>
  <div class="col-lg-3 col-md-6">
    <div class="card mb-3 p-2 cardListPokemon">
      <p>{{ pokemonName }}</p>
      <img v-bind:src="urlBaseSvg" class="card-img-top" alt="..." height="90" />
    </div>
  </div>
</template>

<script setup>
const pokemon = defineProps(["pokemonName", "urlBaseSvg"]);
</script>

<style scoped>
.cardListPokemon {
  background: rgb(90, 34, 195);
  background: radial-gradient(
    circle,
    rgba(90, 34, 195, 1) 0%,
    rgba(45, 234, 253, 1) 100%
  );
}

</style>