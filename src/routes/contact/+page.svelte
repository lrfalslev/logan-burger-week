<script lang="ts">
    const WEB3FORMS_URL = "https://api.web3forms.com/submit";
    const ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

    let tilt = (Math.random() * 4 - 2).toFixed(2);
</script>

<section class="flex flex-col md:flex-row w-full max-w-6xl mx-auto px-4 py-12 gap-8 items-center">
  
  <div class="relative flex flex-col w-full md:basis-2/5 md:h-[75vh] rounded-lg p-6 text-center shadow-lg border border-yellow-500">
    <div class="md:py-8 pb-4">
      <h2 class="text-2xl md:text-3xl font-extrabold text-yellow-500 tracking-tight" style="transform: rotate(3deg)">
        Brought To You By
      </h2>
      <div class="h-1 w-24 bg-yellow-500 mx-auto rounded-full"></div>
    </div>

    <div class="md:absolute md:inset-0 flex-1 flex flex-col justify-center space-y-2 text-lg">
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
        Cover Photo by:
        <a class="text-blue-500 font-semibold" href="https://unsplash.com/@pablomerchanm" target="_blank" rel="noopener noreferrer">
          Pablo Merchán Montes
        </a>
      </p>
    </div>
  </div>

  <div class="w-full md:flex-1 bg-muted rounded-lg p-8 shadow-lg">
    <h2 class="text-2xl font-bold text-yellow-500">Contact Us</h2>
    <p class="text-xl font-thin mb-4">info@loganburgerweek.com</p>
    <form action={WEB3FORMS_URL} method="POST" class="space-y-4">
      <input type="hidden" name="access_key" value={ACCESS_KEY} />

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
