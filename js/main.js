// const $ = document.querySelector.bind(document)

/*----------MENU------------*/

$(window).scroll(function(){
    if ($(window).scrollTop() >= 30) {
        $('.logo-menu').addClass('fixed-header');
    }
    else {
        $('.logo-menu').removeClass('fixed-header');
    }
});

const menu = {
    menuClick: function() {
        const btnMenuElement = $('#btn-menu')
        btnMenuElement.click(function() {
            $('.menu__mobile').addClass('active-mobile')
            $('.overlay').addClass('active-overlay')
        })
    },

    closeClick: function() {
        const btnCloseElement = $('#btn-close')
        btnCloseElement.click(function() {
            $('.menu__mobile').removeClass('active-mobile')
            $('.overlay').removeClass('active-overlay')
        })

        const overlayElement = $('.overlay')
        overlayElement.click(function() {
            $('.menu__mobile').removeClass('active-mobile')
            $('.overlay').removeClass('active-overlay')
        })
    },

    start: function() {
        this.menuClick()
        this.closeClick()
    }
}
menu.start();

/*----------Get awesome features------------*/

const money = {
    clickAnnually: function() {
        const annuallyElement = $('#annually')
        const monthlyElement = $('#monthly')
        const h1BusinessElement = $('.Business-class .money h1')
        const h1ProMasterElement = $('.Pro-master .money h1')
        
        annuallyElement.click(function() {
            annuallyElement.removeClass("dis")
            monthlyElement.addClass("dis")
            h1BusinessElement.html(`<h1>$0<span>/year</span></h1>`)
            h1ProMasterElement.html(`<h1>$1000<span>/year</span></h1>`)
        })
    },

    clickMonthly: function() {
        const annuallyElement = $('#annually')
        const monthlyElement = $('#monthly')
        const h1BusinessElement = $('.Business-class .money h1')
        const h1ProMasterElement = $('.Pro-master .money h1')
        
        monthlyElement.click(function() {
            annuallyElement.addClass("dis")
            monthlyElement.removeClass("dis")
            h1BusinessElement.html(`<h1>$0<span>/month</span></h1>`)
            h1ProMasterElement.html(`<h1>$99<span>/month</span></h1>`)
        })
    },
    
    start: function() {
        this.clickAnnually()
        this.clickMonthly()

    }
}
money.start();



/*----------Frequently asked questions------------*/

const frequently = {
    click: function() {
        const textListElement = $('.text__list')
        textListElement.click(function(e) {
            const value = $(this).get(0).classList
            if (value[1] == 'disabled') {
                $(this).get(0).classList.remove('disabled')
                $(this).get(0).classList.add('enable')
            } else {
                $(this).get(0).classList.add('disabled')
                $(this).get(0).classList.remove('enable')
            }
        })
    },

    start: function() {
        this.click()
    }
}
frequently.start();