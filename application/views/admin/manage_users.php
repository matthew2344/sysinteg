
<main class="">
    <header>
        <h1>Manage Users.</h1>
    </header>
    <section>
        <table class="products-table">
            <caption>All Users (<?=$total_rows?>)</caption>
            <thead>
                <tr>
                    <th></th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Date Joined</th>
                    <th>Date Updated</th>
                    <th>User Type</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach($users as $result):?>
                <tr>
                    <td class="icon-cell">
                        <img src="<?=base_url("assets/img/profile_pic/$result->avatar")?>" alt="">
                    </td>
                    <td><?=$result->fname?> <?=$result->lname?></td>
                    <td><?=$result->email?></td>
                    <td><?=$result->created_at?></td> 
                    <td><?=$result->updated_at?></td> 
                    <td>
                        <span class="product-row__status__details" style="display:grid;grid-template-columns:min-content 1fr;gap:var(--spacer-2)">
                            <small><?=($result->isAdmin == 0)? 'User':'Admin'?></small>
                        </span>
                        <div class="product-row__status__actions flex-grid" style="position:relative;z-index:var(--z-index-above-overlay);gap:var(--spacer-3)">
                            <a href="<?=site_url("admin/view_user/$result->userid")?>"  class="button" type="button" title="View this event">View</a>
                            <a href="<?=site_url("admin/view_user/$result->userid")?>" class="button danger" title="Delete this event">Delete</a>
                        </div>
                    </td>
                </tr>
                <?php endforeach;?>
            </tbody>
        </table>
    </section>
</main>




