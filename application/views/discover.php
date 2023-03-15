<main class="">
    <header class="hero">
        <div class="hero-actions">
            <a class="logo" href="/"><div class="logo-full">&nbsp;</div></a>
            <div class="separator"></div>
            <div class="combobox input" style="width:0;flex-grow:1"><span class="icon icon-solid-search" style="color:var(--primary)"></span><input type="search" placeholder="Search products" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-controls=":R1l:" value=""><div hidden=""><datalist id=":R1l:"></datalist></div></div>
        </div>
        <div role="nav">
            <div class="nested-menu">
                <div role="menubar" aria-busy="false">
                    <div><a href="/" class="pill button" role="menuitem" aria-current="true">All</a></div>
                    <div class="popover" id="popover">
                        <div>
                            <a href="" id="menuitem" role="menuitem" aria-current="false" aria-haspopup="true" aria-expanded="false" aria-controls=":R161:" class="pill button">Event Type</a>
                            <div id=":R161:" hidden>
                                <div class="dropdown" style="transform: translateX(min(1241.48px - 100% - var(--spacer-4), -1 * var(--spacer-1))); max-width: calc(1428px - 2 * var(--spacer-4));"
                                >
                                <div style="background-color:var(--green)" role="menu" aria-label="3D">
                                    <a href="" role="menuitem">Cleaning Event</a>
                                    <a href="" role="menuitem">Awareness Event</a>
                                    <img src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619ac5d26e052734fe2982be_raised-hands.svg">
                                </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</main>

<script defer>
    const popover = document.getElementById("popover");
    const menuitem = document.getElementById("menuitem");
    const myItem = document.getElementById(":R161:");
    
    popover.addEventListener('mouseover', (event) => {
        popover.classList.add("expanded");
        menuitem.setAttribute("aria-current", "true");
        menuitem.setAttribute("aria-expanded", "true");
        myItem.removeAttribute("hidden");
    });

    popover.addEventListener('mouseout', (event) => {
        popover.classList.remove("expanded");
        menuitem.setAttribute("aria-current", "false");
        menuitem.setAttribute("aria-expanded", "false");
        myItem.setAttribute("hidden", "");
    });

</script>
