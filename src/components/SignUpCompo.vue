<template>
  <div class="signup">
    <form @submit.prevent="handleSignup">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          @input="validateEmail"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          @input="validatePassword"
          required
        />
      </div>
      <p v-if="emailError" class="error">{{ emailError }}</p>
      <p v-if="errorMessages.length > 0" class="error">
        The password is not valid:
        <span v-for="(error, index) in errorMessages" :key="index">
          {{ error }}<br />
        </span>
      </p>
      <button type="submit" :disabled="emailError || errorMessages.length > 0">
        Sign Up
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUpCompo",
  data() {
    return {
      email: "",
      password: "",
      errorMessages: [],
    };
  },
  methods: {
    validateEmail() {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      this.emailError = emailRegex.test(this.email)
        ? ""
        : "Please enter a valid email address.";
    },
    validatePassword() {
      const errors = [];
      if (14 < this.password.length || this.password.length < 8) {
        errors.push(
          "Password should be at least 8 chars and less than 15 chars."
        );
      }
      if (!/[A-Z]/.test(this.password)) {
        errors.push(
          "Password must include at least one uppercase alphabet character."
        );
      }
      if ((this.password.match(/[a-z]/g) || []).length < 2) {
        errors.push(
          "Password must include at least two lowercase alphabet characters."
        );
      }
      if (!/\d/.test(this.password)) {
        errors.push("Password must include at least one numeric value.");
      }
      if (!/^[A-Z]/.test(this.password)) {
        errors.push(
          "Password must start with an uppercase alphabet character."
        );
      }
      if (!/_/.test(this.password)) {
        errors.push("Password must include the character '_'.");
      }

      this.errorMessages = errors;
    },
    handleSignup() {
      alert(
        `Welcome! Your account with email ${this.email} has been created successfully.`
      );
      this.email = "";
      this.password = "";
      this.errorMessages = [];
    },
  },
};
</script>

<style scoped>
.signup {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}
.form-group {
  margin-bottom: 15px;
}
label {
  margin-bottom: 5px;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  padding: 10px;
}
button:hover {
  background-color: #adabab;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>
