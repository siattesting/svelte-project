<script lang="ts">
	import type { PageData } from "./$types";

  function formatDate(date: Date) {
    const newDate = new Date(date) // make sure the date field to be formatted is in a date format
        return new Intl.DateTimeFormat('en', { dateStyle: 'full'}).format(newDate);
    }

    export let data: PageData
    $: ({ todos } = data)

</script>

<article>
    <h1 class="title is-3">Pocketbase section</h1>
    <hr />
    <div class="box">
      <button type="button" class="button is-primary">
        <a href="/pocketb/todos/create" class="button is-primary">New todo</a>
      </button>
    </div>
    
    <div class="<container todos-grid">
        {#each todos as todo }        
        <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                {todo.title}
              </p>             
            </header>
            <div class="card-content">
              <div class="content">
                <p>{todo.content}</p>
                <p class="status">{todo.completed ? "completed" : "pending"}  </p>                
                <br>
                  <small class="date">{formatDate((todo.created))}</small>
              </div>
            </div>
            <footer class="card-footer">
              <!-- <a href="/" class="card-footer-item">Save</a> -->
              <a href="/pocketb/todos/{todo.id}" class="card-footer-item">View</a>
              <a href="/pocketb/todos/{todo.id}" class="card-footer-item">Edit</a>
              <a href="/" class="card-footer-item">Delete</a>
            </footer>
          </div>            
        {/each}
    </div>
  </article>

<style>
  .todos-grid {
    display: grid;
    gap: 30px 30px;
    grid-template-columns: auto auto;
    margin: auto;
  }
  .date {
    font-weight: bold;
    color: gray;
  }
</style>