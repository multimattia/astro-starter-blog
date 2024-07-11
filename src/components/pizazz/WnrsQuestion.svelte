<script>
  import { onMount, onDestroy } from "svelte";
  import { fade, blur } from "svelte/transition";
  export let level;
  let isDarkMode = false;
  let question = "loading...";
  let loading = true;
  const endpoint = `${window.location.origin}/api/wnrs/rand-${level}.json`;

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
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        question = await response.json();
        question = question.question;
        loading = false;
      } else {
        console.error(`Error: ${response.status}`);
      }
    } catch (e) {
      console.error(e);
    }

    return () => {
      observer.disconnect();
    };
  });

  async function add() {
    const res = await fetch(`${endpoint}`, {
      method: "GET",
    });
    try {
      if (res.ok) {
        question = await res.json();
        question = question.question;
      }
    } catch (e) {
      console.error(`Error: ${res.status}`);
      console.error(`Error: ${e}`);
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
            class="questionIcon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
            />
          </svg>
        </button>
        <span class="likeCounter" transition:blur>
          {#key question}
            <p in:fade>{question}</p>
          {/key}
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

  .questionIcon {
    width: 30px;
    height: 30px;
    color: var(--color-light-a);
  }

  .dark .questionIcon {
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
