<div class="terms_and_conditions">
    
    <div class="tmodal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, architecto distinctio. Nobis eius debitis explicabo unde excepturi voluptatum, eaque, porro dolores obcaecati sunt sit adipisci beatae delectus itaque? Officiis, culpa.

        <div class="tmodal_footer">
            <button class="accept"><?php echo gett('Aceptar y Descargar') ?></button>
        </div>
    </div>

</div>

<style>
    .terms_and_conditions{
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.3);
        top: 0;
        left: 0;
        z-index: 999;
        display: none;
    }

    .terms_and_conditions .tmodal{
        width: 60%;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 10%;
        /* transform: translateY(-50%); */
        position: absolute;
        background: #fff;
        padding: 30px;
        border-radius: .3em;
        box-shadow: 0px 0px 2px 1px rgba(0,0,0,.2);
    }
    .terms_and_conditions .tmodal .tmodal_footer{
        padding: 15px 0px;
        text-align: center;
    }

    .terms_and_conditions .tmodal .tmodal_footer .accept{
        height: 4rem;
        border-radius: .3rem;
    }
</style>