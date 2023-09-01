<template>
  <div class="card" :class="'animate__flipInY'">
    <img v-if="pokemon.name" :src="img" class="card-img-top" alt="..." />
    <img v-else src="../assets/egg.png" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title text-center">{{ name }}</h5>
      <hr>
      <div class="row mb-4">
        <section class="col">
            <strong>XP:</strong>
            <span>{{ xp }}</span>
        </section>
        <section class="col">
            <strong>Altura:</strong>
            <span>{{ height }}m</span>
        </section>
      </div>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script setup>
const pokemon = defineProps(['name', 'xp', 'height', 'img'])
</script>

<style scoped>
.card {
    min-height: 78vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card img {
    width: 300px;
}
</style>