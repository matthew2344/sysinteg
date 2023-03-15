<header class="sticky">
    <h1>Create Event.</h1>
</header>

<main class="squished">

    <section>
    <?php if(validation_errors()):?>
    <div class="row mb-3 px-2">
        <div class="error-indicator danger" role="alert" style="">There's an error creating your event.</div>
    </div>
    <?php endif;?>
    <?php if(isset($_SESSION["Time_error"])):?>
    <div class="row mb-3 px-2">
        <div class="error-indicator danger" role="alert" style=""><?=$this->session->flashdata("Time_error")?></div>
    </div>
    <?php endif;?>
    <?php if(isset($_SESSION["upload_error"])):?>
    <div class="row mb-3 px-2">
        <div class="error-indicator danger" role="alert" style=""><?=$this->session->flashdata("upload_error")?></div>
    </div>
    <?php unset($_SESSION['upload_error'])?>
    <?php endif;?>
    <?php if(isset($_SESSION["upload_event_200"])):?>
    <div class="row mb-3 px-2">
        <div class="success-indicator success" role="alert" style=""><?=$this->session->flashdata("upload_event_200")?></div>
    </div>
    <?php unset($_SESSION['upload_event_200'])?>
    <?php endif;?>
        <?=form_open_multipart(site_url("User/add_event"), array('id' => 'formID'))?>
        <div class="container">
        <fieldset class="mb-4 <?= (form_error('title_input')) ? 'danger' : ''?>">
            <label for="title_input">Title</label>
            <input type="text" name="title_input" id="title_input" value="<?php if(isset($title_input)) echo $title_input ?>">
        </fieldset>

        <div class="row">

            <fieldset class="col-sm-8 col-lg-12 mb-4 <?= (form_error('location')) ? 'danger' : ''?>">
                <label for="location">Place of Event</label>
                <input type="text" name="location" id="location" value="<?php if(isset($location)) echo $location ?>">
            </fieldset>

            <fieldset class="col-sm-4 col-lg-12 mb-4">
                <label for="event_type">Type of Event</label>
                <select name="event_type" id="event_type">
                    <option value="Cleaning Event" 
                        <?php if(isset($event_type)){
                        if($event_type == "Cleaning Event") echo 'selected';
                        }
                        ?> 
                    >Cleaning Event</option>
                    <option value="Awareness Event" 
                    <?php if(isset($event_type)) {
                        if($event_type == "Awareness Event") echo 'selected';
                    }
                    ?>
                    >Awareness Event</option>
                </select>
            </fieldset>
        </div>
        <div class="row">

            <fieldset class="col-lg-12 col-sm-12 mb-4 <?= (form_error('date')) ? 'danger' : ''?>">
                <label for="date">Date</label>
                <input type="date" name="date" id="date" value="<?php if(isset($date)) echo $date ?>">
            </fieldset> 
            <fieldset class="col-lg-6 col-sm-6 col-12 mb-4 <?= (isset($_SESSION["Time_error"])) ? 'danger' : ''?>">
                <label for="startTime">Time Start</label>
                <select aria-label="Event Time Select" name="startTime" id="startTime">
                    <?php foreach($my_option as $value):?>
                        <option value="<?=$value?>" 
                        <?php if(isset($startTime)){
                            if($startTime == $value) echo 'selected';
                        }
                        ?> 
                        >
                        <?=$value?>
                        </option>
                    <?php endforeach;?>
                </select>
            </fieldset> 

            <fieldset class="col-lg-6 col-sm-6 col-12 mb-4 <?= (isset($_SESSION["Time_error"])) ? 'danger' : ''?>">
                <label for="endTime">Time End</label>
                <select aria-label="Event Time Select" name="endTime" id="endTime">
                    <?php foreach($my_option as $value):?>
                        <option value="<?=$value?>" 
                        <?php if(isset($endTime)){
                            if($endTime ==$value) echo 'selected';
                        }
                        ?> 
                        ><?=$value?>
                        </option>
                    <?php endforeach;?>
                </select>
            </fieldset> 
        </div>

        <div class="row mb-4">
            <input type="file" name="upload_poster" id="upload_poster" accept=".jpeg,.jpg,.png">
            <fieldset>
                <legend>
                    <label for="">Poster</label>
                </legend>
                <div class="image-uploader row" id="image_section">

                    <figure tabindex="0" class="col-sm-12 col-md-8 col-lg-8" id="my_placeholder" style="display:block">

                    <div class="placeholder col-sm-12 col-md-8 col-lg-8"  style="display: grid">
                        <div>
                            <label>
                                <button class="button primary" id="attach_poster" role="button"><span class="icon icon-upload-fill"></span>Upload</button>
                            </label>
                        </div>
                    </div>

                    </figure>
            
                    <figure tabindex="0" class="col-sm-12 col-md-8 col-lg-8" id="my_figure" style="display: none">
                        <img alt="Current logo" id="blah" src="http://[::1]/CSI/assets/img/profile_pic/default.png">
                        <svg viewBox="0 0 1 1" id="remove_button" role="button" aria-label="Change logo" class="remove-button remove-button--at-top-right remove" style="width:var(--big-icon-size)">
                            <circle cx="0.5" cy="0.5" r="0.375" style="fill:var(--danger)"></circle>
                            <path d="M0.39 0.39L0.61 0.61M0.61 0.39L0.39 0.61" style="stroke:var(--background);stroke-width:0.11px;stroke-linecap:round"></path>
                        </svg>
                    </figure>
                    <div class="col-md-4 col-lg-4">Your logo will be visible next to your name in your profile and product pages. Your image should be at least 1500 X 2100 pixels and must be in JPG or PNG format.</div>

                </div>
            </fieldset>
        </div>


        <label for="description" class="my-2">Description</label>
        <textarea name="description" id="description" cols="30" rows="10" placeholder="Enter description here.."><?php if(isset($description)) echo $description ?></textarea>

        <button type="submit" class="form-control primary mt-4">Create Event</button>

        
    </div>
            
        <?=form_close()?>
    </section>

    <?php unset($_SESSION["Time_error"])?>
