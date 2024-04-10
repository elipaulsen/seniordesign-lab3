<script>
  import { authHandler } from "../stores/authStore";

    async function signout() {
        try {
            await authHandler.logout()
        } catch (err) {
            console.log(err);
        }
    }
</script>

<ul>
    <h1><a href="/">Boolean Hooligans</a></h1>
    <li><a href="/">Home</a></li>
    <li><a href="/jack">Jack</a></li>
    <li><a href="/shaun">Shaun</a></li>
    <li><a href="/matt">Matt</a></li>
    <li><a href="/eli">Eli</a></li>
    <li style="float:right"><button on:click={signout}>logout</button></li>
    <li style="float:right"><a class="active" href="sign-in">Sign in</a></li>
</ul>

<style>
.active {
    background-color: #04AA6D;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

h1 {
    text-align: center;
}

h1 a {
    text-decoration: none;
    color: #04AA6D;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}
</style>