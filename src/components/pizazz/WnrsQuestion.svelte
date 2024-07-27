<script>
  import { onMount, onDestroy } from "svelte";
  import { fade, blur } from "svelte/transition";
  export let level;
  let isDarkMode = false;
  let question = "loading...";
  let loading = true;
  let background;
  const endpoint = `${window.location.origin}/api/wnrs/rand-${level}.json`;

  if (level === 1) {
    background = "PERCEPTION";
  } else if (level === 2) {
    background = "CONNECTION";
  } else if (level === 3) {
    background = "REFLECTION";
  } else {
    background = "error";
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
        <div class="card" data-background={background}>
          <div class="desc">
            <h3>{background}</h3>
          </div>
          <div class="question" transition:blur>
            {#key question}
              <p in:fade>{question}</p>
            {/key}
          </div>
          <div class="controls">
            <button on:click={add}>
              <!-- <svg
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
              </svg> -->
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  {:else}
    <div class="loadingBox"></div>
  {/if}
</div>

<style>
  .card {
    display: flex;
    flex-direction: column;
    font-size: 1.1rem;
    padding: 2rem 4rem;
    min-width: 100%;
    min-height: 30rem;
    height: 30rem;
    background-color: #c10115;
    border-radius: 2rem;
    overflow: hidden;
  }
  .desc h3 {
    color: rgba(255, 70, 100, 0.85);
    font-family: var(--gabarito);
    font-weight: 800;
    font-size: 2rem;
  }
  .controls {
    height: 4rem;
    align-self: flex-end;
  }

  .loadingBox {
    height: 40px;
  }

  .question {
    margin-left: 0.3ch;
    margin-right: 10px;
    color: white;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .question p {
    text-align: center;
    margin: auto;
    vertical-align: middle;
    min-height: 10rem;
    font-family: var(--gabarito);
    font-weight: 800;
    font-size: clamp(1rem, 3vh, 5rem);
    line-height: 1.2;
    max-height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }

  button {
    display: flex;
    align-items: center;
    border-radius: 5px;
    border: none;
    font-family: var(--gabarito);
    font-size: 2.2rem;
    color: white;
    background-color: transparent;
  }

  button:hover {
    background-color: #ffb6bd;
    transition: background-color 0.2s var(--improved-ease);
  }

  .dark button:hover {
    background-color: var(--color-night-a-highlight);
  }

  button:active {
    transform: translateY(3px);
    transition: transform 0.17s var(--improved-ease);
  }
</style>
