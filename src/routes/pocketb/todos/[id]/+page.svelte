<script lang="ts">
	import { formatDate } from "$lib/utils";
    import type { PageData } from "./$types";

    export let data: PageData
    $: ({ todo } = data);

</script>
<div class="box">
    <article class="card">
        <header class="header">
            <h2 class="card-header-title">{todo.title}</h2>            
        </header>
        <hr/>        
        <div class="card-content">
            <div class="content">
                <p class="subtitle is-6">{todo.id}</p>                
                <p>{todo.content}</p>
                <small class="date">{formatDate(todo.created) }</small>
                <p class="status">{todo.completed ? "completed" : "pending"}  </p>
            </div>            
        </div>
        <footer class="card-footer">
            <a href="/pocketb/todos/{todo.id}/edit" class="card-footer-item">Edit</a>
            <a href="/" class="card-footer-item">Delete</a>
            <a href="/pocketb/todos/" class="card-footer-item">Back to List</a>
        </footer>
        
    </article>
</div>


<style>
    .date {
        font-weight: bold;
        color: gray;
    }
</style>