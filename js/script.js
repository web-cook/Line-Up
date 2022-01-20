$(document).ready(function() {
    //карусель с отзывами
    const userpic = $('.carousel__userpic img');
    const name = $('.carousel__name p');
    const review = $('.carousel__review p');

    const reviewBlock = $('.reviews');//блок с отзывами
    const leftArr = $('.arrow-left');
    const rightArr = $('.arrow-right');

    const carousel = {
        slides: ['man_1.jpg', 'man_2.jpg', 'man_3.jpg'],
        names: ['John', 'Robert', 'Matt'],
        comments: ['Aut, eligendi magni possimus provident distinctio blanditiis vitae nam at inventore labore ducimus quo sunt temporibus omnis quam, repudiandae sapiente!', 'Suscipit pariatur iusto, magnam adipisci numquam in nobis officia corrupti quas, eligendi quos repudiandae dolorum minus facere laborum!', 'Voluptatibus, explicabo blanditiis pariatur alias molestiae ab ratione id iusto officia odio minima tempore expedita deleniti assumenda ipsum.  Rerum eum laboriosam, voluptatem cum eligendi nam ut, aperiam eos ipsum sit ipsam!'],
        frame: 0,
        autoplay: true,

        set: function (image, user, comment) {
            userpic.attr("src", "img/comments/"+image+"");
            name.text(user);
            review.text(comment);
        },

        init: function () {
            this.set(this.slides[this.frame], this.names[this.frame], this.comments[this.frame]);
        },

        right: function () {
            this.frame++;
            if(this.frame == this.slides.length) this.frame = 0;
            this.init();
        },

        left: function () {
            this.frame--;
            if(this.frame < 0) this.frame = this.slides.length - 1;
            this.init();
        }
    }

    carousel.init();
    carouselWheel();
    
    reviewBlock.on('mouseleave', function() {
        carousel.autoplay = true;
        carouselWheel();
    })
    
    reviewBlock.on('mouseenter', function() {
        carousel.autoplay = false;
    })

    leftArr.on('click', function () {
        carousel.left();
    })

    rightArr.on('click', function () {
        carousel.right();
    })

    function carouselWheel () {
        const interval = setInterval(function () {
            carousel.right();
            if(carousel.autoplay === false) clearInterval(interval);
        }, 2000);
    }
    
    //прокрутка к форме
    const buttonOrder = $('.button-order');
    const orderForm = $('.footer');

    let scroll = orderForm.offset().top;

    for(const el of buttonOrder) {
        el.addEventListener('click', function () {
            $('html, body').animate({
            scrollTop: scroll
            }, 500);
        }) 
    }

    //таймер обратного отсчета
    const minutes = $('.timer-minutes');
    const seconds = $('.timer-seconds');
    let sec = 59, min = 29;

    function timer() {
        if (sec < 0) {
            sec = 59;
            min--;
        }
        if (min < 0) min = 29;
        
        if (sec < 10) {
            seconds.text(`0${sec}`);
        } else seconds.text(sec);

        if (min < 10 && min ) {
            minutes.text(`0${min}`);
        } else minutes.text(min);
        
        sec--;
        
        setTimeout(function () {
            timer();
        }, 1000)
    }

    timer();

    //прокрутка к началу страницы
    const buttonUp = $('.arrow-up');

    buttonUp.on('click', function () {
        $('html, body').animate({
            scrollTop: $('body').offset().top
            }, 500);
    })

    //всплывающщие подсказки
    const phoneInput = $('.phone-input');
    const nameInput = $('.name-input');
    const modalPhone = $('.phone-input_modal');
    const modalName = $('.name-input_modal');

    phoneInput.on('focus', function () {
        console.log('onfocus');
        modalPhone.css('display', 'block');
    })

    phoneInput.on('blur', function () {
        console.log('onfocus');
        modalPhone.css('display', 'none');
    })

    nameInput.on('focus', function () {
        console.log('onfocus');
        modalName.css('display', 'block');
    })

    nameInput.on('blur', function () {
        console.log('onfocus');
        modalName.css('display', 'none');
    })
})