<script lang="ts">
	import type { PageData } from "../../../$types";


    export let data: PageData
    console.log(data);
    function formatDate(date: Date) {
        return new Intl.DateTimeFormat('en', { dateStyle: 'full'}).format(date);
    }
    $:({ post } = data)
</script>

<!-- <div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
</div> -->

<hgroup>
    <h1 class="title is-3">{post.title}</h1>
    <small>{formatDate(post.createdAt)}</small>
</hgroup>
<div class="content">
    {@html post.content}
</div>