<template>
  <header class="site-header">
    <div class="shell header-shell">
      <RouterLink class="brand" to="/" aria-label="Daniel Farnham home">
        Daniel Farnham
      </RouterLink>

      <nav class="header-nav" aria-label="Primary navigation">
        <RouterLink to="/" class="nav-link">Work</RouterLink>
        <RouterLink to="/resume/" class="nav-link">Resume</RouterLink>
        <a
          class="icon-link"
          href="https://www.linkedin.com/in/daniel-farnham-70100b265/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <img src="/docs/assets/linkedin-app-white-icon.svg" alt="" />
        </a>
        <a
          class="icon-link"
          href="https://github.com/DuckMeMz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <img src="/docs/assets/github-mark-white.svg" alt="" />
        </a>
      </nav>
    </div>
  </header>
</template>

