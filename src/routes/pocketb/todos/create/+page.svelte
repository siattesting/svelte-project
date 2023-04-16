<script lang="ts">
	import { enhance } from '$app/forms';
    import type { ActionData, PageData } from "./$types";

    export let data: PageData
    $: ({ todos } = data)
    export let form: ActionData        
    export let completed = false
</script>
<div class="content box">
    <p>{todos.length}</p>
    <form class="box" method="POST" action="/pocketb/todos?/create">
        <h2 class="title is-3">Create a Todo</h2>
        {#if form?.error}
            <p class="tomato">{form.error}</p>
        {/if}
        
        <div class="field">
            <label class="label" for="title">Title</label>
            <div class="control">
                <!-- <input class="input" type="text" name="title" placeholder="Title" /> -->
                <input class="input" type="text" name="title" placeholder="Title" value={form?.title || ''} />
                {#if form?.missing}
                    <p class="error">This field is required</p>
                {/if}
            </div>
        </div>
        <div class="field">
            <label class="label" for="content">Content</label>
            <div class="control">
                <textarea class="input" name="content" placeholder="Content" rows="10"   />
                {#if form?.missing}
                    <p class="error">This field is required</p>
                {/if}
           </div>
        </div>
        <div class="field">
            <label class="checkbox">
                <input type="checkbox" name="completed" bind:checked={completed}>
                Completed
            </label>
        </div>
        
        <button class="button is-primary" type="submit">Save</button>
    </form>
        {#if form?.success}
        <p>Added todo! 🥳</p>
        {/if}
</div>

<style>
    .error {
        color: tomato;
    }
</style>



