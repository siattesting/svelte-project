<!-- <script lang="ts">
    //client side implementation
    async function getPosts() {
        const response = await fetch('../../api/pouchdbposts/')
        const posts = await response.json()
        return posts
    }
</script> -->


<!-- <section>
    <h2>Posts from API</h2>
    <p>Client-side implementation
    {#await getPosts()}
    <p>Loading...</p>        
    {:then posts } 
    {#each posts as post }
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <small>{post._id}</small>
    {/each}
    {:catch error}
    <p>{error.message}</p>        
    {/await}
</section> -->

<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData
    // use a reactive declaratio to avoid using data.post below
    $: ({ posts } = data)

</script>

<section>
    <h2 class="title is-3">Posts</h2>
    <p>Showing {posts.length}</p>    
        <ul>
            {#each posts as post }
            <li><a href="/pouchdb/postsfromapi/{post._id}">{post.title}</a></li>
            {/each}
        </ul>
</section>