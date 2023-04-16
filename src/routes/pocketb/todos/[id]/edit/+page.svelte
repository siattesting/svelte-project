<script lang="ts">
	import type { ActionData, PageData } from "./$types";

    export let data: PageData
    $: ({ todo} = data );
    export let form: ActionData

</script>

<section>
    <h2>Edit todo: <small>{todo.id} - {todo.title}</small>  </h2>
    <form  class="box" method="POST" action="?/updateTodo">
        <div class="field">
            <label class="label" for="title">Title</label>
            <div class="control">            
                <input class="input" type="text" name="title" placeholder="Title" value={todo.title} />
            </div>
        </div>
        <div class="field">
            <label class="label" for="content">Content</label>
            <div class="control">
                <textarea class="input" name="content" placeholder="Content" rows="6" value={todo.content} />
            </div>
        </div>
        <div class="field">
            <label class="checkbox">
                <input type="checkbox" name="completed" value={todo.checked} />
                Completed
            </label>
        </div>
        <button class="button is-primary" type="submit">Save</button>
    </form>
    <!-- {#if form?.success}
    <p>Added todo! 🥳</p>
    {/if} -->
    <pre>{JSON.stringify(form, null, 2)}</pre>
</section>