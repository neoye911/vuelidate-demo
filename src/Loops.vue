<template>
  <form @submit.prevent="$v.$touch()">
    <fieldset>
      <legend>Name 3 heroes:</legend>

      <label v-for="(hero, index) in heroes" :key="hero.id">{{ index + 1 }}:
        <input v-model="hero.name">

        <div v-if="$v.heroes.$each[index].name.$error" class="validation-errors">
          <small v-if="!$v.heroes.$each[index].name.required">Field is required.</small>
          <small v-if="!$v.heroes.$each[index].name.min">Must be at least {{ $v.heroes.$each[index].name.$params.min.min }} characters.</small>
        </div>
      </label>
    </fieldset>

    <button>Submit</button>

  </form>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

const heroes = new Array(3).fill(0).map((el, id) => ({
  id,
  name: ""
}));

export default {
  data: () => ({
    heroes
  }),

  validations: {
    heroes: {
      $each: {
        name: {
          required,
          min: minLength(3)
        }
      }
    }
  }
};
</script>

<style lang="scss">
fieldset > div {
  margin-bottom: 30px;
}
</style>
