<script>
    // import '../app.postcss'
    import { page } from '$app/stores';
    import '../bulma.css'
</script>

<div class="container">
   
    <!-- <nav>
        <ul>
            <li><strong>Brand</strong></li>
          </ul>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/pouchdb/posts">Pouch Posts</a></li>
            <li><a href="/about">About</a></li>
        </ul>
        <ul>
            <li>
                <a href="/" role="button">Login</a>
            </li>            
        </ul>
    </nav> -->
    <div class="tabs is-centered is-medium">
        <ul>
          <!-- <li class="is-active"><a>Pictures</a></li> -->
          <li class:is-active={$page.url.pathname == '/'}><a href="/">Home</a></li>
          <li class:is-active={$page.url.pathname == '/pouchdb/posts'}><a href="/pouchdb/posts">Posts</a></li>
          <li class:is-active={$page.url.pathname == '/pouchdb/postsfromapi'}><a href="/pouchdb/postsfromapi">Posts from API</a></li>
          <li class:is-active={$page.url.pathname == '/pouchdb/articles'}><a href="/pouchdb/articles">Articles</a></li>
          <li class:is-active={$page.url.pathname == '/pocketb/todos'}><a href="/pocketb/todos">PB Todos</a></li>
          <li class:is-active={$page.url.pathname == '/map'}><a href="/map">Map Todos</a></li>
          <li class:is-active={$page.url.pathname == '/about'}><a href="/about">About</a></li>
        </ul>
    </div>
    <section class="">
        <slot />
    </section>
    
    <footer>Made with Sveltekit</footer>
</div>

<style>
nav ul {
    display: flex;
    padding: 3px;
    margin-left: 4px;
}

footer {
    padding-top: 20px;
    margin: 0 auto;
}
</style>

