<script setup>
import { onMounted, ref, computed } from "vue";
import ListPokemon from "../components/ListPokemon.vue";
import CardPokemonSelected from "../components/CardPokemonSelected.vue";

let pokemons = ref([]);
let urlBaseSvg = ref(
  "https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
);
let isLoading = ref(true);
let searchPokemonField = ref("");
let selectedPokemon = ref(null); 

onMounted(() => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
    .then((res) => res.json())
    .then((res) => {
      pokemons.value = res.results;
      isLoading.value = false;
    });
});

const pokemonsFiltered = computed(() => {
  if (pokemons.value && searchPokemonField.value) {
    return pokemons.value.filter((pokemon) => {
      return pokemon.name
        .toLowerCase()
        .includes(searchPokemonField.value.toLowerCase());
    });
  }
  return pokemons.value;
});

const selectPokemon = async (pokemon) => {
  await fetch(pokemon.url)
    .then((res) => res.json())
    .then((res) => (selectedPokemon.value = res))
    .catch(err => alert(err))
};
</script>



<template>
  <main>
    <div class="container p-3">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4">
          <CardPokemonSelected 
          :name="selectedPokemon?.name"
          :xp="selectedPokemon?.base_experience"
          :height="selectedPokemon?.height"
          :img="selectedPokemon?.sprites.other.dream_world.front_default"
          />
        </div>

        <div class="col-sm-12 col-md-6 col-lg-4" v-if="isLoading">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Carregando...</span>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-8">
          <div class="card card-list">
            <div class="card-body row">
              <div class="mb-3">
                <label hidden for="searchPokemon" class="form-label"
                  >Search Pokemon</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="searchPokemon"
                  placeholder="Search..."
                  v-model="searchPokemonField"
                />
              </div>

              <ListPokemon
                @click="selectPokemon(pokemon)"
                v-for="pokemon in pokemonsFiltered"
                :key="pokemon.name"
                :pokemonName="pokemon.name"
                :urlBaseSvg="urlBaseSvg + pokemon.url.split('/')[6] + '.svg'"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  background: rgb(90, 34, 195);
  background: linear-gradient(
    to left,
    rgba(90, 34, 195, 1) 0%,
    rgba(45, 234, 253, 1) 100%
  );

  min-height: 90vh;
}

.card-list {
  overflow-y: scroll;
  max-height: 78vh;
}
</style>