
<main class="">
    <header>
        <h1>Manage Events.</h1>
    </header>
    <section>
        <?php if($events) :?>
        <table class="products-table">
            <caption>All Events (<?=$total_rows?>)</caption>
            <thead>
                <tr>
                    <th></th>
                    <th>Event Name</th>
                    <th>Event Location</th>
                    <th>Event Date</th>
                    <th>Time of Event</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach($events as $result):?>
                <tr>
                    <td class="icon-cell"><img src="<?=base_url("assets/img/uploads/$result->poster")?>" alt=""></td>
                    <td><?=$result->title?></td>
                    <td><?=$result->location?></td>
                    <td><?=$result->date_event?></td>
                    <td><?=$result->start_time?>-<?=$result->end_time?></td>
                    <td>
                        <span class="product-row__status__details" style="display:grid;grid-template-columns:min-content 1fr;gap:var(--spacer-2)">
                            <span class="icon <?=($result->event_status == 0)? "icon-circle": "icon-circle-fill" ?>"></span>
                            <small><?=($result->event_status == 0)? "Pending": "Approved" ?></small>
                        </span>
                        <div class="product-row__status__actions flex-grid" style="position:relative;z-index:var(--z-index-above-overlay);gap:var(--spacer-3)">
                            <a href="<?=site_url("user/view_event/$result->eventID")?>" class="button" type="button" title="View this event">View</a>
                            <a href="<?=site_url("user/delete_attending/$result->attendeeID")?>" class="button danger" type="button" title="Delete this event">Delete</a>
                        </div>
                    </td>
                </tr>
                <?php endforeach;?>


            </tbody>
        </table>
        <?php endif;?>
        <?php if(!$events):?>
            <h1>Currently have no events joined.</h1>
        <?php endif;?>
    </section>
</main>

