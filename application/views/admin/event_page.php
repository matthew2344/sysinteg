<main class="">
    <?php foreach($event as $result):?>
    <header class="">
        <?php if(isset($_SESSION['back'])):?>
            <a href="<?=$_SESSION['back']?>"><h4><- Go Back</h4></a>
        <?php else:?>
            <a href="<?=site_url("admin/manage_events")?>"><h4><- Go Back</h4></a>
        <?php endif;?>
        <h1><?=$result->title?></h1>
        <a href="" class="user" rel="noreferrer" style="position: relative;"><img class="user-avatar" style="height:50px; width: 50px;" src="<?=base_url("assets/img/profile_pic/$result->avatar")?>"><?=$result->fname?> <?=$result->lname?></a>
    </header>


    <div class="container">

        <?php if(isset($_SESSION["joined_failed"])):?>
            <div class="row mb-4 px-2">
                <div class="success-indicator danger" role="alert" style=""><?=$this->session->flashdata("joined_failed")?></div>
            </div>
            <?php unset($_SESSION['joined_failed'])?>
        <?php endif;?>

        <?php if(isset($_SESSION["joined_success"])):?>
            <div class="row mb-4 px-2">
                <div class="success-indicator success" role="alert" style=""><?=$this->session->flashdata("joined_success")?></div>
            </div>
            <?php unset($_SESSION['joined_success'])?>
        <?php endif;?>

        <article class="product">
            <div class="preview-container carousel" style="padding-bottom: 0;" id="preview_container">
                <img src="<?=base_url("assets/img/uploads/$result->poster")?>" alt="" class="preview" id="preview_img">
            </div>
            <section class="carousel">
                <header class="">
                    <h1 itemprop="name" id="preview_title"><?=$result->title?></h1>
                    <a href="" target="_blank" class="user" rel="noreferrer" style="position: relative;"><img class="user-avatar" src="<?=base_url("assets/img/profile_pic/$result->avatar")?>"><?=$result->fname?> <?=$result->lname?></a>
                </header>
            </section>
            <section class="p-2">
                <div class="rich-text">
                    <p id="preview_description"><?=$result->description?></p>
                </div>
            </section>
            <section class="px-2">
                <div class="row p-2">
                    <a href="<?=site_url("user/join_/$result->eventID")?>" class="button primary col-12">
                        Join Event
                    </a>
                </div>
                <div class="stack mb-2">
                    <div>
                        <h5><span class="icon icon-people-fill"></span> People Joining: </h5>
                        <div><?=$result->count?> Joining</div>
                    </div>
                    <div>
                        <h5><span class="icon icon-calendar-all-fill"></span> Date: </h5>
                        <div id="preview_datetime"><?=$result->date_event?> <?=$result->start_time?>-<?=$result->end_time?></div>
                    </div>
                    <div>
                        <h5><span class="icon icon-info-circle-fill"></span> Event Type: </h5>
                        <div id="preview_type"><?=$result->event_type?></div>
                    </div>
                    <div>
                        <h5><i class="fa-solid fa-location-dot"></i> Location: </h5>
                        <div id="preview_location"><?=$result->location?></div>
                    </div>
                </div>
            </section>
        </article>
    </div>



    <?php endforeach;?>
</main>