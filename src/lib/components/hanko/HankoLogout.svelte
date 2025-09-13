<script lang="ts">
    import { Hanko } from "@teamhanko/hanko-elements";
    import { goto } from "$app/navigation";
    import { env } from "$env/dynamic/public";
    const hankoApi = env.PUBLIC_HANKO_API_URL;
  
    const hanko = new Hanko(hankoApi);
    const logout = () => {
      hanko.logout().catch((error) => {
        //Handle Error
      });
      goto("/")//Path to redirect the user to
    };
</script>
  
<button onclick={logout}>Logout</button>