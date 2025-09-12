<script lang="ts">
  import { page } from '$app/state';
  import { onMount } from 'svelte';
  import { AlertType, showAlert } from '$lib/stores/alert';

  let showSuccess = false;

  onMount(() => {
    const query = page.url.searchParams;
    if (query.get('sent') === 'true') {
      showSuccess = true;
      
      showAlert(
        'Message Sent',
        "Thanks for reaching out. We'll be in touch soon.",
        AlertType.Success
      );
    }
  });
</script>

<section class="flex flex-col md:flex-row md:items-center md:justify-center w-full max-w-6xl px-4 py-4 gap-8">
  
  <div class="relative md:w-85 md:h-[75vh] rounded-lg p-6 text-center shadow-lg border border-yellow-800">
    <div class="md:pt-8 pb-4">
      <p class="text-2xl md:text-3xl font-extrabold text-yellow-500 tracking-tight bg-muted border-yellow-500 border-2" style="transform: rotate(3deg)">
          Brought To You By
      </p>
    </div>
    <div class="md:absolute md:inset-0 flex flex-col justify-center space-y-2 text-lg">
      <p>Created by: <span class="font-semibold">Lucas Falslev</span></p>
      <p>Graphic Design: <span class="font-semibold">Hired Designer</span></p>
      <div class="flex justify-center items-start leading-none">
        <p class="mr-2">Photography:</p>
        <div class="flex flex-col">
          <span class="font-semibold">Photographer One</span>
          <span class="font-semibold">Photographer Two</span>
        </div>
      </div>
      <p>Special Thanks: <span class="font-semibold">Zim's Cafe</span></p>
      <p>Web Development: <span class="font-semibold">Lucas Falslev</span></p>
      <p>
        Cover Photo:
        <a class="text-blue-500 font-semibold" href="https://unsplash.com/@pablomerchanm" target="_blank" rel="noopener noreferrer">
          Pablo Merchán Montes
        </a>
      </p>
    </div>
  </div>

  <div class="md:w-[50%] bg-accent rounded-lg p-3 md:p-8 shadow-lg">
    <h2 class="text-2xl font-bold text-yellow-500">Contact Us</h2>
    <p class="text-xl font-thin mb-4 underline decoration-yellow-500">info@loganburgerweek.com</p>
    
    <form action="https://api.web3forms.com/submit" method="POST" class="space-y-4">
        <input type="hidden" name="access_key" value="d19afb13-21a8-4789-8218-cde9da04b3cb">
        <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
        <input type="hidden" name="redirect" value="https://loganburgerweek.com/contact?sent=true">

        <div>
          <label for="name" class="block mb-1 font-semibold">Name</label>
          <input id="name" type="text" name="name" required class="w-full border rounded p-2" />
        </div>

        <div>
          <label for="email" class="block mb-1 font-semibold">Email</label>
          <input id="email" type="email" name="email" required class="w-full border rounded p-2" />
        </div>

        <div>
          <label for="message" class="block mb-1 font-semibold">Message</label>
          <textarea id="message" name="message" rows="5" required class="w-full border rounded p-2"></textarea>
        </div>
        
        <button type="submit" class="ml-auto block bg-yellow-500 text-black font-bold py-2 px-4 rounded hover:bg-yellow-600 cursor-pointer">
          Send Message
        </button>
    </form>
  </div>
</section>
