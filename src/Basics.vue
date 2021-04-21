<template>
  <form>
    <p>{{ $v.$invalid ? "Uh oh. This form is invalid 😢" : "Yay! This form is valid 😁" }}</p>

    <div>
      <label>Name:
        <input v-model="$v.name.$model">
      </label>
    </div>

    <div>
      <label>Email:
        <input v-model="$v.email.$model">
      </label>
    </div>

    <div>
      <label>Password:
        <input v-model="$v.password.$model">
      </label>
    </div>

    <div>
      <label>Repeat Password:
        <input v-model="$v.repeat.$model">
      </label>
    </div>

    <fieldset>
      <legend>Address:</legend>
      <div>
        <label>Street:
          <input v-model="$v.address.street.$model">
        </label>
      </div>

      <div>
        <label>State:
          <input v-model="$v.address.state.$model">
        </label>
      </div>

      <div>
        <label>ZIP:
          <input v-model="$v.address.zip.$model">
        </label>
      </div>
    </fieldset>

    <label>Favorite Food (no hotdogs!):
      <input v-model="$v.food.$model">
    </label>


    <div>$v object:</div>
    <pre>{{ $v }}</pre>
  </form>
</template>

<script>
// Built in Validators: https://monterail.github.io/vuelidate/#sub-builtin-validators
import {
  required,
  alpha,
  email,
  minLength,
  maxLength,
  sameAs,
  integer,
  between
} from "vuelidate/lib/validators";

export default {
  data: () => ({
    name: "Neo",
    email: "neo.ye@asknice.ly",
    password: "pass123",
    repeat: "pass123",
    address: {
      street: "80 greys street",
      state: "Auckland",
      zip: "1024"
    },
    food: "pizza",
    forbidden: "hotdog"
  }),

  validations: {
    name: { required, alpha },
    email: { required, email },
    password: {
      required,
      min: minLength(6),
      max: maxLength(10)
    },
    repeat: { matches: sameAs("password") },
    address: {
      // Nested validators
      street: { required },
      state: { required },
      zip: {
        required,
        between: between(1000, 9999)
      }
    },
    food: {
      required,
      // custom validator
      notHotdog(input) {
        return input.trim().toLowerCase() !== this.forbidden;
      }
    }
  }
};
</script>
