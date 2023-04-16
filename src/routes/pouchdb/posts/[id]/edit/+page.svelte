<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData
    $: ({ post} = data );

</script>

<section>
    <h2>Edit post: <small>{post._id} - {post.title}</small>  </h2>
    <form  class="box" method="POST" action="?/updatePost">
        <div class="field">
            <label class="label" for="title">Title</label>
            <div class="control">            
                <input class="input" type="text" name="title" placeholder="Title" value={post.title} />
            </div>
        </div>
        <div class="field">
            <label class="label" for="content">Content</label>
            <div class="control">
                <textarea class="input" name="content" placeholder="Content" rows="6" value={post.content} />
            </div>
        </div>
        <button class="button is-primary" type="submit">Save</button>
    </form>
</section>