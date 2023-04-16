<script>
	import { fly, slide } from 'svelte/transition';
	/**
	 * @type {{ posts: string | any[]; summaries: any; }}
	 */
	export let data;
</script>
<div>
    <a href="/pouchdb/posts/create" class="button is-primary is-medium">Create Post</a>
	{#if data.summaries.length === 0}
		<p>No items to display</p>
	{:else}
		<div>
			{#each data.summaries as post (post.id)}
				<div in:fly={{ y: 20 }} out:slide>					
						<a href="/pouchdb/posts/{post.id}">{post.id} - {post.title}</a>					
				</div>
				<pre>{JSON.stringify(post, null, 2)}</pre>
			{/each}
            </div>
	{/if}
</div>