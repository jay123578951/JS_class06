<template>
  <div class="home">
      <div id="app">
        <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light mb-5">
          <a class="navbar-brand" href="#" disabled>後台頁面</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  <router-link to="/index">Home</router-link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <router-link to="/admin/products">products</router-link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <router-link to="/admin/coupons">coupons</router-link>
                </a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
      <router-view/>
  </div>
</template>
