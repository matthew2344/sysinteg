<?php foreach($user as $result):?>
<header class="sticky">
    <a href="<?=site_url("admin/manage_users")?>"><- Go back</a>
    <h1>User Profile</h1>
    <div class="" role="tablist">
        <a href="<?=site_url("admin/view_user/$result->userid")?>" role="tab" <?php if(isset($profile_page)) echo 'aria-selected="true"'?>>
            Profile
        </a>
        <a href="<?=site_url("admin/view_user_password/$result->userid")?>" role="tab" <?php if(isset($change_pass)) echo 'aria-selected="true"'?>>
            Password
        </a>
        <a href="<?=site_url("admin/view_user_email/$result->userid")?>" role="tab" <?php if(isset($change_email)) echo 'aria-selected="true"'?>>
            Email
        </a>
    </div>
</header>
<?php if(isset($profile_page)):?>
<main class="">

    <?=form_open_multipart(site_url("admin/update_userbasic/$result->userid"))?>
        <?php if(isset($_SESSION["update_success"])):?>
        <div class="row mb-4 px-2">
            <div class="success-indicator success" role="alert" style=""><?=$this->session->flashdata("update_success")?></div>
        </div>
        <?php unset($_SESSION['update_success'])?>
        <?php endif;?>
        <?php if(form_error("fname")):?>
        <div class="row mb-3 px-2">
            <div class="error-indicator danger" role="alert" style=""><?=form_error("fname")?></div>
        </div>
        <?php endif;?>
        <?php if(form_error("lname")):?>
        <div class="row mb-3 px-2">
            <div class="error-indicator danger" role="alert" style=""><?=form_error("lname")?></div>
        </div>
        <?php endif;?>
        <header class="">
            <h2>Profile</h2>
        </header>

        <div class="row mt-4 gy-3">
            <fieldset class="col-lg-6">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="fname" placeholder="First Name" value="<?=$result->fname?>">
            </fieldset>

            <fieldset class="col-lg-6">
                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lname" placeholder="Last Name" value="<?=$result->lname?>">
            </fieldset>
        </div>

        <div class="row mt-4">
            <input type="file" name="avatar" id="avatar" accept=".jpeg,.jpg,.png">
            <fieldset>
                <legend>
                    <label for="">Logo</label>
                </legend>
                <div class="image-uploader" id="image_section">

                    <div class="placeholder" id="my_placeholder" style="display: none">
                        <div>
                            <label>
                                <button class="button primary" id="attach_poster" role="button"><span class="icon icon-upload-fill"></span>Upload</button>
                            </label>
                        </div>
                    </div>
            
                    <figure tabindex="0" id="my_figure" style="">
                        <img alt="Current logo" id="blah" src="<?=base_url("assets/img/profile_pic/$result->avatar")?>">
                        <svg viewBox="0 0 1 1" id="remove_button" role="button" aria-label="Change logo" class="remove-button remove-button--at-top-right remove" style="width:var(--big-icon-size)">
                            <circle cx="0.5" cy="0.5" r="0.375" style="fill:var(--danger)"></circle>
                            <path d="M0.39 0.39L0.61 0.61M0.61 0.39L0.39 0.61" style="stroke:var(--background);stroke-width:0.11px;stroke-linecap:round"></path>
                        </svg>
                    </figure>
                    <div>Your logo will be visible next to your name in your profile and product pages. Your image should be at least 200x200px and must be in JPG or PNG format.</div>
                </div>
            </fieldset>
        </div>
        
        <div class="row mt-5 p-2">
            <button type="submit" class="accent">
                <span class="icon icon-save"></span> Update Settings
            </button>
        </div>

    <?=form_close();?>
    
    <?=form_open(site_url("admin/update_usertype/$result->userid"))?>
        
    <section style="border-style: none;">

        <header class="">
            <h2>Additional Settings</h2>
        </header>

        <?php if(isset($_SESSION["usertype_change"])):?>
        <div class="row mb-4 px-2">
            <div class="success-indicator success" role="alert" style=""><?=$this->session->flashdata("usertype_change")?></div>
        </div>
        <?php unset($_SESSION['usertype_change'])?>
        <?php endif;?>

        <fieldset>
            <legend>
                <label for="">User type</label>
            </legend>
            <select name="isAdmin" id="">
                <option value="" <?php if($result->isAdmin == 1) echo 'selected'; ?> >Admin</option>
                <option value="" <?php if($result->isAdmin == 0) echo 'selected'; ?>>User</option>
            </select>
        </fieldset>

        <fieldset>
            <label for="">
                <input type="checkbox" name="user_active" id="" role="switch" value="<?=($result->user_active == 0)? '1':'0'?>" <?=($result->user_active == 0)? '':'checked'?>>
                Disable this account.
            </label>
            <small>
                User will not be able to access their account if enabled.
            </small>
        </fieldset>
        
        <div>
            <button class="accent submit" type="submit">
                <div class="icon icon-save"></div>
                Apply Changes
            </button>
        </div>

    </section>
    <?=form_close()?>
