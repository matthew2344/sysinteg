<nav class="" aria-label="Main" aria-expanded="false">
    <div class="" role="menubar">
        <span class="toggle" role="button" onclick="myFunction()"></span>
    </div>
    <header>
        <a href="<?=site_url("user")?>">
            <h3>Clean Street Initiatives</h3>
        </a>
    </header>
    <section>
        <a href="<?=site_url("user")?>" <?php if(isset($dashboard)) echo 'aria-current="page"'?> >
            <span class="icon icon-shop-window-fill" style=""></span>
            Dashboard
        </a>
        <a href="<?=site_url("user/create_event")?>" <?php if(isset($create_event)) echo 'aria-current="page"'?>>
            <span class="icon icon-calendar-all-fill"></span>
            Create Event
        </a>
        <a href="<?=site_url("user/join_event")?>" <?php if(isset($join_event)) echo 'aria-current="page"'?>>
            <span class="icon icon-solid-search"></span>
            Discover
        </a>
    </section>

    <footer>
    <details>
            <summary>
                <img class="user-avatar" src="<?=base_url("assets/img/profile_pic/".$_SESSION['avatar'])?>" alt="Your avatar"><?=$_SESSION['fname']?> <?=$_SESSION['lname']?>
            </summary>
            <div role="menu">
                <a role="menuitem" href="<?=site_url("user/profile")?>">
                    <span class="icon icon-person-circle-fill"></span>Profile
                </a>
                <a role="menuitem" href="<?=site_url("user/my_events")?>">
                    <span class="icon icon-calendar-all-fill"></span>My Events
                </a>
                <a role="menuitem" href="<?=site_url("user/joined_events")?>">
                    <span class="icon icon-calendar-all-fill"></span>Joined Events
                </a>
            </div>
    </details>

        <a href="<?=site_url("Logout")?>" role="menuitem">
            <span class="icon icon-box-arrow-in-right-fill"></span>
            Logout
        </a>
    </footer>
</nav>