</main>
<aside aria-label="Preview">
    <div class="" style="display: grid; grid-auto-flow: column; grid-gap: var(--spacer-3); align-items: center; justify-content: space-between;">
        <h2>Preview</h2>
        <div class="has-tooltip bottom">
            <button class="outline js-preview-link" id="previewButton">
                <span class="icon icon-arrow-diagonal-up-right"></span>
            </button>
            <div role="tooltip">
                Save & Preview
            </div>
        </div>
    </div>

    <div role="document" style="height: auto; overflow: hidden;">
        <div style="pointer-events: none; transform: scale(0.4); transform-origin: left top; width: 250%;">
            <article class="product">
                <div class="preview-container carousel" style="padding-bottom: 25%;" id="preview_container">
                    <img src="" alt="" class="preview" id="preview_img">
                </div>
                <section class="carousel">
                    <header class="">
                        <h1 itemprop="name" id="preview_title">Title</h1>
                        <a href="" target="_blank" class="user" rel="noreferrer" style="position: relative;"><img class="user-avatar" src="<?=base_url("assets/img/profile_pic/".$_SESSION['avatar'])?>"><?=$_SESSION['fname']?> <?=$_SESSION['lname']?></a>
                    </header>
                </section>
                <section class="p-2">
                    <div class="rich-text">
                        <p id="preview_description">Description</p>
                    </div>
                </section>
                <section class="px-2">
                    <div class="row p-2">
                        <a href="" class="button primary col-12">
                            Join Event
                        </a>
                    </div>
                    <div class="stack mb-2">
                        <div><p><span class="icon icon-people-fill"></span> 0 People Joining</p></div>
                        <div>
                            <h5><span class="icon icon-calendar-all-fill"></span> Date: </h5>
                            <div id="preview_datetime">yyyy-mm-dd h:i-h:i</div>
                        </div>
                        <div>
                            <h5><span class="icon icon-info-circle-fill"></span> Event Type: </h5>
                            <div id="preview_type">Cleaning Event</div>
                        </div>
                        <div>
                            <h5><i class="fa-solid fa-location-dot"></i> Location: </h5>
                            <div id="preview_location"></div>
                        </div>
                    </div>
                </section>
            </article>
            </div>
        </div>
