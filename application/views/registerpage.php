
<main class="">
<header class="header">
    <a href="<?=site_url("Welcome")?>">
        <h4><- Clean Street Initiatives</h4>
    </a>
    <h1>Join Our Community and Spread Awareness in Environment Cleanliness.</h1>
</header>
<?=form_open(site_url("Register/new_user"))?>
<?php if(validation_errors()):?>
<div class="row mb-3">
    <div class="error-indicator danger" role="alert" style="">There's an error creating your account.</div>
</div>
<?php endif;?>

<?php if(form_error('email')):?>
<div class="row mb-3">
    <div class="error-indicator danger" role="alert" style=""><?=form_error("email")?></div>
</div>
<?php endif;?>

<?php if(form_error('fname')):?>
<div class="row mb-3">
    <div class="error-indicator danger" role="alert" style=""><?=form_error("fname")?></div>
</div>
<?php endif;?>

<?php if(form_error('lname')):?>
<div class="row mb-3">
    <div class="error-indicator danger" role="alert" style=""><?=form_error("lname")?></div>
</div>
<?php endif;?>

<?php if(form_error('password')):?>
<div class="row mb-3">
    <div class="error-indicator danger" role="alert" style=""><?=form_error("password")?></div>
</div>
<?php endif;?>

<?php if(form_error('cpassword')):?>
<div class="row mb-3">
    <div class="error-indicator danger" role="alert" style=""><?=form_error("cpassword")?></div>
</div>
<?php endif;?>

<fieldset class="mb-2 <?= (form_error('email')) ? 'danger' : ''?>">
    <label for="email">Email</label>
    <input type="email" name="email" id="email" placeholder="youremail@email.com" value="<?php if(isset($email)) echo $email ?>">
</fieldset>

<div class="row my-2">
    <fieldset class="col-6 <?= (form_error('fname')) ? 'danger' : ''?>">
        <label for="fname">First Name</label>
        <input type="text" name="fname" id="fname" placeholder="Enter given name" value="<?php if(isset($fname)) echo $fname ?>">
    </fieldset>
    <fieldset class="col-6 <?= (form_error('lname')) ? 'danger' : ''?>">
        <label for="lname">Last Name</label>
        <input type="text" name="lname" id="lname" placeholder="Enter surname" value="<?php if(isset($lname)) echo $lname ?>">
    </fieldset>
</div>

<fieldset class="my-2 <?= (form_error('password')) ? 'danger' : ''?>">
    <label for="password ">Password</label>
    <input type="password" name="password" id="password">
</fieldset>
<fieldset class="my-2 <?= (form_error('cpassword')) ? 'danger' : ''?>">
    <label for="cpassword">Confirm Password</label>
    <input type="password" name="cpassword" id="cpassword">
</fieldset>

<div class="col-12 mt-3">
    <button type="submit" class="button primary form-control">Create account</button>
</div>


<div class="divider mt-2" role="separator">
<span>or</span>
</div>

<div class="col-12 mt-3">
    <button class="button-google form-control"></button>
</div>

<?=form_close()?>


</main>