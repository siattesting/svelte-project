    
    <form class="box" method="POST" action="/pouchdb/posts?/create">
        <h2 class="title is-3">Create a Post</h2>
        <div class="field">
            <label class="label" for="title">Title</label>
            <div class="control">
                <input class="input" type="text" name="title" placeholder="Title" required />
            </div>
        </div>
        <div class="field">
            <label class="label" for="content">Content</label>
            <div class="control">
                <textarea class="input" name="content" placeholder="Content" rows="10" />
           </div>
        </div>
        
        <button class="button is-primary" type="submit">Save</button>
    </form>



