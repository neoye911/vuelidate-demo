<template>
	<form>
		<label>Name:
			<input v-model="$v.name.$model">
			<div v-if="$v.name.$error" class="validation-errors">
				<small v-if="!$v.name.required">Field is required.</small>
				<small v-if="!$v.name.min">Too short.</small>
			</div>
		</label>

		<label>Email:
			<input v-model="$v.email.$model">
			<div v-if="$v.email.$error" class="validation-errors">
				<small v-if="!$v.email.required">Field is required.</small>
				<small v-if="!$v.email.email">Must be an email.</small>
			</div>
		</label>

		<pre>{{ $v }}</pre>
	</form>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  data: () => ({
    name: "",
    email: ""
  }),

  validations: {
    name: { required, min: minLength(3) },
    email: { required, email }
  }
};
</script>
