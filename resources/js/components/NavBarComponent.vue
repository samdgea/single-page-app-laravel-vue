<template>
    <nav id="header" class="fixed w-full z-10 top-0 bg-white border-b border-gray-400" @click="toggleDropdown">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
            <div class="pl-4 flex items-center">
                <svg class="h-5 pr-3 fill-current text-purple-500" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path
                        d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm14 12h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2zM5 9l2-2 2 2 4-4 2 2-6 6-4-4z" />
                </svg>
                <router-link to="/"
                    class="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl" href="#">
                    Abdilah Sammi
                </router-link>
            </div>
            <div class="block lg:hidden pr-4">
                <button id="nav-toggle"
                    class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-purple-500 appearance-none focus:outline-none">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div class="w-full flex-grow lg:flex  lg:content-center lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 z-20"
                id="nav-content">
                <div class="flex-1 w-full mx-auto max-w-sm content-center py-4 lg:py-0">
                    <div class="relative pull-right pl-4 pr-4 md:pr-0">
                        <input type="search" placeholder="Search"
                            class="w-full bg-gray-100 text-sm text-gray-800 transition border focus:outline-none focus:border-purple-500 rounded py-1 px-2 pl-10 appearance-none leading-normal">
                        <div class="absolute search-icon" style="top: 0.375rem;left: 1.75rem;">
                            <svg class="fill-current pointer-events-none text-gray-800 w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path
                                    d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
                <ul class="list-reset lg:flex justify-end items-center">
                    <li class="mr-3 py-2 lg:py-0">
                        <router-link to="/" class="inline-block py-2 px-4 text-gray-900 font-bold no-underline"
                            href="#">
                            Home
                        </router-link>
                    </li>
                    <li class="mr-3 py-2 lg:py-0">
                        <router-link to="/about"
                            class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:underline py-2 px-4"
                            href="#">
                            About
                        </router-link>
                    </li>
                    <!-- <li class="mr-3 py-2 lg:py-0">
                        <router-link to="/blog"
                            class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:underline py-2 px-4"
                            href="#">
                            Blog
                        </router-link>
                    </li> -->
                    <li class="mr-3 py-2 lg:py-0 bg-yellow-500 ">
                        <a class="inline-block text-white no-underline hover:text-yellow-700 py-2 px-4"
                            href="//www.buymeacoffee.com/ZCRlJrXz5" target="_blank">
                            ☕ Buy Me a Coffee!
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        methods: {
            toggleDropdown(events) {
                /*Toggle dropdown list*/
                /*https://gist.github.com/slavapas/593e8e50cf4cc16ac972afcbad4f70c8*/

                var navMenuDiv = document.getElementById("nav-content");
                var navMenu = document.getElementById("nav-toggle");

                var helpMenuDiv = document.getElementById("menu-content");
                var helpMenu = document.getElementById("menu-toggle");

                document.onclick = check;

                function check(e) {
                    var target = (e && e.target) || (event && event.srcElement);


                    //Nav Menu
                    if (!checkParent(target, navMenuDiv)) {
                        // click NOT on the menu
                        if (checkParent(target, navMenu)) {
                            // click on the link
                            if (navMenuDiv.classList.contains("hidden")) {
                                navMenuDiv.classList.remove("hidden");
                            } else {
                                navMenuDiv.classList.add("hidden");
                            }
                        } else {
                            // click both outside link and outside menu, hide menu
                            navMenuDiv.classList.add("hidden");
                        }
                    }

                    //Help Menu
                    if (!checkParent(target, helpMenuDiv)) {
                        // click NOT on the menu
                        if (checkParent(target, helpMenu)) {
                            // click on the link
                            if (helpMenuDiv.classList.contains("hidden")) {
                                helpMenuDiv.classList.remove("hidden");
                            } else {
                                helpMenuDiv.classList.add("hidden");
                            }
                        } else {
                            // click both outside link and outside menu, hide menu
                            helpMenuDiv.classList.add("hidden");
                        }
                    }
                }

                function checkParent(t, elm) {
                    while (t.parentNode) {
                        if (t == elm) {
                            return true;
                        }
                        t = t.parentNode;
                    }
                    return false;
                }
            }
        }
    }

</script>
