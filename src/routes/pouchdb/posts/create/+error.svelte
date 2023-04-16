<script lang="ts">
    import  { page } from '$app/stores'
</script>
<h1>Big Error</h1>

<p>Something went wrong. But the blast radius has been contained to this route</p>
<div>
    <pre>
        {JSON.stringify($page, null, 2)}
    </pre>
</div>