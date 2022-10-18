<script>
  import { onMount } from "svelte";
  import { getUser } from "../api/user";
  import { getComment } from '../api/comment';

  export let postId;
  export let userId;
  let user;
  let comments;
  onMount(async () => {
    user = await getUser(id);
    comments = await getComment(id);
  });
</script>

<a class="text-orange-600" href="/user/{userId}">
  {user ? user.name : ''}
</a>
|
<a href="/post/{postId}/comments">Comments: ({comments ? comments.length : 0}) </a>
