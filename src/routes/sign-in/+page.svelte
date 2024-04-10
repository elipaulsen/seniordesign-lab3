<script>
  import { authHandler } from "../../stores/authStore";

    let email = '';
    let password = '';

    async function signin() {
        try {
            await authHandler.login(email, password)
            console.log("successfully signed in");
        } catch (err) {
            console.log("trouble loggin in");
        }
    }

    async function register() {
        try {
            await authHandler.signup(email, password)
            console.log("successfully registered");
        } catch (err) {
            console.log("trouble reegistering");
        }
    }
</script>


<h1>Sign in page</h1>

<h1>sign in!</h1>
<form>
  <label for="email">email:</label><br>
  <input type="email" bind:value={email} name="email" required><br>
  <label for="password">Password:</label><br>
  <input type="password" bind:value={password} name="password" required><br>
  <button on:click={signin}>sign in</button>
</form>