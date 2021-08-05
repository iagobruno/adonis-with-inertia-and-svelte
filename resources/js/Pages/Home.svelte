<script>
  import { Link } from '@inertiajs/inertia-svelte'

  console.log('Hello dev!')

  let count = 1

  function handleClick() {
    count++
  }
</script>

<main>
  <div>
    <h1 class="title"> It Works! </h1>
    <p class="subtitle">
      Congratulations, you have just created your first AdonisJS app.
    </p>

    <button on:click={handleClick}>Click me</button>
    <span>Count: {count}</span>

    <br>
    <br>
    <ul>
      <li>
        The route for this page is defined inside <code>start/routes.ts</code> file
      </li>

      <li>
        You can update this page by editing <code>resources/views/welcome.edge</code> file
      </li>

      <li>
        If you run into problems, you can reach us on <a href="https://discord.gg/vDcEjq6?">Discord</a> or the <a href="https://forum.adonisjs.com/">Forum</a>.
      </li>
    </ul>
    <br/>

    <p>Go to <Link href="/about">about page</Link>.</p>
  </div>
</main>
