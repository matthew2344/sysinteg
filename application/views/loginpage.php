<main class="">
<header class="header">
    <a href="<?=site_url("Welcome")?>">
        <h4><- Clean Street Initiatives</h4>
    </a>
    <h1>Welcome back.</h1>
</header>

<div class="row">
    <?php if(validation_errors()):?>
    <div class="row mb-3">
        <div class="error-indicator danger" role="alert" style="">Incorrect user authentication.</div>
    </div>
    <?php endif;?>

    <?php if(isset($_SESSION["Error"])):?>
    <div class="row mb-3">
        <div class="error-indicator danger" role="alert" style=""><?=$this->session->flashdata("Error")?></div>
    </div>
    <?php endif;?>

    <?=form_open(site_url("Login/auth"))?>
    <fieldset class="my-2 <?= (form_error('email')) ? 'danger' : ''?>">
        <label for="email">Email</label>
        <input type="email" name="email" id="email">
    </fieldset>
    <fieldset class="my-2 <?= (form_error('password')) ? 'danger' : ''?>">
        <label for="password">Password</label>
        <input type="password" name="password" id="password">
    </fieldset>

    <div class="col-12 mt-3">

        <button type="submit" class="button primary form-control">Login</button>
    </div>

    <div class="col-12 mt-3">
        <button formaction="<?=site_url("Register")?>" class="button form-control">Register</button>
    </div>

    <div class="divider mt-2" role="separator">
    <span>or</span>
    </div>

    <div class="col-12 mt-3">
        <button class="button-google form-control"></button>
    </div>

    <?=form_close()?>
</div>



</main>