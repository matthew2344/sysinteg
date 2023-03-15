<main class="">
    <?php unset($_SESSION['back'])?>
    <header class="hero">
        <div class="hero-actions">
            <div class="combobox input" style="width:0;flex-grow:1"><span class="icon icon-solid-search" style="color:var(--primary)"></span><input type="search" placeholder="Search event" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-controls=":R1l:" value=""><div hidden=""><datalist id=":R1l:"></datalist></div></div>
            <div role="nav" class="col-12" id="thisNav">
                <div class="nested-menu">
                    <button id="myButton" hidden aria-controls=":r53:" aria-expanded="false" aria-haspopup="menu" aria-label="Categories"><span class="icon icon-filter"></span></button>
                    <div role="menubar" aria-busy="false" id="mymenu">
                        <div><a href="/" class="pill button" role="menuitem" aria-current="true">All</a></div>
                        <div class="popover" id="popover">
                            <div>
                                <a href="" id="menuitem" role="menuitem" aria-current="false" aria-haspopup="true" aria-expanded="false" aria-controls=":R161:" class="pill button">Event Type</a>
                                <div id=":R161:" hidden>
                                    <div class="dropdown" style="transform: translateX(min(1241.48px - 100% - var(--spacer-4), -1 * var(--spacer-1))); max-width: calc(1428px - 2 * var(--spacer-4));"
                                    >
                                    <div style="background-color:var(--green)" role="menu" aria-label="event_categories">
                                        <a href="" role="menuitem">Cleaning Event</a>
                                        <a href="" role="menuitem">Awareness Event</a>
                                        <img src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619ac5d26e052734fe2982be_raised-hands.svg">
                                    </div>
    
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="popover" id="popover2">
                            <div>
                                <a href="" id="menuitem2" role="menuitem" aria-current="false" aria-haspopup="true" aria-expanded="false" aria-controls=":R161:" class="pill button">Sort By</a>
                                <div id="my2" hidden>
                                    <div class="dropdown" style="transform: translateX(min(1241.48px - 100% - var(--spacer-4), -1 * var(--spacer-1))); max-width: calc(1428px - 2 * var(--spacer-4));"
                                    >
                                    <div style="background-color:var(--yellow-dark)" role="menu" aria-label="event_categories">
                                        <a href="" role="menuitem">Most Joined</a>
                                        <a href="" role="menuitem">Least Joined</a>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjI0IiBoZWlnaHQ9IjE2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTkwLjgwNyAxMjEuMjMzLTUuMzQ2LTYuNzE1VjExMC44YTE1LjE2IDE1LjE2IDAgMCAwIDUuOTAzLTUuNDE2IDE1LjA5NyAxNS4wOTcgMCAwIDAgMi4zMTEtNy42NjEgMTUuMTAzIDE1LjEwMyAwIDAgMC0yLjEyLTguMDggMTUuMTU0IDE1LjE1NCAwIDAgMC02LjA5NC01LjcyOVYzNi40NDlhMTUuMTEgMTUuMTEgMCAwIDAtMy4xOC05LjI4IDE1LjE3NiAxNS4xNzYgMCAwIDAtOC4yMTQtNS4zODZ2LTIuMDM4YzAtLjEyMi0uMDI2LS4yNzMtLjA0MS0uNDA0YTcuNzg3IDcuNzg3IDAgMCAwLS4wNC0uMzAzYy0uMDE2LS4xLS4wNDEtLjMwMi0uMDY2LS40NDktLjAyNS0uMTQ2IDAtLjE2Ni0uMDQxLS4yNDdhMjIuOTMgMjIuOTMgMCAwIDAtLjA5Ni0uNTA1YzAtLjA3LS4wMzUtLjE0LS4wNS0uMjE2LS4wNDEtLjE2Ny0uMDc2LS4zMzMtLjEyMi0uNTA1bC0uMDYtLjIxMmMtLjA0Ni0uMTYxLS4wOTEtLjMyOC0uMTQ3LS41MDQtLjA1Ni0uMTc3LS4wNTYtLjE2Ny0uMDgxLS4yNDdsLS4xNTItLjQ0LS4xMjEtLjMwMmMtLjA1MS0uMTIxLS4wOTYtLjI0Ny0uMTUyLS4zNjgtLjA1NS0uMTIyLS4xMTEtLjI0OC0uMTY3LS4zNjktLjA1NS0uMTItLjA4Ni0uMTkxLS4xMzEtLjI4Mi0uMDQ2LS4wOTEtLjE0Mi0uMjg4LS4yMTgtLjQzbC0uMTE2LS4yMTZhOC4wMSA4LjAxIDAgMCAwLS4yNTgtLjQ1bC0uMTA2LS4xOC0uMjgzLS40NDVjLS4wNDEtLjA1NS0uMDc2LS4xMTYtLjExNy0uMTc2bC0uMjkzLS40MDktLjE0Ny0uMTk3LS4yODMtLjM2M2E0LjE3NCA0LjE3NCAwIDAgMS0uMTg3LS4yMzJsLS4yNzMtLjMwOGMtLjA3Ni0uMDktLjE1Ny0uMTc2LS4yMzgtLjI2N2wtLjI1My0uMjYyLS4yODgtLjI4OC0uMTIxLS4xMjEtLjEyNy0uMTE2LS4zMDgtLjI3OC0uMjYzLS4yMjctLjI5OS0uMjQyLS4yOTgtLjIzMmMtLjA5MS0uMDctLjE4Mi0uMTQxLS4yNzgtLjIwN2wtLjMzNC0uMjM3LS4yNTgtLjE3MS0uMzY5LS4yMzgtLjI1My0uMTQ2LS4zOS0uMjI3LS4yNTgtLjEzMWE3LjI3NSA3LjI3NSAwIDAgMC0uMzk0LS4yMDJjLS4xMzItLjA2LS4xOTItLjA5LS4yODgtLjEzNmE3LjAxOSA3LjAxOSAwIDAgMC0uMzc1LS4xNjdsLS4zMzgtLjE0LS4zMzktLjEzMi0uMzktLjEzNi0uMzAzLS4xMDEtLjQyNS0uMTI2LS4yNzgtLjA4MS0uNDQtLjEwNi0uMjc4LS4wNjYtLjQzNS0uMDgtLjMwNC0uMDU2LS40MDQtLjA2LS4zNDktLjA0LS4zNzUtLjAzNmMtLjEyNiAwLS4yNTgtLjAyNS0uMzg0LS4wMy0uMTI3LS4wMDUtLjIzMyAwLS4zNDkgMEg0NC43MDJhMTUuMTkyIDE1LjE5MiAwIDAgMC0xMC43MjkgNC40MzMgMTUuMTE3IDE1LjExNyAwIDAgMC00LjQ0NCAxMC43MDJ2ODUuNTI2YzAgMy4wMDkuOSA1Ljk0OSAyLjU4NCA4LjQ0NWExNS4xNiAxNS4xNiAwIDAgMCA2Ljg2OSA1LjU3di4wNTZjMCA0LjAxNCAxLjU5OSA3Ljg2NCA0LjQ0NCAxMC43MDJhMTUuMTkgMTUuMTkgMCAwIDAgMTAuNzI5IDQuNDMzaDYyLjc2YTE1LjEyNiAxNS4xMjYgMCAwIDAgMy44NSA3LjM3MiAxNS4yMDggMTUuMjA4IDAgMCAwIDE2LjA1NSAzLjg2OCAxNS4xNzMgMTUuMTczIDAgMCAwIDcuMTU0LTUuMjY2bDEuNjEzLTIuMTc1IDcuODc1IDEwLjM0M2ExNS4xNzggMTUuMTc4IDAgMCAwIDEyLjA4MiA1Ljk4OGMzLjMxNCAwIDYuNTM2LTEuMDgzIDkuMTc1LTMuMDgybDEzLjM3Ny0xMC4xMzFhMTUuMTAzIDE1LjEwMyAwIDAgMCA1Ljg4Mi0xMC4xNjYgMTUuMDg5IDE1LjA4OSAwIDAgMC0zLjE3MS0xMS4yODZaIiBmaWxsPSIjMjNBMDk0IiBzdHJva2U9IiMwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjxwYXRoIGQ9Ik0xNzAuMjg4IDEwMC41ODN2MTguNjM3bC0uMzI5LjI1Ny0xMS41NDYtMTQuNTFhLjEyNy4xMjcgMCAwIDEtLjAyNi0uMDU1LjE0LjE0IDAgMCAxIC4wMDEtLjA2MS4xMi4xMiAwIDAgMSAuMDgxLS4wODZsMTEuNzc5LTQuMjk4LjA0LjExNlptMC02NC4wNDJ2NTYuODI0bC0uMjMzLjU1LTExLjI4OC00LjczMy4xMjYtLjMwMlYzNi41NGgxMS4zOTVabS0yNC43NDEgNzguMDQxIDQuNTIxIDUuOTQzLS4yNzMuMjA3aC04Ljk5Mmw0LjU1Mi02LjEzNWEuMTI3LjEyNyAwIDAgMSAuMDQ0LS4wMzYuMTMzLjEzMyAwIDAgMSAuMTQ4LjAyMVptLTE3LjA5LTcuOTU5IDEuNzkgMTQuMTAxLS4wNy4wMUg1NC4xNTV2LTE0LjA3MWg3My45NzhsLjMyNC0uMDRaIiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTEyOC4xMzIgMTA2LjY2Mkg0NC43MDFWMjEuMTM3aDExNC4xOTJ2NjcuNzQxTTQ1LjAwNSAzNi41NDFoMTEzLjc3N20tMTQuNTk1LS4wMDFWMjEuOTkiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0ibTE0NC4xODcgMzYuNTQgNy4xMTYtNy40NTcgNy41OTEtNy45NDZtLTI4LjcxNyA5OS41OTZINTQuMTU1VjEwNi40MW05NS42NCAxNC4zMjRoLTguOTkybTI5LjQ4NS0yMC4xNTJ2MTguNjM3IiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Im0xNDQuMTg3IDIxLjk5IDcuMTE2IDcuMDk0IDcuNDggNy40NTdoMTEuNTA2djU2LjgyM001Mi45IDI5LjgwNmMuNjU0IDAgMS4xODQtLjUyOCAxLjE4NC0xLjE4IDAtLjY1Mi0uNTMtMS4xOC0xLjE4NC0xLjE4LS42NTMgMC0xLjE4My41MjgtMS4xODMgMS4xOCAwIC42NTIuNTMgMS4xOCAxLjE4MyAxLjE4Wm03LjkzNiAwYTEuMTggMS4xOCAwIDEgMCAwLTIuMzZjLS42NTQgMC0xLjE4NC41MjgtMS4xODQgMS4xOCAwIC42NTIuNTMgMS4xOCAxLjE4NCAxLjE4Wm03LjkzNSAwYy42NTQgMCAxLjE4NC0uNTI4IDEuMTg0LTEuMTggMC0uNjUyLS41My0xLjE4LTEuMTg0LTEuMTgtLjY1MyAwLTEuMTgzLjUyOC0xLjE4MyAxLjE4IDAgLjY1Mi41MyAxLjE4IDEuMTgzIDEuMThabTY3Ljc2MyA1MC4wNTEgMjIuMjUzIDkuMzI0IDExLjI4OSA0LjczMiA4LjQ0NiAzLjUzMi04LjI1NCAzLjAyNy0xMS43NzkgNC4yOThhLjEyNS4xMjUgMCAwIDAtLjA4Mi4xNDcuMTQuMTQgMCAwIDAgLjAyNi4wNTVsMTEuNTQ3IDE0LjUxIDguOTYyIDExLjI2MS0xMy4zOTggMTAuMTI2LTE1LjQ3Ni0yMC4zNDMtNC41MjItNS45NDNhLjEyMi4xMjIgMCAwIDAtLjA0NS0uMDM2LjEyLjEyIDAgMCAwLS4wNTYtLjAxNHYwYS4xMjIuMTIyIDAgMCAwLS4wNTYuMDE0LjEyMi4xMjIgMCAwIDAtLjA0NS4wMzZsLTQuNTUyIDYuMTM1LTkuMDAyIDEyLjEwOS0xLjUxOC0xMi4xMDktMS43OS0xNC4xMjYtMi4yNzEtMTcuOTM2IiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Im0xMjYuMTg2IDg4LjY4Ny0xLjc2LTEzLjkwNCAxMi4xMDggNS4wNzVjNy45OTYtOS4yMzIgNS44NDYtMTYuNTc4LS45MDYtMTkuNTQ1LTguMzE0LTMuNjQ3LTE5LjYyMyAyLjk4Ny0xOS42MjMgMi45ODdzMi45OTQtMjEuNTYzLTIzLjYxNC0xNC45MjljLTI0Ljk2NSA2LjIyNi0zNS40NDQgMjQuNjU2LTI5LjkzMiAzNC41MDQgNy45ODEgMTQuMjY4IDMwLjYgMS42NiAzMC42IDEuNjYtMi40NjkgMTUuNjggMTkuMjk0IDEyLjgzIDMzLjEyNyA0LjE1MloiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+">
                                    </div>
    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="backdrop" id="myBackdrop" hidden>
                        <span class="icon icon-solid-x close" id="exitBackdrop" role="button" aria-label="Close Menu"></span>
                        <div id="myCategories" role="menu" aria-label="Categories" >
                            <a href="" id="myAll" role="menuitem">All</a>
                            <a onclick="function2()" role="menuitem" id="backItem" style="justify-content: normal; gap: var(--spacer-2);" hidden>
                                <span class="icon icon-outline-cheveron-left"></span> Back
                            </a>
                            <a role="menuitem" aria-haspopup="menu" id="yuEvent" onclick="function1()">Event Type</a>
                            <a href="" role="menuitem" id="cleanEvent" hidden>Cleaning Event</a>
                            <a href="" role="menuitem" id="awareEvent" hidden>Awareness Event</a>
                            <img id="myImg" hidden src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619ac5d26e052734fe2982be_raised-hands.svg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <section>
        <div class="product-card-grid">
            <?php foreach($events as $result):?>
            <article class="product-card">
                <a href="<?=site_url("user/event_page/$result->eventID")?>" class="stretched-link">
                    <div class="carousel">
                        <img src="<?=base_url("assets/img/uploads/$result->poster")?>">
                    </div>
                </a>
                <header>
                    <h3 itemprop="name"><?=$result->title;?></h3><a href="" class="user" rel="noreferrer" style="position: relative;"><img class="user-avatar" src="<?=base_url("assets/img/profile_pic/$result->avatar")?>" alt=""><?=$result->fname?> <?=$result->lname?></a>
                </header>
                <section>
                    
                </section>
                <footer>
                    <div class="">
                        <div class="my-2">
                            <span class="icon icon-people-fill"></span>
                            <?=$result->count?> Joining
                        </div>
                    </div>
                    <div class="">
                        <div class="my-2">
                            <p>Location: <?=$result->location?></p>
                        </div>
                    </div>
                </footer>
            </article>
            <?php endforeach; ?>



        </div>
        
        <div class="with-pagination mt-5">
                <div role="navigation">
                    <menu>
                        <li><a href="" class="button"> < </a></li>
                        <li><a href="" class="button primary">1</a></li>
                        <li><a href="" class="button">2</a></li>
                        <li><a href="" class="button">3</a></li>
                        <li><a href="" class="button"> > </a></li>
                    </menu>
                </div>
            </div>
    </section>
