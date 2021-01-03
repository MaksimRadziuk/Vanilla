$(document).ready(function(){
	$("#partnersSlider").slick({
	  dots: false,
	  autoplay:true,
	  autoplaySpeed:3000,
	  arrows:true,
	  infinite: true,
	  speed: 2000,
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1501,
	      settings: {
	        slidesToShow: 5
	      }
	    },
	    {
	      breakpoint: 1361,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 971,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 641,
	      settings: {
	        arrows:false,
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
	$(".feedback_slider-wrap").slick({
	  dots: false,
	  autoplay:true,
	  autoplaySpeed:3000,
	  arrows:true,
	  infinite: true,
	  speed: 2000,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1640,
	      settings: {
	        slidesToShow: 4
	      }
	    },
	    {
	      breakpoint: 1271,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 971,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 641,
	      settings: {
	        arrows:false,
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 501,
	      settings: {
	        arrows:false,
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
	$(".article_slider-wrap").slick({
	  dots: false,
	  autoplay:false,
	  arrows:true,
	  infinite: true,
	  speed: 400,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1501,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 1201,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 641,
	      settings: {
	        arrows:false,
	        autoplay:true,
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

	$('.faq_block .question').click(function(){
		$(this).next('.answer').slideToggle("slow");
	});

	$('#playerButton img').click(function() {
		$('#playerButton img').toggleClass('active');
	});

	$('.menu_trigger').click(function(){
		$('#menu').toggleClass('active');
	})
	$('#menu .close').click(function(){
		$('#menu').toggleClass('active');
	})

});

var video;
var display;

window.onload = function() {
	video = document.getElementById("video");
};
function play() {
    video.play();
}

function pause() {
    video.pause();
}


document.addEventListener('DOMContentLoaded', () => {

    const forms = document.querySelectorAll('form');
    const inputFile = document.querySelectorAll('.upload-file__input');

    /////////// Кнопка «Прикрепить файл» /////////// 
    inputFile.forEach(function(el) {
        let textSelector = document.querySelector('.upload-file__text');
        let fileList;

        // Событие выбора файла(ов) 
        el.addEventListener('change', function (e) {

            // создаём массив файлов 
            fileList = [];
            for (let i = 0; i < el.files.length; i++) {
                fileList.push(el.files[i]);
            }

            // вызов функции для каждого файла 
            fileList.forEach(file => {
                uploadFile(file);
            });
        });

        // Проверяем размер файлов и выводим название 
        const uploadFile = (file) => {

            // файла <5 Мб 
            if (file.size > 5 * 1024 * 1024) {
                alert('Файл должен быть не более 5 МБ.');
                return;
            }

            // Показ загружаемых файлов 
            if (file && file.length > 1) {
                if ( file.length <= 4 ) {
                    textSelector.textContent = `Выбрано ${file.length} файла`;
                }
                if ( file.length > 4 ) {
                    textSelector.textContent = `Выбрано ${file.length} файлов`;
                }
            } else {
                textSelector.textContent = file.name;
            }
        }

    });

    // Отправка формы на сервер 
    const postData = async (url, fData) => { // имеет асинхронные операции 

        // начало отправки 
        // здесь можно оповестить пользователя о начале отправки 

        // ждём ответ, только тогда наш код пойдёт дальше 
        let fetchResponse = await fetch(url, {
            method: 'POST',
            body: fData
        });

        // ждём окончания операции 
        return await fetchResponse.text();
    };

    if (forms) {
        forms.forEach(el => {
            el.addEventListener('submit', function (e) {
                e.preventDefault();

                // создание объекта FormData 
                let fData = new FormData();

                // Добавление всех input, кроме type="file" 
                el.querySelectorAll('input:not([type="file"])').forEach(input => {
                    fData.append(input.name, input.value);
                });

                // Добавление файлов input type file 
                let file = el.querySelector('.upload-file__input');
                for (let i = 0; i < (file.files.length); i++) {
                    fData.append('files[]', file.files[i]); // добавляем файлы в объект FormData() 
                }

                // Отправка на сервер 
                postData('./mail.php', fData)
                    .then(fetchResponse => {
                        console.log('Данные успешно отправлены!');
                        console.log(fetchResponse);
                    })
                    .catch(function (error) {
                        console.log('Ошибка!');
                        console.log(error);
                    });
            });
        });
    };

});