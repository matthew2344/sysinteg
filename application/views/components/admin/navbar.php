<nav class="" aria-label="Main" aria-expanded="false">
    <div class="" role="menubar">
        <span class="toggle" role="button" onclick="myFunction()"></span>
    </div>
    <header>
        <a href="<?=site_url("admin")?>">
            <h3>Clean Street Initiatives</h3>
        </a>
    </header>
    <section>
        <a href="<?=site_url("admin")?>">
            <span class="icon icon-shop-window-fill"></span>
            Dashboard
        </a>
        <a href="<?=site_url("admin/manage_events")?>">
            <span class="icon icon-calendar-all-fill"></span>
            Manage Event
        </a>
        <a href="<?=site_url("admin/manage_users")?>">
            <span class="icon icon-people-fill"></span>
            Manage Users
        </a>
    </section>

    <footer>
    <details>
            <summary>
                <img class="user-avatar" src="<?=base_url("assets/img/profile_pic/".$_SESSION['avatar'])?>" alt="Your avatar"><?=$_SESSION['fname']?> <?=$_SESSION['lname']?>
            </summary>
            <div role="menu">
                <a role="menuitem" href="<?=site_url("admin/profile")?>">
                    <span class="icon icon-person-circle-fill"></span>Profile
                </a>
            </div>
    </details>

        <a href="<?=site_url("Welcome")?>" role="menuitem">
            <span class="icon icon-box-arrow-in-right-fill"></span>
            Logout
        </a>

    </footer>
</nav>
