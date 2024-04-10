<script>
  import { onMount } from "svelte";
  import {authStore} from "../stores/authStore";
  import {auth} from "../lib/firebase/firebase.client";
  import "../app.css";
  import Navbar from "../components/navbar.svelte";

  export let currentUser = ''

  onMount(() => {
    const updateUser = auth.onAuthStateChanged((user) => {
        console.log(user);
        authStore.update((curr) => {
            currentUser = user;
            return {...curr, currentUser:user, isLoading:false};
        })
    })
  })
</script>


<Navbar/>
<slot/>