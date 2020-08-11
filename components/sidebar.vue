<template>
    <div class="one">
        <div class="one1">
            <img src="~/assets/Group 58.png" alt="">
            
            <h5>HIRING CHECKLIST</h5>
            <p>Contact Info</p>
            <p>Employment type</p>
            <p>Job Details</p>
            <p>Offer Details</p>
        </div>
    </div>
</template>

<style scoped>
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Overpass', sans-serif;
        
    }
    .one{
        top: 0;
        left: 0;
        width: 25%;
        height: 100vh;
        background: #F9F9F9;
    }
    .one1{
        padding-left: 100px;
        margin-top: 20px;
        padding-right: 10px;
    }
    .one1 img{
        width: 60%;
        vertical-align: middle;
        border-radius: 50%;
        margin-bottom: 20px;
    }
    .one1 h5{
        margin-bottom: 20px;
        color: #081D29;
    }
    .one1 p{
        margin-bottom: 10px;
        color: #081D29;
    }

    @media (max-width:567px) {
        .one{
            display: none;
        }
    }


    @media(min-width: 568px) and (max-width:768px) {
        .one1{
        padding-left: 40px;
    }
    }

    @media(min-width: 769px) and (max-width:1200px) {
        .one1{
        padding-left: 40px;}
    }
    
</style>