</main>



<script defer>
const remove_button = document.getElementById("remove_button");

const my_figure = document.getElementById("my_figure");

const my_placeholder = document.getElementById("my_placeholder");

const my_upload = document.getElementById("avatar");

const attachPosterButton = document.getElementById('attach_poster');

const blah = document.getElementById("blah");

remove_button.onclick = () => {
    my_figure.style.display = "none";
    my_placeholder.style.display = "grid";
}

attachPosterButton.addEventListener('click', (event) => {
  event.preventDefault();
  my_upload.click();
});


my_upload.addEventListener('change', () => {
    const [file] = my_upload.files

    if(file){
        blah.src = URL.createObjectURL(file)
    }

    my_figure.style.display = "block";
    my_placeholder.style.display = "none";
})



</script>
<?php endif;?>

<?php if(isset($change_pass)):?>
<main class="">

    <?=form_open_multipart(site_url("admin/update_userpass/$result->userid"))?>
        <section>
            <?php if(isset($_SESSION["update_success"])):?>
            <div class="row mb-4 px-2">
                <div class="success-indicator success" role="alert" style=""><?=$this->session->flashdata("update_success")?></div>
            </div>
            <?php unset($_SESSION['update_success'])?>
            <?php endif;?>
            <?php if(form_error("npassword")):?>
            <div class="row mb-3 px-2">
                <div class="error-indicator danger" role="alert" style=""><?=form_error("npassword")?></div>
            </div>
            <?php endif;?>
            <?php if(form_error("rpassword")):?>
            <div class="row mb-3 px-2">
                <div class="error-indicator danger" role="alert" style=""><?=form_error("rpassword")?></div>
            </div>
            <?php endif;?>
            <?php if(isset($_SESSION["update_fail"])):?>
            <div class="row mb-4 px-2">
                <div class="error-indicator danger" role="alert" style=""><?=$this->session->flashdata("update_fail")?></div>
            </div>
            <?php unset($_SESSION['update_fail'])?>
            <?php endif;?>
            <header class="">
                <h2>Change Password</h2>
            </header>
            <fieldset>
                <legend>
                    <label for="new-password">New password</label>
                </legend>
                <input id="new-password" name="npassword" type="password"  value="">
            </fieldset>
            <fieldset>
                <legend>
                    <label for="rpassword">Repeat new password</label>
                </legend>
                <input id="rpassword" name="rpassword" type="password"  value="">
            </fieldset>
            <fieldset>
                <div>
                    <button class="accent" type="submit"><span class="icon icon-save"></span>Change password</button>
                </div>
            </fieldset>
        </section>
            

    <?=form_close();?>
</main>
<?php endif;?>


<?php if(isset($change_email)):?>

<main class="">

    <?=form_open_multipart(site_url("admin/update_useremail/$result->userid"))?>
    <section>
        <?php if(form_error('email')):?>
        <div class="row mb-3 px-2">
            <div class="error-indicator danger" role="alert" style=""><?=form_error('email')?></div>
        </div>
        <?php endif;?>
        <?php if(form_error('cpassword')):?>
        <div class="row mb-3 px-2">
            <div class="error-indicator danger" role="alert" style=""><?=form_error('cpassword')?></div>
        </div>
        <?php endif;?>
        <?php if(isset($_SESSION["update_fail"])):?>
        <div class="row mb-4 px-2">
            <div class="error-indicator danger" role="alert" style=""><?=$this->session->flashdata("update_fail")?></div>
        </div>
        <?php unset($_SESSION['update_fail'])?>
        <?php endif;?>
        <?php if(isset($_SESSION["update_success"])):?>
        <div class="row mb-4 px-2">
            <div class="success-indicator success" role="alert" style=""><?=$this->session->flashdata("update_success")?></div>
        </div>
        <?php unset($_SESSION['update_success'])?>
        <?php endif;?>
        <header class="">
            <h2>Change Email</h2>
        </header>
        <fieldset>
            <legend>
                <label for="email">Email</label>
            </legend>
            <input id="email" name="email" type="email"  value="<?=$result->email?>">
        </fieldset>
        <fieldset>
            <div>
                <button class="accent" type="submit"><span class="icon icon-save"></span>Change Email</button>
            </div>
        </fieldset>
    </section>
        

    <?=form_close();?>
</main>

<?php endif;?>

<?php endforeach;?>