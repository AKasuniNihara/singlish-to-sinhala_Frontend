<template>
  <div id="app" class="m-1">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand ml-1" href="#">Singlish to Sinhala</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" exact-active-class="active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard" exact-active-class="active">DashBoard</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/translation-review" exact-active-class="active">Translation Review</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about" exact-active-class="active">About</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
/* Custom styles for navbar */
.navbar {
  border-bottom: 2px solid #e3e3e3;
}

.navbar-brand {
  font-weight: bold;
  font-size: 1.5rem;
}

.nav-link {
  font-size: 1.1rem;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #ffdd57;
}

.nav-item.active .nav-link {
  color: #ffdd57;
}

.navbar-toggler {
  border: none;
}

.navbar-toggler-icon {
  background-image: url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"%3E%3Cpath stroke="rgba(255, 255, 255, 0.8)" stroke-width="2" d="M5 7h20M5 15h20M5 23h20" /%3E%3C/svg%3E');
}
</style>
