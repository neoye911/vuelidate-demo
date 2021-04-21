<template>
	<form @submit.prevent="onSubmit">

		<label>Name (validate on change):
			<input v-model.lazy="$v.name.$model">
			<div v-if="$v.name.$error" class="validation-errors">
				<small v-if="!$v.name.required">Field is required.</small>
				<small v-if="!$v.name.min">Must be at least {{ $v.name.$params.min.min }} characters.</small>
			</div>
		</label>

		<label>Email (validate on blur):
			<!-- NOTE: Uses normal vue data, not $v.[key].$model -->
			<input v-model="email" @blur="$v.email.$touch()">
			<div v-if="$v.email.$error" class="validation-errors">
				<small v-if="!$v.email.required">Field is required.</small>
				<small v-if="!$v.email.email">Must be a valid email.</small>
			</div>
		</label>

		<label>Age (validate on submit):
			<input v-model.number="age" type="number">
			<div v-if="$v.age.$error" class="validation-errors">
				<small v-if="!$v.age.required">Field is required.</small>
				<small v-if="!$v.age.between">Must be between {{ $v.age.$params.between.min }} and {{ $v.age.$params.between.max }}.</small>
			</div>
		</label>

		<button type="submit">Submit</button>
	</form>
</template>

<script>
import { required, minLength, email, between } from "vuelidate/lib/validators";

export default {
  data: () => ({
    name: "",
    email: "",
    age: null
  }),

  methods: {
    onSubmit() {
      this.$v.$touch();
    }
  },

  validations: {
    name: { required, min: minLength(3) },
    email: { required, email },
    age: { required, between: between(0, 130) }
  }
};
</script>
