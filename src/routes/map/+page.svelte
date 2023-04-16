<script lang="ts">
	import { enhance } from "$app/forms";
	import { fly, slide,  } from "svelte/transition";
	import type { ActionData, PageData } from "./$types";

    export let data: PageData;
    export let form: ActionData; 

</script>

<div class="centered">
    <h1>Todos from Map</h1>
    {#if form?.error}
    <p class="error">{form.error}</p>
    {/if}
    <form method="POST" action="?/create" use:enhance>
        <label for="decription">
            <input type="text" name="description" autocomplete="off" value={form?.description ?? ''}>
        </label>
    </form>
    <div>
        <ul>
            {#each data.todos as todo (todo.id) }
                <!-- <li>{todo.description}</li> -->
            <li in:fly={{ y:20 }} out:slide>
                <form method="POST" action="?/delete" use:enhance >
                    <input type="hidden" name="id" value={todo.id} />
                    <span>{todo.description}</span>
                    <button class="button" aria-label="Mark as complete" />
                </form>
            </li>
            {/each}
        </ul>
    </div>
   
</div>

<style>
    .centered {
        min-width: 20em;
        margin: 0 auto;
    }
    label {
        width: 100%;
    }
    input,
    span {
        flex: 1;
    }

    button {
        border: none;
        cursor: pointer;
        height: 100%;
        aspect-ratio: 1;
        opacity: 0.5;
        transition: opacity 0.2s;
    }

    button:hover {
        opacity: 1;
    }
    .error {
        color: tomato;
    }
</style>