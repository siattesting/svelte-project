<script lang="ts">
	
    import type { PageData } from './$types';
    
    export let data: PageData;

  </script>
  <article>
    <h1>{data.post.title}</h1>
    <div>{@html data.post.content}</div>
    <div>
      <pre>{JSON.stringify(data.post, null, 2)}</pre>
    </div>
    <div>
      <button><a href="/pouchdb/posts/{data.post._id}/edit">Edit</a></button>
    </div>
  </article>
  