<script>
    export let name = '';

    let comments = [];
    let text = '';

    function postComment() {
        if (text && !/^\s*$/.test(text)) {
            comments = [...comments, {
                text: text,
                timestamp: new Date().toDateString(),
                author: 'anonymous'
            }];
            text = '';
        }
    }

    function handleEnter(event) {
        if (event.key === "Enter") {
            postComment();
        }
    }
</script>


<p>Leave a comment for {name}</p>
<input type="text" bind:value={text} on:keydown={handleEnter}>
<button on:click={postComment}>post</button>

{#each comments as comment}
    <div class="comment">
        <h3>{comment.text}</h3>
        <p>{comment.author} {comment.timestamp}</p>
    </div>
{/each}

<style>
    .comment {
        margin-top: 10px;
        border-style: solid;
        width: max-content;
    }
</style>