</main>

<script defer>
    const popover = document.getElementById("popover");
    const popover2 = document.getElementById("popover2");
    const menuitem = document.getElementById("menuitem");
    const menuitem2 = document.getElementById("menuitem2");
    const myItem = document.getElementById(":R161:");
    const my2 = document.getElementById("my2");
    const myMenu = document.getElementById("mymenu");
    const myButton = document.getElementById("myButton");
    const thisNav = document.getElementById("thisNav");
    const myBackdrop = document.getElementById("myBackdrop");
    const exitBackdrop = document.getElementById("exitBackdrop");
    const myCategories = document.getElementById("myCategories");
    const yuEvent = document.getElementById("yuEvent");
    const cleanEvent = document.getElementById("cleanEvent");
    const awareEvent = document.getElementById("awareEvent");
    const myImg = document.getElementById("myImg");
    const backItem = document.getElementById("backItem");
    const myAll = document.getElementById("myAll");


    function function1()
    {
        myCategories.style.backgroundColor = "var(--green)";
        yuEvent.setAttribute("hidden", "");
        myAll.setAttribute("hidden", "");
        cleanEvent.removeAttribute("hidden");
        awareEvent.removeAttribute("hidden");
        myImg.removeAttribute("hidden");
        backItem.removeAttribute("hidden");
    };

    function function2()
    {
        myCategories.style.backgroundColor = "white";
        yuEvent.removeAttribute("hidden");
        myAll.removeAttribute("hidden");
        cleanEvent.setAttribute("hidden", "");
        awareEvent.setAttribute("hidden", "");
        backItem.setAttribute("hidden", "");
        myImg.setAttribute("hidden", "");
    };

    myButton.addEventListener('click', () => {
        myBackdrop.removeAttribute("hidden");
    });

    exitBackdrop.addEventListener('click', () => {
        myBackdrop.setAttribute("hidden", "");
    });
    
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

    popover2.addEventListener('mouseover', (event) => {
        popover2.classList.add("expanded");
        menuitem2.setAttribute("aria-current", "true");
        menuitem2.setAttribute("aria-expanded", "true");
        my2.removeAttribute("hidden");
    });


    popover2.addEventListener('mouseout', (event) => {
        popover2.classList.remove("expanded");
        menuitem2.setAttribute("aria-current", "false");
        menuitem2.setAttribute("aria-expanded", "false");
        my2.setAttribute("hidden", "");
    });

    if (window.innerWidth < 1024) {
        myMenu.setAttribute("hidden", "");
        myButton.removeAttribute("hidden");
        thisNav.classList.remove("col-12");
    }

    if (window.innerWidth > 1024) {
        myMenu.removeAttribute("hidden");
        myButton.setAttribute("hidden", "");
        thisNav.classList.add("col-12");
    }

    window.addEventListener('resize', function() {
        if (window.innerWidth < 1024) {
            myMenu.setAttribute("hidden", "");
            myButton.removeAttribute("hidden");
            thisNav.classList.remove("col-12");
        }

        if (window.innerWidth > 1024) {
            myMenu.removeAttribute("hidden");
            myButton.setAttribute("hidden", "");
            thisNav.classList.add("col-12");
        }
    });
</script>

