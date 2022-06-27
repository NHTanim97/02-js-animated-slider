    // --------js file
    let image = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

    let index = 0;

    let myImg = document.getElementById('myImg');

    /*
    setInterval 2টা parameter নেয় 
    ১ function name
    2 sec মানে time
    */
    setInterval(change, 1000);

    function change(){
        index ++;
        if(index >= image.length){
            index = 0;
            myImg.src = image[index];

        }else{
            myImg.src = image[index];
        }
    }