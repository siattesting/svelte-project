<script lang="ts">
	import { page } from '$app/stores';
    import type { LayoutData } from './$types';
    export let data: LayoutData;
</script>
<svelte:head>
    <title>{$page.data.post?.title}</title>
</svelte:head>
<div class="posts">
    <aside>
        <h2 class="title is-3">Posts</h2>
        <nav>
            <ul>
                {#each data.summaries as post}
                <li><a href="/pouchdb/posts/{post._id}">{post.title}</a></li>
                {/each}
            </ul>
        </nav>
    </aside>
    <main>
        <slot />
    </main>
</div>



<style>
    .posts {
        display: grid;
        gap: 2rem;
        grid-template-columns: 200px 60ch;
        margin-top: 2rem;
    }
</style>