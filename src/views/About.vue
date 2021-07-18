<template>
  <div class="about">

    <main>
      <div class="b-example-divider"></div>

      <header class="p-3 bg-dark text-white">
        <div class="container">
          <div
            class="
              d-flex
              flex-wrap
              align-items-center
              justify-content-center justify-content-lg-start
            "
          >
            <a
              href="/"
              class="
                d-flex
                align-items-center
                mb-2 mb-lg-0
                text-white text-decoration-none
              "
            >
              <svg
                class="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlink:href="#bootstrap"></use>
              </svg>
            </a>

            <ul
              class="
                nav
                col-12 col-lg-auto
                me-lg-auto
                mb-2
                justify-content-center
                mb-md-0
              "
            >
              <li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
              <li><a href="#" class="nav-link px-2 text-white">Features</a></li>
              <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
              <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
              <li><a href="#" class="nav-link px-2 text-white">About</a></li>
            </ul>

            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                class="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div class="text-end">
              <button type="button" class="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" class="btn btn-warning">Sign-up</button>
            </div>
          </div>
        </div>
      </header>

      <div class="b-example-divider"></div>

      <header class="py-3 mb-3 border-bottom">
        <div
          class="container-fluid d-grid gap-3 align-items-center"
          style="grid-template-columns: 1fr 2fr"
        >
          <div class="dropdown">
            <a
              href="#"
              class="
                d-flex
                align-items-center
                col-lg-4
                mb-2 mb-lg-0
                link-dark
                text-decoration-none
                dropdown-toggle
              "
              id="dropdownNavLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg class="bi me-2" width="40" height="32">
                <use xlink:href="#bootstrap"></use>
              </svg>
            </a>
            <ul
              class="dropdown-menu text-small shadow"
              aria-labelledby="dropdownNavLink"
              style=""
            >
              <li>
                <a class="dropdown-item active" href="#" aria-current="page"
                  >Overview</a
                >
              </li>
              <li><a class="dropdown-item" href="#">Inventory</a></li>
              <li><a class="dropdown-item" href="#">Customers</a></li>
              <li><a class="dropdown-item" href="#">Products</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Reports</a></li>
              <li><a class="dropdown-item" href="#">Analytics</a></li>
            </ul>
          </div>

          <div class="d-flex align-items-center">
            <form class="w-100 me-3">
              <input
                type="search"
                class="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div class="flex-shrink-0 dropdown">
              <a
                href="#"
                class="d-block link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  class="rounded-circle"
                />
              </a>
              <ul
                class="dropdown-menu text-small shadow"
                aria-labelledby="dropdownUser2"
                style=""
              >
                <li><a class="dropdown-item" href="#">New project...</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div class="container-fluid pb-3">
        <div class="d-grid gap-3" style="grid-template-columns: 1fr 2fr">
          <div class="bg-light border rounded-3">
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          </div>
          <div class="bg-light border rounded-3">
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          </div>
        </div>
      </div>

      <div class="b-example-divider"></div>
    </main>
  </div>
</template>
