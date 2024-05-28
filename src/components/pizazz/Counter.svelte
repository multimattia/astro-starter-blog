<script>
  import { onMount, onDestroy } from "svelte";
  import { fade, blur } from "svelte/transition";
  export let blogTitle;
  let isDarkMode = false;
  let count = "loading...";
  let loading = true;
  // const endpoint = `http://localhost:8787/blog/${slugify(blogTitle)}`;
  const endpoint = `https://blog-api.matthewhongkong20.workers.dev/blog/${slugify(
    blogTitle,
  )}`;

  function slugify(str) {
    return String(str)
      .normalize("NFKD") // split accented characters into their base characters and diacritical marks
      .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
      .replace(/\s+/g, "-") // replace spaces with hyphens
      .replace(/-+/g, "-"); // remove consecutive hyphens
  }

  onMount(async () => {
    isDarkMode = window.localStorage.getItem("theme") === "dark";
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          isDarkMode = document.documentElement.classList.contains("dark");
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    const response = await fetch(endpoint);
    if (response.ok) {
      count = await response.json();
      count = parseInt(count);
      loading = false;
    } else {
      console.error(`Error: ${response.status}`);
    }

    return () => {
      observer.disconnect();
    };
  });

  async function add() {
    const res = await fetch(`${endpoint}/1`, {
      method: "POST",
    });
    if (res.ok) {
      count += 1;
    }
  }
</script>

<div>
  {#if !loading}
    <div class={isDarkMode ? "dark" : ""} transition:fade>
      <div class="counter">
        <button on:click={add}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.8"
            stroke="currentColor"
            class="likeIcon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
        <span class="likeCounter" transition:blur>
          {count}
        </span>
        <span class="likeCounter"></span>
      </div>
    </div>
  {:else}
    <div class="loadingBox"></div>
  {/if}
</div>

<style>
  .loadingBox {
    height: 40px;
  }

  .counter {
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 8ch;
    border-radius: 7px;
  }

  .likeIcon {
    width: 30px;
    height: 30px;
    color: var(--color-light-a);
  }

  .dark .likeIcon {
    color: var(--color-night-a);
  }

  .likeCounter {
    margin-left: 0.3ch;
    margin-right: 10px;
    font-size: 1.1rem;
    color: var(--color-light-deemp);
  }

  .dark .likeCounter {
    color: var(--color-night-deemp);
  }

  button {
    display: flex;
    align-items: center;
    height: 40px;
    width: 40px;
    border: none;
    border-radius: 5px;
    background-color: var(--color-light-bg);
  }

  .dark button {
    background-color: var(--color-night-bg);
  }

  button:hover {
    background-color: var(--color-light-a-highlight);
    transition: background-color 0.2s var(--improved-ease);
  }

  .dark button:hover {
    background-color: var(--color-night-a-highlight);
  }

  button:active {
    transform: translateY(3px);
    transition: transform 0.17s ease-out;
  }
</style>