</aside>


<script defer>
const remove_button = document.getElementById("remove_button");
const attachPosterButton = document.getElementById('attach_poster');
const uploadPosterInput = document.getElementById('upload_poster');
const blah = document.getElementById("blah");
const previewButton = document.getElementById("previewButton");
const myForm = document.getElementById("formID");
const previewImg = document.getElementById("preview_img");
const previewContainer = document.getElementById("preview_container");
const titleInput = document.getElementById("title_input");
const descriptionInput = document.getElementById("description");
const locationInput = document.getElementById("location");
const typeInput = document.getElementById("event_type");
const dateInput = document.getElementById("date");
const datePreview = document.getElementById("preview_datetime");
const previewTitle = document.getElementById("preview_title");
const previewDescription = document.getElementById("preview_description");
const previewType = document.getElementById("preview_type");
const previewLocation = document.getElementById("preview_location");

const startTime = document.getElementById("startTime");
const endTime = document.getElementById("endTime");
// const my_upload =  document.getElementById("avatar");

titleInput.addEventListener("input", updateTitle);
locationInput.addEventListener("input", updateLocation);
descriptionInput.addEventListener("input", updateDescription);

function updateTitle(e){
    previewTitle.textContent = e.target.value;
};

function updateDescription(e){
    previewDescription.textContent = e.target.value;
};

function updateLocation(e){
    previewLocation.textContent = e.target.value;
};

function updateDate(){
    var date = `${dateInput.value} ${startTime.value}-${endTime.value}`;
    datePreview.textContent = date;
}

dateInput.addEventListener('change', updateDate);
startTime.addEventListener('change', updateDate);
endTime.addEventListener('change', updateDate);



attachPosterButton.addEventListener('click', (event) => {
  event.preventDefault();
  uploadPosterInput.click();
});

typeInput.addEventListener('change', () => {
    previewType.textContent = typeInput.value;
})


remove_button.onclick = () => {
    my_figure.style.display = "none";
    my_placeholder.style.display = "block";
    previewImg.src = "";
    previewContainer.style.paddingBottom = "25%";
}

previewButton.addEventListener('click', () => {
    myForm.action = "<?=site_url("user/add_event/xcvk")?>";
    myForm.submit();
})


uploadPosterInput.addEventListener('change', () => {
    const [file] = uploadPosterInput.files

    if(file){
        blah.src = URL.createObjectURL(file)
        previewImg.src = URL.createObjectURL(file)
        previewContainer.style.paddingBottom = "0";
    }

    my_figure.style.display = "block";
    my_placeholder.style.display = "none";
})

</script>
<!-- <script src="https://assets.gumroad.com/assets/application-57329222fde6300cfaa31905412077901afb8abb0c5334c35ac780c21a414211.js" type="text/javascript"></script>
<script src="https://assets.gumroad.com/assets/i18n/en-6da6ed7bbb90964883aed9239c551bbd1018e6cf711bcf92b98a449cd137d19c.js" type="text/javascript"></script>
<script src="https://assets.gumroad.com/packs/js/webpack-runtime-87c9fd84f1e5a32cd011.js" defer="defer" type="text/javascript"></script>
<script src="https://assets.gumroad.com/packs/js/webpack-commons-bb9fc17e275ee723d471.js" defer="defer" type="text/javascript"></script>
<script src="https://assets.gumroad.com/packs/js/product-f01831d3f171cb4c89a1.js" defer="defer" type="text/javascript"></script> -->
